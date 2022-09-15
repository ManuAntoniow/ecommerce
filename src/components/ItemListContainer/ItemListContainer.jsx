import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import{useParams} from 'react-router-dom'
import Row from 'react-bootstrap/Row'

function ItemListContainer() {
    const {themeId} = useParams()
    return (
        <>
            <div>
                <h1>
                    {themeId}
                </h1>
            </div>
            <Row>
                <ItemList/>
            </Row>
        </>
    )
}

export default ItemListContainer