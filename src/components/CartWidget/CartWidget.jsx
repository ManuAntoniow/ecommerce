import './style.css'
import {CartFill} from 'react-bootstrap-icons'

function CartWidget() {
    return (
        <div class="cart-container">
            <CartFill size={30}/>
        </div>
    )
}

export default CartWidget