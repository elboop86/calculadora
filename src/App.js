import './App.css';
import logo from'./img/logo192.png'; // importar el logo de react
import Boton from './componentes/boton';
import Pantalla from './componentes/pantalla';
import BotonClear from './componentes/botonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';// importar libreria math para el uso de calculos mátematicos para javascript y node.js
// npm install mathjs

function App() {

  const [input, setInput] = useState('');

  const agregarInput = valor => {
    setInput(input + valor);
  };

  const calcularResultado = () => {
    if (input) {
    setInput(evaluate(input));
    } else {
      alert('Por favor ingrese valores para relizar cálculos');
    } // condicional para el signo =. si el inupt no tiene numero antes del = muestra el alert.
  };

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img className='logo' src={logo} alt='logo' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear> 
        </div>

        </div>
    
    </div>
   
  );
}

export default App;

/* retos: relizar un componente dinámico para el logo y testear errores en las operaciones que hay cuando
    hay más de un signo del operador en la pantalla*/
