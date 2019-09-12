import React, { useState, useContext } from 'react';

import AlertContext from '../context/alert/AlertContext';


const Form = () => {
  const [value, setValue] = useState('');
  const alert = useContext(AlertContext);

  const submitHandler = (e) => {
    e.preventDefault();

    if (value.trim()) {
      alert.show('Note created!', 'success');
      setValue('');
    } else {
      alert.show('Enter note text!');
    }
  };

  return (
    <form onSubmit={ submitHandler }>
      <div className="form-group">
        <input
          value={ value }
          onChange={ (e) => setValue(e.target.value) }
          type="text"
          className="form-control"
          placeholder="Enter note name"
        />
      </div>
    </form>
  )
};


export default Form;
