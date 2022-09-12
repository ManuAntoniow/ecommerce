import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import{useParams} from 'react-router-dom'

function ItemListContainer() {
    const {themeId} = useParams()
    return (
        <>
            <div>
                <h1>
                    {themeId}
                </h1>
            </div>
            <div className='fila-productos'>
                <ItemList/>
            </div>
        </>
    )
}

export default ItemListContainer