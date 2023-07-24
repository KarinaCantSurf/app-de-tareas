import './App.css';
import tareaLogo from './imagenes/logo.jpg';
import Formulario from './componentes/Formulario';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='logo-contenedor'>
        <img src={tareaLogo} 
        className='tarea-logo' />

      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
       <Formulario />
      </div>
    </div>
  );
}

export default App;
