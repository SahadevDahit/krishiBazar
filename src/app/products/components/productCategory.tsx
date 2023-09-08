"use client";
import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./styles/productCategory.module.css";
import Table from "react-bootstrap/Table";
import axios from "axios";

interface Category {
  id: string;
  name: string;
}

export default function Page() {
  const [formData, setFormData] = useState<Category>({
    id: "",
    name: "",
  });
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const categories = async () => {
      try {
        const response = await axios.get(
          `${process.env.server}/api/v1/product-categories`
        );
        if (response.status === 200 || response.status === 201) {
          // Update the users state with the API response data
          setCategories(response?.data);
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
    categories();
  }, []);

  const handleNameChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      name: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { name } = formData;

      // Make a POST request to the API endpoint
      const response = await axios.post(
        `${process.env.server}/api/v1/product-categories`,
        { name }
      );

      // Check if the request was successful (HTTP status code 200)
      if (response.status === 200 || 201) {
        // Handle success, e.g., show a success message
        console.log("Category created successfully!");
        alert("category created sucessfully");
        setFormData({
          id: "",
          name: "",
        });
      } else {
        // Handle other HTTP status codes if necessary
        console.error("Category creation failed:", response.statusText);
      }
    } catch (error) {
      // Handle any network or request errors
      console.error("An error occurred:", error);
    }
    // Reset the form after submission
    setFormData({
      id: "",
      name: "",
    });
  };

  return (
    <>
      <h2 className="text-center py-3">Category Information</h2>

      <div className="container d-sm-block d-md-flex justify-content-around">
        <div className={styles.form}>
          <Form
            className="border rounded-3 p-3 mb-4 shadow-lg p-3 bg-white rounded"
            onSubmit={handleSubmit}
          >
            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label>
                <b>
                  Name<span style={{ color: "red" }}>*</span>
                </b>
              </Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter Name"
                required={true}
                value={formData.name}
                onChange={(e) => handleNameChange(e.target.value)}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="mb-2 mb-md-0 mt-md-2 mx-1"
            >
              Create
            </Button>
          </Form>
        </div>
        <div>
          <Table
            responsive="sm"
            className="container mt-3 shadow-lg p-3 bg-white rounded"
            striped
            bordered
            hover
          >
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {categories?.map((category, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{category.name}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}
