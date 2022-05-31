import React, { Component, useState } from 'react';
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import img from './img.png';

 
const Header = () => {
  const [send, setSend] = useState("");
  const change= (e) => {
    // const temp = {
    //   value:value
    // }
    
    console.log(e.target.value);
    setSend(e.target.value);
    //setValue(temp);
  }
    
        return (
            <Navbar bg="light" style={{width: "100%"}}>
                <Container fluid >
                <img src={img} style={{marginLeft: "20px", width:"60px", height:"50px"}}/>
                <Navbar.Brand style={{marginLeft: "15px", fontSize: "30px", fontWeight: "bold", fontStyle: "italic", color: "#242f9b", paddingLeft: "20px"}}>U&I TRUST</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/" style={{marginLeft: "35rem", fontSize: "18px",color: "#242f9b"}}>Home</Nav.Link>
                        <Nav.Link href="/signin" style={{marginLeft: "1rem", fontSize: "18px", color: "#242f9b"}}>Sign in</Nav.Link>
                        <Nav.Link href="/signup" style={{marginLeft: "1rem", fontSize: "18px", color: "#242f9b"}}>Sign up</Nav.Link>
                        <NavDropdown title="Products" style={{marginLeft: "1rem", fontSize: "18px",  color: "#242f9b"}}>
                        <NavDropdown.Item className="options" href='./displayCards1' style={{fontSize: "18px", color: "#242f9b"}} value="Electronics" onClick={(e) => setSend(e.target.value)} >Electronics</NavDropdown.Item>
                        <NavDropdown.Item className="options" href='./displayCards1' style={{fontSize: "18px", color: "#242f9b"}} value="Clothing" onClick={(e) => setSend(e.target.value)}>Clothing</NavDropdown.Item>
                        <NavDropdown.Item className="options" href='./displayCards1' style={{fontSize: "18px", color: "#242f9b"}} value="Food" onClick={(e) => setSend(e.target.value)}>Food</NavDropdown.Item>
                        <NavDropdown.Item className="options" href='./displayCards1' style={{fontSize: "18px", color: "#242f9b"}} value="Medicines" onClick={(e) => setSend(e.target.value)}>Medicines</NavDropdown.Item>
                        <NavDropdown.Item className="options" href='./displayCards1' style={{fontSize: "18px", color: "#242f9b"}} value="Books" onClick={(e) => setSend(e.target.value)}>Books</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
      
    );
}

export default Header;






{/* <Navbar bg="light" expand="lg">
  <Container>
    <img src={logo} id="lg"/>
    <Navbar.Brand href="#home" id="title">U&I TRUST</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home" id="nav1">Home</Nav.Link>
        <Nav.Link href="#link" id="nav2">Login/Signup</Nav.Link>
        <NavDropdown title="Products" id="nav3">
          <NavDropdown.Item className="options" href="#action/3.1">Electronics</NavDropdown.Item>
          <NavDropdown.Item className="options" href="#action/3.2">Clothes</NavDropdown.Item>
          <NavDropdown.Item className="options" href="#action/3.3">Food</NavDropdown.Item>
          <NavDropdown.Item  className="options" href="#action/3.4">Medicines</NavDropdown.Item>
          <NavDropdown.Item  className="options" href="#action/3.5">Books</NavDropdown.Item>
          
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar> */}