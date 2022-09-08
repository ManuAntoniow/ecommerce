import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'

function ItemListContainer() {
    return (
        <>
            <div>
                <h2>Mas Vendidos</h2>
            </div>
            <div className='fila-productos'>
                <ItemList/>
            </div>
        </>
    )
}

export default ItemListContainer