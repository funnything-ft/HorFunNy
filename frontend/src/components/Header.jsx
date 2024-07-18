import React from "react";
import { Container, Navbar, Nav, Offcanvas } from "react-bootstrap";
import { useFetcher } from "react-router-dom";
import UIButton from "./UIButton";
import HeaderNavLink from "./HeaderNavLink";
import { useSelector } from "react-redux";

function Header() {
  const fetcher = useFetcher();
  const isAuthenticated = useSelector((state) => state.auth.isLoggedIn);
  let content = (
    <Nav className="me-auto flex-col items-center gap-3">
      <HeaderNavLink to="/">Home</HeaderNavLink>
      <HeaderNavLink to="/login">Login</HeaderNavLink>
      <HeaderNavLink to="/register">Register</HeaderNavLink>
    </Nav>
  );

  if (isAuthenticated) {
    content = (
      <>
        <Nav className="me-auto flex-col items-center gap-3">
          <HeaderNavLink to="/">Home</HeaderNavLink>
          <HeaderNavLink to="/profile">Profile</HeaderNavLink>
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
          <Offcanvas.Header
            closeButton
            className="bg-dark"
            closeVariant="white"
          >
            <Offcanvas.Title
              id="offcanvasNavbarLabel-expand-lg"
              className="text-white ml-3"
            >
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="bg-dark">{content}</Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Header;
