"use client";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./page.module.css";
import Image from "next/image";

// Define an interface for the form data
interface FormData {
  firstName: string;
  lastName: string;
  mobileNumber: number;
  email: string;
}

export default function Page() {
  // Define the component's state to store form input values
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    mobileNumber: 0,
    email: "",
  });
  // Define a new state for the selected image
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Access form data from the state (formData)
    const { mobileNumber, firstName, lastName, email } = formData;

    // You can now use these values as needed, for example, you can log them:
    console.log("Mobile Number:", mobileNumber);
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);

    // Perform any other actions, such as sending the data to a server.
  };
  // Function to handle image file selection
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    // Update the selectedImage state with the selected image file
    setSelectedImage(file);
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
  const uploadProfileImage = () => {
    console.log(selectedImage);
  };

  return (
    <>
      <div className={`${styles.form} `}>
        <h2 className="text-center">User Information</h2>
        <Form
          className="border rounded-3 p-3  mx-auto mb-4 shadow-lg p-3 bg-white rounded"
          onSubmit={handleSubmit}
        >
          <div className="d-flex justify-content-center align-items-center mb-3">
            <Image
              src="/profileImage.png" // Replace with your image path
              alt="User Image"
              width={100} // Set the desired width
              height={100} // Set the desired height
            />
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              <Button
                variant="primary"
                className="mt-3"
                onClick={uploadProfileImage}
              >
                Upload
              </Button>
            </Form.Group>
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
          <Form.Group className="mb-3" controlId="formGroupMobileNumber">
            <Form.Label>
              <b>Mobile Number</b>
            </Form.Label>
            <Form.Control
              type="Number"
              name="mobileNumber"
              placeholder="Enter mobile Number"
              value={formData.mobileNumber}
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
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}
