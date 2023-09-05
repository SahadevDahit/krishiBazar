"use client";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./page.module.css";
import Image from "next/image";

interface PageProps {
  params: {
    userId: string;
  };
}

interface FormData {
  mobileNumber: number;
  firstName: string;
  lastName: string;
  email: string;
}

export default function Page({ params }: PageProps) {
  // Define state variable to store form data as an object
  const [formData, setFormData] = useState<FormData>({
    mobileNumber: 0,
    firstName: "",
    lastName: "",
    email: "",
  });

  // Event handler for form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // You can access form data from the formData object
    console.log(formData);

    // You can perform form submission logic here, e.g., send data to an API
  };

  // Event handler to update form data when inputs change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Update the formData object with the new input value
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div className={styles.form}>
        <h2 className="text-center">User Information</h2>
        <Form
          className="border rounded-3 p-3  mx-auto mb-3 shadow-lg p-3 bg-white rounded"
          onSubmit={handleSubmit}
        >
          <div className="d-flex justify-content-center align-items-center mb-3">
            <Image
              src="/profileImage.png"
              alt="User Image"
              width={100}
              height={100}
            />
          </div>

          <Form.Group className="mb-3" controlId="formGroupFirstName">
            <Form.Label>
              <b>First Name</b>
            </Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupLastName">
            <Form.Label>
              <b>Last Name</b>
            </Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>
              <b>Email address</b>
            </Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupMobileNumber">
            <Form.Label>
              <b>Mobile Number</b>
            </Form.Label>
            <Form.Control
              type="number"
              name="mobileNumber"
              placeholder="Enter mobile Number"
              value={formData.mobileNumber}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
      </div>
    </>
  );
}
