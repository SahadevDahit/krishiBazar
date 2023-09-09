"use client";
import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import styles from "./navbar.module.css";
import Image from "next/image";
import { Nosifer } from "next/font/google";
import { motion } from "framer-motion"; // Import Framer Motion

const nosifier = Nosifer({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Navigationbar: React.FC = () => {
  // Define animation variants for bubble drop animation
  const navLinkVariants = {
    hidden: { y: -40, opacity: 0, scale: 1 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring", // Use a spring animation
        stiffness: 100, // Adjust the stiffness of the spring
        damping: 10, // Adjust the damping of the spring
      },
    },
  };

  const brandTextVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8, // Adjust the duration of the scale animation
        delay: 0.5, // Adjust the delay before the scale animation starts
      },
    },
  };

  return (
    <>
      <Navbar expand="lg" className={styles.nav}>
        <Container fluid>
          <div className="w-5 d-flex align-items-center">
            <Navbar.Brand href="/">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={brandTextVariants}
              >
                <div className="d-flex align-items-center">
                  <Image
                    src="/logo.svg"
                    width={50}
                    height={50}
                    loading="lazy"
                    alt="logo"
                  />
                  <b className={`${nosifier.className} ms-2`}>Krishi Bazaar</b>
                </div>
              </motion.div>
            </Navbar.Brand>
          </div>
          <div
            className="w-15 fs-5 d-flex align-items-center justify-content-around"
            style={{ fontFamily: "cursive" }}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={navLinkVariants}
            >
              <Nav.Link href="/">Home</Nav.Link>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={navLinkVariants}
            >
              <Nav.Link href="/users">Users</Nav.Link>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={navLinkVariants}
            >
              <Nav.Link href="/business">Business</Nav.Link>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={navLinkVariants}
            >
              <Nav.Link href="/products">Products</Nav.Link>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={navLinkVariants}
            >
              <Nav.Link href="/orders">Orders</Nav.Link>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={navLinkVariants}
            >
              <Nav.Link href="/signUp">SignUp</Nav.Link>
            </motion.div>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigationbar;
