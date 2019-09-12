import React, { useContext } from 'react';

import AlertContext from '../context/alert/AlertContext';


const Alert = () => {
  const { alert, hide } = useContext(AlertContext);

  if (!alert.visible) return null;

  return (
    <div className={ `alert alert-${alert.type || 'warning'} alert-dismissible fade show` } role="alert">
      <strong>{ alert.text }</strong>

      <button
        onClick={ () => hide() }
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      ><span aria-hidden="true">&times;</span></button>
    </div>
  )
};


export default Alert;
