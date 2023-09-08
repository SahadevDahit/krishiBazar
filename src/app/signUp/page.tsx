"use client";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./page.module.css";
import Image from "next/image";
import axios from "axios";
// Define an interface for the form data
interface FormData {
  firstName: string;
  middleName: string;
  lastName: string;
  mobileNumber: string;
  email: string;
}

export default function Page() {
  const initialFormData: FormData = {
    firstName: "",
    middleName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);

  // Define a new state for the selected image
  // Function to handle form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const { firstName, middleName, lastName, mobileNumber, email } = formData; // Destructure values from formData
    try {
      const response = await axios.post(`${process.env.server}/api/v1/users`, {
        firstName,
        middleName,
        lastName,
        mobileNumber,
        email,
      });

      // Check the response status and handle it accordingly
      if (response.status === 200 || 201) {
        console.log("Form data submitted successfully!");
        alert("User successfully submitted");
        // Optionally, reset the form data and any other state here
        setFormData(initialFormData);
      } else {
        console.error(
          "Server responded with an unexpected status:",
          response.status
        );
        // Handle other status codes as needed
      }
    } catch (error) {
      console.error("An error occurred while submitting the form:", error);
      alert("Error in submitting the User Information");
    }
  };

  // Function to handle input changes and update the state
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    // Update the state with the new input value
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className={`${styles.form} `}>
        <h2 className="text-center">User Information</h2>
        <Form
          className="border rounded-3 p-3  mx-auto mb-4 shadow-lg p-3 bg-white rounded"
          onSubmit={handleSubmit}
        >
          <Form.Group className="mb-3" controlId="formGroupFirstName">
            <Form.Label>
              <b>
                First Name<span style={{ color: "red" }}>*</span>
              </b>
            </Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              required={true}
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupMiddleName">
            <Form.Label>
              <b>Middle Name</b>
            </Form.Label>
            <Form.Control
              type="text"
              name="middleName"
              placeholder="Enter Middle Name"
              value={formData?.middleName}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupLastName">
            <Form.Label>
              <b>
                Last Name<span style={{ color: "red" }}>*</span>
              </b>
            </Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              required={true}
              placeholder="Enter Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupMobileNumber">
            <Form.Label>
              <b>
                Mobile Number<span style={{ color: "red" }}>*</span>
              </b>
            </Form.Label>
            <Form.Control
              type="text"
              name="mobileNumber"
              required={true}
              placeholder="Enter mobile Number"
              value={formData.mobileNumber}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>
              <b>
                Email address<span style={{ color: "red" }}>*</span>
              </b>
            </Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}
