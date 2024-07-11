import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Header({ isAuthenticated }) {
  let content = (
    <>
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/register">Register</Nav.Link>
    </>
  );

  if (isAuthenticated) {
    content = (
      <>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/register">Register</Nav.Link>
        <Nav.Link href="/">Logout</Nav.Link>
      </>
    );
  }

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">HorFunNy</Navbar.Brand>
        <Nav className="me-auto">{content}</Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
