"use client";
import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./page.module.css";
import Image from "next/image";
import axios from "axios";
interface PageProps {
  params: {
    userId: string;
  };
}

interface FormData {
  mobileNumber: string;
  firstName: string;
  lastName: string;
  email: string;
}

export default function Page({ params }: PageProps) {
  // Define state variable to store form data as an object
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const [formData, setFormData] = useState<FormData>({
    mobileNumber: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(
          `${process.env.server}/api/v1/users/${params.userId}/profilePhoto`
        );

        if (response.status === 200 || 201) {
          console.log(response);
        }
      } catch (error) {
        console.error("An error occurred while uploading the image:", error);
      }
    };
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `${process.env.server}/api/v1/users/${params.userId}`
        );
        if (response.status === 200 || response.status === 201) {
          setFormData(response.data);
        } else {
          console.error(
            "Server responded with an unexpected status:",
            response.status
          );
        }
      } catch (error) {
        console.error("An error occurred while fetching users:", error);
        alert("Error in fetching user data");
      }
    };
    fetchUser();
    fetchUserProfile();
  }, []);
  // Function to handle image file selection
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    // Update the selectedImage state with the selected image file
    setSelectedImage(file);
  };
  const uploadProfileImage = async () => {
    if (selectedImage) {
      if (!selectedImage) {
        alert("Please select an Image!!!");
        return;
      }
      const Image = new FormData();
      Image.append("file", selectedImage);

      try {
        const response = await axios.post(
          `${process.env.server}/api/v1/users/${params.userId}/profilePhoto`,
          Image,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (response.status === 200 || 201) {
          // Handle successful image upload, you may store the image URL received from the response
          const imageUrl = response.data.imageUrl;
          console.log("Image uploaded successfully. URL:", imageUrl);
        } else {
          console.error(
            "Server responded with an unexpected status:",
            response.status
          );
        }
      } catch (error) {
        console.error("An error occurred while uploading the image:", error);
        alert("Error in uploading the image");
      }
    } else {
      alert("Please select an Image!!!");
    }
  };
  // Event handler for form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { firstName, lastName, mobileNumber, email } = formData;
    try {
      const response = await axios.patch(
        `${process.env.server}/api/v1/users/${params.userId}`,
        {
          firstName,
          lastName,
          mobileNumber,
          email,
        }
      );

      // Check the response status and handle it accordingly
      if (response.status === 200 || 201) {
        console.log("Form data submitted successfully!");
        alert("Updated submitted");
        // Optionally, reset the form data and any other state here
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
              value={formData?.firstName}
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
              value={formData?.lastName}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>
              <b>Email address</b>
            </Form.Label>
            <Form.Control
              type="text"
              name="email"
              placeholder="Enter email"
              value={formData?.email}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupMobileNumber">
            <Form.Label>
              <b>Mobile Number</b>
            </Form.Label>
            <Form.Control
              type="text"
              name="mobileNumber"
              placeholder="Enter mobile Number"
              value={formData?.mobileNumber}
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
