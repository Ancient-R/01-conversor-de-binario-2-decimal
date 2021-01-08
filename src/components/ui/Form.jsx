import React, { useState } from 'react';
import Header from '../header/Header';

import { hideError } from '../../helpers/hideError';
import { calculateDecimal } from '../../helpers/calculateDecimal';

const Form = () => {

    const [formvalues, setFormvalues] = useState({
        binary: '',
        decimal: ''
    });
    
    const [error, setError] = useState(false);
    const [isBinary, setIsBinary] = useState(true);
    
    const { binary, decimal } = formvalues;

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

    const handleSubmit = e => {
        e.preventDefault();

        if( binary.trim() === '' || !isBinary ){
            setError(true);
            hideError( setError );
            return;
        }else{
            calculateDecimal( binary );
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

                <input 
                    type="submit"
                    className="form-submit"
                    value="Convertir"
                    onClick={ handleSubmit }
                />
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