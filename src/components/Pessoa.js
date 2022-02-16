function Pessoa({ nome, idade, profissao, foto, cidade }) {

    return (
        <div>
            <img src={foto} alt={nome} />
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
            <p>Cidade: {cidade}</p>
        </div>
    )

}

export default Pessoa