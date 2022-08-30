import './style.css'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ItemCount from '../ItemCount/ItemCount'

function ItemListContainer() {
    return (
        <div>
            <Card>
                <Card.Img variant="top" src=""/>
                <Card.Body>
                    <Card.Title>Producto</Card.Title>
                    <Card.Text>Precio</Card.Text>
                    <ItemCount/>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemListContainer