import './CartWidget.css'
import {CartFill} from 'react-bootstrap-icons'
import {useState, useContext} from 'react'
import {CartContext} from '../../context/CartContext'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import {Link} from 'react-router-dom'

function CartWidget() {
    const [show, setShow] = useState(false)
    const value = useContext(CartContext)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

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
                    {value.productCartList.length === 0 && <p>Su carrito actualmente se encuentra bacio</p>}
                    {value.productCartList.map(item=>(
                        <>
                            <div className='cartWidget-product-container'>
                                <div className='detalle-cartWidget'>
                                    <p>{item.name}</p>
                                    <p>Cantidad: {item.quantity}</p>
                                </div>
                                <div className='cartWidget-product-container'>
                                    <h4>${item.quantity * item.price}</h4>
                                    <Button variant="danger" onClick={()=>value.removeItem(item.id)}>X</Button>
                                </div>
                            </div>
                            <hr/>
                        </>
                    ))}
                    <div className='CartWidget-footer'>
                        {value.productCartList.length !== 0 && <Button onClick={()=>value.clear()}>Clear</Button>}
                        <Button as={Link} to='ecommerce/Cart' onClick={handleClose}>Ver el carrito</Button>
                        <h4>Total: ${value.getTotalPrice()}</h4>
                    </div>
                    
                </Offcanvas.Body>
            </Offcanvas>
            </>
    )
}

export default CartWidget