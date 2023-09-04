"use client";
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./page.module.css";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className={`${styles.form} shadow-lg p-3 bg-white rounded`}>
        <h2 className="text-center">User Information</h2>
        <Form className="border rounded-3 p-3  mx-auto mb-4">
          <div className="d-flex justify-content-center align-items-center mb-3">
            <Image
              src="/profileImage.png" // Replace with your image path
              alt="User Image"
              width={100} // Set the desired width
              height={100} // Set the desired height
            />
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control type="file" />
              <Button variant="primary" type="submit" className="mt-3">
                Upload
              </Button>
            </Form.Group>
          </div>
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
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}
