"use client";
import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import styles from "./navbar.module.css";
import Image from "next/image";
import { Nosifer } from "next/font/google";
const nosifier = Nosifer({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const Navigationbar: React.FC = () => {
  return (
    <>
      <Navbar expand="lg" className={styles.nav}>
        <Container fluid>
          <div className="w-5">
            <Navbar.Brand href="/">
              <Image
                src="/logo.svg"
                width={50}
                height={50}
                loading="lazy"
                alt="logo"
              />
              <b className={`${nosifier.className}`}> Krishi Bazaar</b>
            </Navbar.Brand>
          </div>
          <div
            className="w-15 fs-5 d-flex align-items-center justify-content-around"
            style={{ fontFamily: "cursive" }}
          >
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
