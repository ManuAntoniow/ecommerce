import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ItemCount from '../ItemCount/ItemCount'
import './Item.css'

function Item({id, name, description, theme, price, image, stock}) {
    return (
        <Card>
            <Card.Img variant="top" src={image}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{price}</Card.Text>
                <ItemCount stock={stock}/>
                <button className='boton-carrito'>Agregar al carrito</button>
            </Card.Body>
        </Card>
    )
}

export default Item