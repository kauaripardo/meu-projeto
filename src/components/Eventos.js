import Button from './evento/Button'

function Eventos() {

    function meuEvento() {
        console.log('Ativando o primeiro evento')
    }

    function segundoEvento() {
        console.log('Ativando o segundo evento')
    }

    return (
        <div>
            <p>Clique para ativar o evento:</p>
            <Button event={meuEvento} text="Primeiro evento" />
            <Button event={segundoEvento} text="Segundo evento" />
        </div>
    )
}

export default Eventos;