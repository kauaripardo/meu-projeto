import Pessoa from "./Pessoa"

function SayMyName(props) {

    return(
        <div className="nome">
            <p>{props.nome}</p>
            <Pessoa />
        </div>
    )

}

export default SayMyName