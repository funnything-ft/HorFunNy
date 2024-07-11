import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Form, useFetcher } from "react-router-dom";
import UIButton from "./UIButton";

function Header({ isAuthenticated }) {
  const fetcher = useFetcher();
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
        <fetcher.Form method="post" action="/logout">
          <UIButton type="submit" variant="outline-primary" size="md">
            Logout
          </UIButton>
        </fetcher.Form>
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
