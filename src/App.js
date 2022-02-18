import './App.css'
import Eventos from './components/Eventos'
import Form from './components/Form';
import State from './components/State';
import Condicional from './components/Condicional';
import Pessoa from './components/Pessoa';
import List from './components/List';
import SayMyName from './components/SayMyName';
import Frase from './components/Frase';

function App() {

  return (
    <div className="App">
      <h1>Redenrização Condicional</h1>
      <Eventos />
      <Form />
      <Pessoa 
        nome="Kauã" 
        idade="18" 
        profissao="Programador Front-End" 
        foto="Undefined" 
        cidade="Barra do Corda" 
      />
      <SayMyName nome="Matheus"/>
      <SayMyName nome="João"/>
      <Frase />
      <State />
      <List />
      <h1>RENDERIZAÇÃO CONDICIONAL</h1>
        <Condicional />
    </div>
  )
}

export default App;
