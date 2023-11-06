import React, { useState } from 'react';
import '../hojas-de-estilo/Formulario.css';
import { v4 as uuidv4 } from 'uuid';

function Formulario(props) {

  const [input, setInput] = useState('');

  const manejarCambio = e => {
   setInput(e.target.value);
  };

  const manejarEnvio = e => {
    e.preventDefault();
    
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    };
    
    props.onSubmit(tareaNueva);
  };

    return (
      <form className='formulario'
      onSubmit={manejarEnvio}>
      <input className='tarea-input'
      type='text'
      placeholder='Tareas pendientes'
      name='texto'
      onChange={manejarCambio}
      /> 
      <button className='tarea-boton'>
         Agregar tarea
         </button>
      </form>
    );
}

export default Formulario;