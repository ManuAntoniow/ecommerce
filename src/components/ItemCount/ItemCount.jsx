import {useState} from 'react'
import {CartPlus} from 'react-bootstrap-icons'
import {CartDash} from 'react-bootstrap-icons'
import './ItemCount.css'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import {Link} from 'react-router-dom'

function ItemCount({stock, onAdd, name}) {
    const [value, setValue] = useState (1)
    const [show, setShow] = useState(false)
    
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const evento = () => {
        onAdd(value)
        handleShow()
    }

    const sumarValue = () => {
        if (value < stock) {
            setValue(value + 1)
        }
    }
    const restarValue = () => {
        if (value > 1){
            setValue(value - 1)
        }
    }
    return (
        <>
            <div className='itemCounter'>
                <CartDash onClick={restarValue} size={25}/>
                <p>{value}</p>
                <CartPlus onClick={sumarValue} size={25}/>
            </div>
            <Button onClick={evento}>Add to cart</Button>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Added to cart successfully</Modal.Title>
                </Modal.Header>
                <Modal.Body>Your product {name} its now in your cart ready to be bought</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>Continue buying</Button>
                    <Button variant="secondary" as={Link} to='/ecommerce/Cart' onClick={handleClose}>Go to cartart</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ItemCount