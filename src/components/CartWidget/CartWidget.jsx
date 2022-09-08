import './CartWidget.css'
import {CartFill} from 'react-bootstrap-icons'

function CartWidget() {
    return (
        <div className="cart-container">
            <CartFill size={30}/>
        </div>
    )
}

export default CartWidget