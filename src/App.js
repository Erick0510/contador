
import './App.css';
import Button from 'react-bootstrap/Button';
import BarraSuperior from './components/BarraSuperior';
import Contador from './components/Contador';
import Cartas from './components/Cartas';


function App() {
  return (
    <div className="App">

      <BarraSuperior></BarraSuperior>
      <Contador></Contador>
      <Cartas></Cartas>


      
    </div>
  );
}

export default App;
