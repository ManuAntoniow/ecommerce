import LEGO from '../../img/LEGO.png'
// import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <Navbar bg="primary" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                    src={LEGO}
                    width="70"
                    height="70"
                    className="d-inline-block align-top"
                    alt="logo"
                    />
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to='ecommerce/'>Home</Nav.Link>
                    <Nav.Link as={Link} to='ecommerce/Nosotros'>Nosotros</Nav.Link>
                    <NavDropdown title="Productos" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to='ecommerce/Productos/Marvel'>Marvel</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to='ecommerce/Productos/DC'>DC</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to='ecommerce/Productos/City'>City</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to='ecommerce/Productos/Star Wars'>Star Wars</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
                <div>
                    {/* <button>Login</button> */}
                    <CartWidget/>
                </div>
            </Container>
        </Navbar>
    )
}

export default NavBar