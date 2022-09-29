import {useContext} from 'react'
import {CartContext} from '../../context/CartContext'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import './Cart.css'
import {Link} from 'react-router-dom'
import {db} from '../../utils/firebase'
import {collection, addDoc} from 'firebase/firestore'

const Cart = () => {
    const value = useContext(CartContext)

    const sendOrder = (event) =>{
        event.preventDefault()
        const order = { 
            buyer: { 
                name: event.target[0].value, 
                email: event.target[1].value,
                phone: event.target[2].value
            }, 
            items: value.productCartList,
            date: Date(), 
            total: value.getTotalPrice()
        }
        console.log("order: ", order)
        const query = collection(db, "orders")
        addDoc(query, order).then(response => console.log("response: ", response))
    }
    
    // const updateOrder = () => {
    // }

    if (value.productCartList.length !== 0) {
        return (
            <>
                <h2>Cart</h2>
                {value.productCartList.map(item=>(
                    <>
                        <div className='cart-container'>
                            <div className='detalle-cart'>
                                <img src={item.image} alt={item.name}/>
                                <div className='detalle-cart-datos'>
                                    <p>{item.name}</p>
                                    <p>Quantity: {item.quantity}</p>
                                </div>
                            </div>
                            
                            <div className='detalle-cart'>
                                <h4>${item.quantity * item.price}</h4>
                                <Button variant="danger" onClick={()=>value.removeItem(item.id)}>X</Button>
                            </div>
                        </div>
                        <hr/>
                    </>
                ))}
                <h2>Total: ${value.getTotalPrice()}</h2>
                <Button onClick={()=>value.clear()}>Clear</Button>
                <Form onSubmit={sendOrder}>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name"/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="example@something.com"/>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" placeholder="1122 3344"/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St"/>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>City</Form.Label>
                        <Form.Control/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>State</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Zip</Form.Label>
                            <Form.Control/>
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Check type="checkbox" label="Accept terms"/>
                    </Form.Group>
                    <Button type="submit">Submit</Button>
                    {/* <Button onClick={updateOrder}>Submit</Button> */}
                </Form>
            </>
        )
    }
    return (
        <>
            <h2>Your cart is currently empty</h2>
            <Button as={Link} to='/ecommerce/'>Continue buying</Button>
        </>
    )
}

export default Cart