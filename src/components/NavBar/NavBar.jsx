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
                <ul className="NavList">
                    <li>
                        <a className="NavItem" href="#">Home</a>
                    </li>
                    <li>
                        <a className="NavItem" href="#">Productos</a>
                    </li>
                    <li>
                        <a className="NavItem" href="#">Nosotros</a>
                    </li>
                </ul>
            </div>
            <div>
                {/* <button>Login</button> */}
                <CartWidget/>
            </div>
        </div>
    )
}

export default NavBar;