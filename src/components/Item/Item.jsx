import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import './Item.css'
import {Link} from 'react-router-dom'

function Item({id, name, description, theme, price, image, stock}) {
    return (
        <Card>
            <Card.Img variant="top" src={image}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{price}</Card.Text>
                <Link to={`/ecommerce/item/${id}`}>
                    <Button>Ver en Detalle</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default Item