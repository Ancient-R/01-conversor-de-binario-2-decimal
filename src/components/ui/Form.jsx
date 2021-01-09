import React, { useState } from 'react';
import Header from '../header/Header';

import { hideError } from '../../helpers/hideError';
import { calculateDecimal } from '../../helpers/calculateDecimal';

//  Formulario que convierte el número binario en decimal
const Form = () => {

    // State para inputs del formulario
    const [formvalues, setFormvalues] = useState({
        binary: '',
        decimal: ''
    });
    
    // State para algún error
    const [error, setError] = useState(false);

    // State que verifica si el número ingresado es binario
    const [isBinary, setIsBinary] = useState(true);
    
    const { binary, decimal } = formvalues;

    // Función para los inputs
    const handleChange = e => {
        setFormvalues({
            ...formvalues,
            [ e.target.name ] :  e.target.value
        });
        const numbers = binary.split(''); 
        numbers.map(value => parseInt(value) > 1 ?
            setIsBinary(false)
        :
            setIsBinary(true)
        );
    }

    // Función que reestablece los inputs
    const handleReset = e => {
        e.preventDefault();
        setFormvalues({
            binary: '',
            decimal: ''
        });
    }

    // función que realiza la conversión
    const handleSubmit = e => {
        e.preventDefault();

        if( binary.trim() === '' || !isBinary ){
            setError(true);
            hideError( setError );
            return;
        }else{
            setFormvalues({
                ...formvalues,
                decimal: calculateDecimal(binary)
            });
        }

    }

    return (
        <div className="form-container">
            <Header />
            <form className="form">
                
            { error === true ?
                    <p className="error fadein">Ingresa sólo 0´s y 1´s</p>
                    :
                    null
                }
                <div className="form-group">
                    <label className="form-label">Binario</label>
                    <input 
                        type="number" 
                        name="binary"
                        className="form-input"
                        placeholder="Ejem. 01 101 010101"
                        value={ binary }
                        onChange={ handleChange }
                    />
                </div>

                <div className="buttons-container">
                    <input 
                        type="submit"
                        className="form-submit"
                        value="Convertir"
                        onClick={ handleSubmit }
                    />
                    <button 
                        className="form-submit"
                        onClick={ handleReset }
                    >Limpiar campos</button>
                </div>
                <div className="form-group">
                    <label className="form-label">Resultado</label>
                    <input 
                        type="number" 
                        name="decimal"
                        className="form-input"
                        placeholder="Decimal"
                        value={ decimal }
                        onChange={ handleChange }
                        disabled={true}
                    />
                </div>
            </form>
        </div>
    );
}
 
export default Form;