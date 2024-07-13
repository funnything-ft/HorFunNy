import React from "react";
import { Container, Navbar, Nav, Offcanvas } from "react-bootstrap";
import { useFetcher } from "react-router-dom";
import UIButton from "./UIButton";
import HeaderNavLink from "./HeaderNavLink";

function Header({ isAuthenticated }) {
  const fetcher = useFetcher();
  let content = (
    <Nav className="me-auto flex-row items-center">
      <HeaderNavLink to="/">Home</HeaderNavLink>
      <HeaderNavLink to="/login">Login</HeaderNavLink>
      <HeaderNavLink to="/register">Register</HeaderNavLink>
    </Nav>
  );

  if (isAuthenticated) {
    content = (
      <>
        <Nav className="me-auto flex-row items-center">
          <HeaderNavLink to="/">Home</HeaderNavLink>
          <HeaderNavLink to="/profile">Profile</HeaderNavLink>
        </Nav>
        <Nav className="ms-auto">
          <fetcher.Form method="post" action="/logout">
            <UIButton type="submit" variant="outline-light" size="md">
              Logout
            </UIButton>
          </fetcher.Form>
        </Nav>
      </>
    );
  }

  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="fixed mb-5">
      <Container fluid>
        <Navbar.Brand href="/">HorFunNy</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>{content}</Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Header;
