import { useState } from 'react';
import './App.css'
import Eventos from './components/Eventos'
import Form from './components/Form';
import State from './components/State';
import Condicional from './components/Condicional';
import Pessoa from './components/Pessoa';
import List from './components/List';
import SayMyName from './components/SayMyName';
import Frase from './components/Frase';
import OutraLista from './components/OutraLista';
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';


function App() {

/*RENDERIZAÇÃO DE LISTAS*/
const meusItens = ['React', 'Vue', 'Angular']

/*STATE LIFT*/
const [nome, setNome] = useState()

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
        <h1>RENDERIZAÇÃO DE LISTAS</h1>
        <OutraLista itens={meusItens} />

    <h1>State Lift</h1>
    <SeuNome setNome={setNome}/>
    <Saudacao nome={nome}/>
    </div>
  )
}

export default App;
