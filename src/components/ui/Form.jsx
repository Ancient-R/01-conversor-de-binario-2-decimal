import React, { useRef, useState } from 'react';

// components
import Header from '../header/Header';
import Error from './error/Error';

// helpers
import { hideError } from '../../helpers/hideError';
import { calculateDecimal } from '../../helpers/calculateDecimal';

//  Formulario que convierte el número binario en decimal
const Form = () => {

    const binaryRef = useRef();
    // State para inputs del formulario
    const [formvalues, setFormvalues] = useState({
        binary: '',
        decimal: ''
    });
    
    // State para algún error
    const [error, setError] = useState(false);

    // State que verifica si el número ingresado es binario
    const [isBinary, setIsBinary] = useState(false);
    
    const { binary, decimal } = formvalues;

    // Función para los inputs
    const handleChange = e => {
        setFormvalues({
            binary: e.target.value
        });
        const numbers = binary.split(''); 
        numbers.map(value => ( parseInt( value ) === 1 || parseInt( value ) === 0 ) ?
            setIsBinary(true)
        :
            setIsBinary(false)

        )}

    // Función que reestablece los inputs
    const handleReset = e => {
        e.preventDefault();
        setFormvalues({
            binary: '',
            decimal: ''
        });

        binaryRef.current.classList.remove('success-input');
        binaryRef.current.classList.remove('error-input');
    }

    // función que realiza la conversión
    const handleSubmit = e => {
        e.preventDefault();

        if( binary.trim() === '' || !isBinary ){
            binaryRef.current.classList.remove('success-input');
            binaryRef.current.classList.add('error-input');
            setError(true);
            hideError( setError );
            return;
        }else{
            binaryRef.current.classList.remove('error-input');
            binaryRef.current.classList.add('success-input');
            setFormvalues({
                ...formvalues,
                decimal: calculateDecimal(binary)
            });
        }

    }

    return (
        <div className="form-container">
            <Header 
                title="Binario a Decimal"
            />
            <form className="form">
                
            { error === true ?
                    <Error 
                        msg="Ingresa sólo 0 y 1"
                    />
                    :
                    null
                }
                <div className="form-group">
                    <label className="form-label">Binario</label>
                    <input 
                        type="text" 
                        name="binary"
                        ref={ binaryRef }
                        className="form-input"
                        placeholder="Ejem. 01 101 010101"
                        value={ binary }
                        onChange={ handleChange }
                    />
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
            </form>
        </div>
    );
}
 
export default Form;