"use client";
import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import styles from "./navbar.module.css";
const Navigationbar: React.FC = () => {
  return (
    <>
      <Navbar expand="lg" className={styles.nav}>
        <Container fluid>
          <div className="w-5">
            <Navbar.Brand href="/">
              <b>Krishi Bazaar</b>
            </Navbar.Brand>
          </div>
          <div className="w-20 d-flex align-items-center justify-content-around">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/users">Users</Nav.Link>
            <Nav.Link href="/business">Business</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/orders">Orders</Nav.Link>
            <Nav.Link href="/signUp">SignUp</Nav.Link>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigationbar;
