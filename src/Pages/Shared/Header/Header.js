import React from "react";
import {} from "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/logo-mark.png";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="header"
      >
        <Container>
          <Link className="text-decoration-none text-white me-2" to={"/"}>
            <img className="me-2" src={logo} alt="" />
            <span className="text-danger fw-bold">Muzmatch</span>
          </Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link to="/home">Home</Link>
              <Link to="/checkout">Checkout</Link>
              <Link to="/about">About</Link>
              <Link to="/blog">Blog</Link>
            </Nav>
            <Nav>
              {/* <Link to="/login">Login</Link> */}

              {user?.uid ? (
                <Link to="/" onClick={() => signOut(auth)}>
                  Sign out
                </Link>
              ) : (
                <>
                  <Link to="/signup">Sign Up</Link>
                  <Link to="/login">Login</Link>
                </>
              )}
              <Link to="">{user?.displayName}</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
