import './App.css';
import Testimonio from '../src/componentes/testimonio';

//This the main function for react
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
      
      <Testimonio
        nombre="Sara"
        pais="Nigeria"
        imagen = "ALEJANDRO BASTIDAS"
        cargo = "Ingeniera de Software"
        empresa = "ChatDesk"
        testimonio = "Agregar css al componente: Lo ideal es hacer un archivo css por cada componente, con el mismo nombre.Font-weight: para el grosor de la letra, no alcanza a bold que es totalmente negrilla pero va encaminado hacia boldPor qué necesitamos props: Por que la idea de react es ayudarnos a hacer componentes reusables, estos sirven para cambiar algunos elementos dentro del componente para que no estén quemados, si quiero que mi componente tenga props, en los paréntesis del componente coloco la palabra props, hacen que lo fijo se vuelva más dinámico."/>

        <Testimonio
        nombre = "Shaw Wang"
        pais = "Singapur"
        imagen = "Wilson+Buriticá+3"
        cargo = "Ingeniero de sistemas"
        empresa = "Amazon"
        testimonio = 'Para importar el archivo de estilos en la app de JS, se hace lo siguiente: import “./App.css”Es muy común agregar una carpeta para los componentes, los archivos pueden tener la extensión .js o .jsx, las cuales son equivalentes.Importar un componente: En la página de App.js se coloca esto:Import “nombre del componente” from “ubicación donde se encuentra el componente”;Exportar un componente: Donde se creo el componente, en este caso en la carpeta componentes en el archivo testimonio.js, ponemos al final del archivo:Export default “nombre del componente”;'
        />
      </div>
    </div>
  );
}

export default App;
