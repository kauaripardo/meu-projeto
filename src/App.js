import './App.css'
import Eventos from './components/Eventos'
import Form from './components/Form';
import State from './components/State';
import Condicional from './components/Condicional';

function App() {

  return (
    <div className="App">
      <h1>Redenrização Condicional</h1>
      <Eventos />
      <Form />
      <Condicional />
    </div>
  )
}

export default App;
