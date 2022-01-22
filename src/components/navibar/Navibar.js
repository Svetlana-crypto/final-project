import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {Navbar, Container, Nav, Button, Modal, Form} from "react-bootstrap";
import styled from "styled-components";

const  Styles = styled.div`
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #a7aab0;
    text-decoration: none;

    &:hover {
      color: #ffffff;
      font-size: 20px;
    }
  }`;



const Navibar = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);


  return (
    <div>
      <Styles>
        <Navbar collapseOnSelect expand='lg' bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
            <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className="me-auto">
              <Nav.Link><Link to='/'>Home</Link></Nav.Link>
              <Nav.Link ><Link to='/users'>Users</Link></Nav.Link>
              <Nav.Link ><Link to='/follower'>Follower</Link></Nav.Link>
              <Nav.Link ><Link to='/currency'>Currency</Link></Nav.Link>
            </Nav>
              <Nav>
                <Button variant='primary' className="me-2" onClick={handleShow}>Log In</Button>
                <Button variant='primary' onClick={handleShow}>Sign Out</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId='fromBasicEmail'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder='Enter email'/>
            <Form.Text class='text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </Form.Text>
          </Form.Group>
          <Form.Group controlId="fromBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder='Enter password'/>
          </Form.Group>
          <Form.Group controlId="fromBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me"/>
          </Form.Group>
        </Form>
      </Modal.Body>
      </Modal>
    </div>

  );
};

export default Navibar;