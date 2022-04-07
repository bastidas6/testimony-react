import './App.css';
import Testimonio from '../src/componentes/testimonio';

function App() {
  return (

    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen los decentes que enseñan Ingeniería de Sistemas</h1>
        <Testimonio
        nombre="Emma Bostian"
        pais="Suecia"
        imagen = "john-fernando-restrepo-tamayo"
        cargo = "Ingeniera de Software"
        empresa = "Spotify"
        testimonio = "Agregar css al componente: Lo ideal es hacer un archivo css por cada componente, con el mismo nombre.Font-weight: para el grosor de la letra, no alcanza a bold que es totalmente negrilla pero va encaminado hacia boldPor qué necesitamos props: Por que la idea de react es ayudarnos a hacer componentes reusables, estos sirven para cambiar algunos elementos dentro del componente para que no estén quemados, si quiero que mi componente tenga props, en los paréntesis del componente coloco la palabra props, hacen que lo fijo se vuelva más dinámico."/>
      </div>
    </div>
  );
}

export default App;
