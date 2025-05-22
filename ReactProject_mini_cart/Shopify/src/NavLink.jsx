import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Logincontext } from './loginprovider';
import { useContext } from 'react';
function Navlink() {
    const location = useLocation();
    const { logged } = useContext(Logincontext)
    return (
        <Navbar bg="light" expand="lg" className="shadow-sm mb-4">
            <Container>
                <Nav variant="pills" activeKey={location.pathname} className="me-auto">
                    <Nav.Item style={{ padding: "10px 15px" }}>
                        <LinkContainer to="/Home">
                            <Nav.Link eventKey="/Home">Home</Nav.Link>
                        </LinkContainer>
                    </Nav.Item>
                    {
                        (!logged) ? (<Nav.Item style={{ padding: "10px 15px" }}>
                            <LinkContainer to="/Login">
                                <Nav.Link eventKey="/Login">Login</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>) : (<Nav.Item style={{ padding: "10px 15px" }}>
                            <LinkContainer to="/Logout">
                                <Nav.Link eventKey="/Logout">Logout</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>)
                    }
                    <Nav.Item style={{ padding: "10px 15px" }}>
                        <LinkContainer to="/Contactus">
                            <Nav.Link eventKey="/Contactus">Contact Us</Nav.Link>
                        </LinkContainer>
                    </Nav.Item>
                    <Nav.Item style={{ padding: "10px 15px" }}>
                        <LinkContainer to="/ListProduct">
                            <Nav.Link eventKey="/ListProduct">List Product</Nav.Link>
                        </LinkContainer>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navlink;
