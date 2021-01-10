import React, { useRef, useState } from 'react';

// components
import Header from '../header/Header';
import Error from '../ui/error/Error';

// helpers
import { hideError } from '../../helpers/hideError';
import { calculateBinary } from '../../helpers/calculateBinary';

//  Formulario que convierte el número decimal a binario
const FormDecimaltoBinary = () => {

    const decimalRef = useRef();

    // State para inputs del formulario
    const [formvalues, setFormvalues] = useState({
        decimal: '',
        binary: ''
    });

    // State para algún error
    const [error, setError] = useState(false);
    
    const { decimal, binary } = formvalues;

    // expresión regular para validar sólo números
    const regx = /([0-9])/g;

    // Función para los inputs
    const handleChange = e => {
        setFormvalues({
            ...formvalues,
            decimal: e.target.value
        });
            
    }

    // Función que reestablece los inputs
    const handleReset = e => {
        e.preventDefault();
        setFormvalues({
            decimal: '',
            binary: ''
        });

        decimalRef.current.classList.remove('success-input'); 
        decimalRef.current.classList.remove('error-input'); 
    }

    // función que realiza la conversión
    const handleSubmit = e => {
        e.preventDefault();

        if( !regx.test( decimal ) ){
            decimalRef.current.classList.remove('success-input'); 
            decimalRef.current.classList.add('error-input');
            setError( true );
            hideError( setError );
            return;
            
        }else{
            decimalRef.current.classList.remove('error-input'); 
            decimalRef.current.classList.add('success-input');
            setError( false );
            setFormvalues({
                binary: calculateBinary(decimal)
            });
        }

    }

    return (
        <div className="form-container">
            <Header 
                title="Decimal a Binario"
            />
            <form className="form">
                
                {error ? 
                    <Error 
                        msg="Ingresa sólo números"
                    />
                : null
                }
                <div className="form-group">
                    <label className="form-label">Decimal</label>
                    <input 
                        type="text" 
                        name="decimal"
                        className="form-input"
                        placeholder="Ejem. 56, 23 o 623"
                        ref={ decimalRef }
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