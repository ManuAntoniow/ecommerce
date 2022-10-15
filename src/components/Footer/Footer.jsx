import './Footer.css'

//Helpers
import Nav from 'react-bootstrap/Nav'
import {Instagram, Twitter} from 'react-bootstrap-icons'

function Footer(props) {
    return (
        <footer>
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
            </Nav>
            <p className="text-center mt-4 mb-4">©2022 All Rights Reserverd.</p>
            <Nav className="justify-content-end" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="https://www.instagram.com/manu_antoniow/">
                        <Instagram size={30}/>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="https://twitter.com/manuel_antoniow/">
                        <Twitter size={30}/>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </footer>
    );
}

export default Footer