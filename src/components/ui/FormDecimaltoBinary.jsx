import React, { useState } from 'react';

// components
import Header from '../header/Header';
import Error from '../ui/error/Error';

// helpers
import { hideError } from '../../helpers/hideError';
import { calculateBinary } from '../../helpers/calculateBinary';

//  Formulario que convierte el número decimal a binario
const FormDecimaltoBinary = () => {

    // State para inputs del formulario
    const [formvalues, setFormvalues] = useState({
        decimal: '',
        binary: ''
    });

    // State para algún error
    const [error, setError] = useState(false);
    
    let { decimal, binary } = formvalues;

    // Función para los inputs
    const handleChange = e => {
        setFormvalues({
            ...formvalues,
            [ e.target.name ] :  e.target.value
        });
        
            
    }

    // Función que reestablece los inputs
    const handleReset = e => {
        e.preventDefault();
        setFormvalues({
            decimal: '',
            binary: ''
        });
    }

    // función que realiza la conversión
    const handleSubmit = e => {
        e.preventDefault();

        if( decimal.trim() === '' || isNaN(decimal) ){
            setError(true);
            hideError( setError );
            return;
        }else{

            setFormvalues({
                ...formvalues,
                binary: calculateBinary(decimal)
            });
        }

    }

    return (
        <div className="form-container">
            <Header 
                title="Conversor de Decimal a Binario"
            />
            <form className="form">
                
            { error === true ?
                    <Error 
                        msg="Ingresa sólo números"
                    />
                    :
                    null
                }
                <div className="form-group">
                    <label className="form-label">Decimal</label>
                    <input 
                        type="number" 
                        name="decimal"
                        className="form-input"
                        placeholder="Ejem. 56, 23 o 623"
                        value={ decimal }
                        onChange={ handleChange }
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Resultado</label>
                    <input 
                        type="number" 
                        name="binary"
                        className="form-input"
                        placeholder="Binario"
                        value={ binary }
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
 
export default FormDecimaltoBinary;