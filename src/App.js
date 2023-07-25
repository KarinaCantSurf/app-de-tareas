import './App.css';
import tareaLogo from './imagenes/logo.jpg';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='logo-contenedor'>
        <img src={tareaLogo} 
        className='tarea-logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
       <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
