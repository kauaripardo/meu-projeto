import Item from './Item'

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" lancamento={1985} />
                <Item marca="Fiat" lancamento={1964} />
                <Item marca="Renault" lancamento={1990} />
            </ul>
        </>
    )
}

export default List