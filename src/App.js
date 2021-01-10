import React from 'react';
import Header from './components/header/Header';
import Form from './components/ui/Form';
import FormDecimaltoBinary from './components/ui/FormDecimaltoBinary';

function App() {
  return (
    <div className="container">
      <Form />
      <FormDecimaltoBinary />
    </div>
  );
}

export default App;
