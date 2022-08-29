import LEGO from '../../LEGO.png'
import './style.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <div className="navbar-container">
            <div>
                <img className="lego" src={LEGO} alt="logo"/>
            </div>
            <div>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Productos</a>
                    </li>
                    <li>
                        <a href="#">Nosotros</a>
                    </li>
                </ul>
            </div>
            {/* <div>
                <button>Login</button>
            </div> */}
            <CartWidget/>
        </div>
    )
}

export default NavBar;