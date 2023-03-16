import './App.css';
import freeCodecampLogo from "./imagenes/freecodecamp-logo.png"

function App() {
  return (
    <div className="App">
       <div className='freecodecamp/logo/contenedor'>
        <img
        src={freeCodecampLogo}
        className='freecodecamp-logo'
        alt='Logo de FreeCodeCamp'/>
       </div>
    </div>
  );
}

export default App;
