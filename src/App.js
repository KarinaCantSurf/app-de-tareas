import './App.css';
import tareaLogo from './imagenes/logo.jpg';
import Tarea from './componentes/Tarea.js';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='logo-contenedor'>
        <img src={tareaLogo} 
        className='tarea-logo' />

      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <Tarea texto='Aprender React' />
      </div>
    </div>
  );
}

export default App;
