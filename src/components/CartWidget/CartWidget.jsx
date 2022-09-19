import './CartWidget.css'
import {CartFill} from 'react-bootstrap-icons'
import {useState, useContext} from 'react'
import {CartContext} from '../../context/CartContext'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

function CartWidget() {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const value = useContext(CartContext)
    
    return (
        <>
            <ButtonGroup>
                <Button variant="danger">Login</Button>
                <Button variant="danger" className='carrito-count'>
                    <CartFill size={30} onClick={handleShow}/>
                    <p>{value.getTotalProducts()}</p>
                </Button>
            </ButtonGroup>
            <Offcanvas show={show} onHide={handleClose} backdrop="static" placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {value.productCartList.map(item=>(
                        <>
                            <div className='cart-product-container'>
                                <div className='detalle-cart'>
                                    <p>{item.name}</p>
                                    <p>Cantidad: {item.quantity}</p>
                                </div>
                                <div className='cart-product-container'>
                                    <h4>${item.quantity * item.price}</h4>
                                    <Button variant="danger" onClick={()=>value.removeItem(item.id)}>X</Button>
                                </div>
                            </div>
                            <hr/>
                        </>
                    ))}
                    <div className='CartWidget-footer'>
                        <Button onClick={()=>value.clear()}>Clear</Button>
                        <Button>Ver el carrito</Button>
                        <h4>Total: ${value.getTotalPrice()}</h4>
                    </div>
                    
                </Offcanvas.Body>
            </Offcanvas>
            </>
    )
}

export default CartWidget