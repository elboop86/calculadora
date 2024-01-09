import React from 'react'; //importar react al componente
import '../css/boton.css';

function Boton(props) {

  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '='); { /* si valor es . o = devuelve falso*/ }
  };

    return (
       <boton className={`boton-contenedor ${esOperador(props.children) ? 'operador' : null}`.trimEnd()}
         onClick={() => props.manejarClic(props.children)}>
          {/* con la funcion flecha retorna con props con la funcion manejarClic */ }
        {/* .trimEnd() permite quitar espacios tanto al principio como al final*/ }
         {/* Cadena de opciones con javaScript/ paraque se pueda elegir varias funciones*/ }
         {/* Si la cadena es un '+-/*' es true utiliza la clase 'operador' si no no hagas cambios en la clase */ }
        {props.children}
         {/* reemplaza el valor a su hijo*/ }
      
       </boton>
    );
}

export default Boton;