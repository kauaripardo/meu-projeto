import { useState } from 'react'
import '../App.css'
import styles from './Cadastro.module.css'  


function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault() //parar o comportamento padrão do HTML(enviar o formulário p servidor) e imprimir a linha seguinte aquí
        console.log(`Usário ${name} foi cadastrado com a senha: ${password}`)
    }

    const [name, setName] = useState() //[valor a ser trabalhado, Set para alterar este valor]
    const [password, setPassword] = useState()

    return (
        <div className={styles.cadastroContainer}>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Digite seu nome"
                    onChange={(e) => setName(e.target.value)} //a cada letra digitada neste campo, modifica-se o valor State 
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder="Digite sua senha"
                    onChange={(e) => setPassword(e.target.value)} //set para atribuir o valor
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form;