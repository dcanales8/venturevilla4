import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';


const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Image className='vv-logo' src={process.env.PUBLIC_URL + "/assets/venture-villa-logo.png"} fluid />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex ml-auto">
            <nav>
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link><Link to="/">
                    Home
                  </Link></Nav.Link>
                  <NavDropdown title="Profile and more" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">    <Link to="/me">
                      {Auth.getProfile().data.username}'s Ventures
                    </Link></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.2">
                      Venture History
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.3">Account settings</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Get help
                    </NavDropdown.Item>
                  </NavDropdown>

                  <Nav.Link >  <Link onClick={logout}>
                    Logout
                  </Link></Nav.Link>
                </>
              ) : (
                <section className='d-flex' >
                  <Nav.Link><Link to="/">
                    Home
                  </Link></Nav.Link>
                  <Nav.Link >  <Link to="/login">
                    Login
                  </Link></Nav.Link>
                  <Nav.Link ><Link to="/signup">
                    Signup
                  </Link></Nav.Link>
                 
                </section>
              )}
            </nav>
            </Nav>

<Nav>
            <section className="venture-search ml-auto">
            <Stack direction="horizontal" gap={3}>
              <Form.Control className="me-auto" placeholder="next venture ..." />
              <Button variant="light">Search</Button>
            </Stack>
            </section>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


export default Header;
