import React from 'react';
import '../css/botonClear.css';


const BotonClear = (props) => (
  <div className='boton-clear' onClick={props.manejarClear}>
     {/* con AddListener y onClick llamo a la funcion para el borrado de la pantalla*/ }
    {props.children}
  </div>
);

export default BotonClear;