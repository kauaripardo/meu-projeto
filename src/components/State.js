import { useState } from 'react'

function State() {

    function cadastrar(a) {
        a.preventDefault()
        console.log(`Nome do usuário: ${name}  |  Escola onde estudava: ${school}  |  E-mail do usuário: ${emailum}  |  E-mail do responsável: ${emaildois}  |  Contato: ${number}  |  Senha: ${password}`)
    }

    const[name, setName] = useState('Kauã')
    const[school, setSchool] = useState()
    const[emailum, setEmailum] = useState()
    const[emaildois, setEmaildois] = useState()
    const[number, setNumber] = useState()
    const[password, setPassword] = useState()

    return (
        <div>
            <h1>Matricula Aluno</h1>
            <form onSubmit={cadastrar}>
                <div>
                    <label htmlFor='name'>Nome: <br /></label>
                    <input 
                    type="text" 
                    id='name' 
                    name='name' 
                    placeholder="Digite seu nome" 
                    value={name}
                    onChange={(a) => setName(a.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='school'>Escola em que você estudava: <br /></label>
                    <input 
                    type="text" 
                    id='school' 
                    name='school' 
                    placeholder="Escola onde estudava" 
                    onChange={(a) => setSchool(a.target.value)}
                    />
                </div>
                <div>
                    <label>E-mail: <br /></label>
                    <input 
                    type="email" 
                    id='emailum' 
                    name='emailum'
                    placeholder="Digite seu e-mail" 
                    onChange={(a) => setEmailum(a.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='emaildois'>E-mail do responsável: <br /></label>
                    <input 
                    type="email" 
                    id='emaildois'
                    name='emaildois'
                    placeholder="Digete o e-mail do responsável" 
                    onChange={(a) => setEmaildois(a.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='number'>Contato: <br /></label>
                    <input 
                    type="number" 
                    id='number'
                    name='number'
                    placeholder="Número para contatos" 
                    onChange={(a) => setNumber(a.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Senha: <br /></label>
                    <input 
                    type="password" 
                    id='password'
                    name='password'
                    placeholder="Digite sua senha" 
                    onChange={(a) => setPassword(a.target.password)}
                    />
                </div>
                <br></br>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )


}

export default State;