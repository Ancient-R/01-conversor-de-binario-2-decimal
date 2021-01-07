import React from 'react'
import Header from '../header/Header';


const Form = () => {
    return (
        <div className="form-container">
            <Header />
            <form className="form">
                <div className="form-group">
                    <label className="form-label">Binario</label>
                    <input 
                        type="number" 
                        className="form-input"
                        placeholder="Ejem. 01 101 010101"
                    />
                </div>
                <input 
                    type="submit"
                    className="form-submit"
                    value="Convertir"
                />
                <div className="form-group">
                    <label className="form-label">Resultado</label>
                    <input 
                        type="number" 
                        className="form-input"
                        placeholder="Decimal"
                    />
                </div>
            </form>
        </div>
    );
}
 
export default Form;