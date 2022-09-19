import {useContext} from 'react'
import {CartContext} from '../../context/CartContext'
import Button from 'react-bootstrap/Button'
import './Cart.css'
import {Link} from 'react-router-dom'

const Cart = () => {

    const value = useContext(CartContext)

    if (value.productCartList.length != 0) {
        return (
            <>
                <h2>Carrito</h2>
                {value.productCartList.map(item=>(
                    <>
                        <div className='cart-container'>
                            <div className='detalle-cart'>
                                <img src={item.image}/>
                                <div className='detalle-cart-datos'>
                                    <p>{item.name}</p>
                                    <p>Cantidad: {item.quantity}</p>
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
            </>
        )
    }
    return (
        <>
            <h2>Carrito bacio</h2>
            <Button as={Link} to='/ecommerce/'>Seguir Comprando</Button>
        </>
    )
}

export default Cart