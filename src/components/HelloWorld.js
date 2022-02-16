import '../App.css'
import Pessoa from './Pessoa'

function HelloWorld() {

    return (
        <div className="primeiro_comp">
            <h1>PERFIL PESSOAL</h1>
            <Pessoa nome="Kauã Sousa Ripardo" idade="18 anos" profissao="Tech Student" foto="https://via.placeholder.com/150" cidade="Barra do Corda"/>
        </div>
    )

}

export default HelloWorld