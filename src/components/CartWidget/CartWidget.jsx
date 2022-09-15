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
                <Button variant="danger"><CartFill size={30} onClick={handleShow}/></Button>
            </ButtonGroup>
            <Offcanvas show={show} onHide={handleClose} backdrop="static" placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {value.productCartList.map(item=>(
                        <>
                            <div className='cart-product-container'>
                                <p>{item.name} - {item.quantity}</p>
                                <Button variant="danger" onClick={()=>value.removeItem(item.id)}>X</Button>
                            </div>
                            <hr/>
                        </>
                    ))}
                    <Button onClick={()=>value.clear()}>Clear</Button>
                </Offcanvas.Body>
            </Offcanvas>
            </>
    )
}

export default CartWidget