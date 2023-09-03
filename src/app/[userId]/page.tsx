"use client";
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./page.module.css";
interface page {
  params: {
    userId: string;
  };
}
export default function Page({ params }: page) {
  return (
    <>
      <div className={styles.form}>
        <h2 className="text-center">User Information</h2>
        <Form className="border p-3  mx-auto">
          <Form.Group className="mb-3" controlId="formGroupMobileNumber">
            <Form.Label>
              <b>Mobile Number</b>
            </Form.Label>
            <Form.Control type="text" placeholder="Enter mobile Number" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupFirstName">
            <Form.Label>
              <b>First Name</b>
            </Form.Label>
            <Form.Control type="text" placeholder="Enter First Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupLastName">
            <Form.Label>
              <b>Last Name</b>
            </Form.Label>
            <Form.Control type="text" placeholder="Enter Last Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>
              <b>Email address</b>
            </Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
      </div>
    </>
  );
}
