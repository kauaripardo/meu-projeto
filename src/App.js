import './App.css'
import Eventos from './components/Eventos'
import Form from './components/Form';
import State from './components/State';
import Condicional from './components/Condicional';
import Pessoa from './components/Pessoa';

function App() {

  return (
    <div className="App">
      <h1>Redenrização Condicional</h1>
      <Eventos />
      <Form />
      <Condicional />
      <Pessoa nome="Kauã" idade="18" profissao="Programador Front-End" foto="Undefined" cidade="Barra do Corda" />
    </div>
  )
}

export default App;
