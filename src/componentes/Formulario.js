import React from 'react';
import '../hojas-de-estilo/Formulario.css';

function Formulario(props) {
    return (
      <form className='formulario'>
      <input className='tarea-input'
      type='text'
      placeholder='Tareas pendientes'
      name='texto'
      /> 
      <button className='tarea-boton'>
         Agregar tarea
         </button>
      </form>
    );
}

export default Formulario;