"use client";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./styles/productUpdate.module.css";
import Image from "next/image";

interface Product {
  active: boolean;
  title: string;
  description: string;
  price: number;
  priceUnit: string;
  minimumOrderQuantity: number;
}

export default function Page() {
  const [formData, setFormData] = useState<Product>({
    active: true,
    title: "",
    description: "",
    price: 0,
    priceUnit: "",
    minimumOrderQuantity: 0,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "active" ? value === "true" : value,
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here, you can access form data from the formData object
    console.log("Form Data:", formData);

    // Clear the form after submission
    setFormData({
      active: true,
      title: "",
      description: "",
      price: 0,
      priceUnit: "",
      minimumOrderQuantity: 0,
    });
  };
  const [imageFile, setImageFile] = useState<File | null>(null);
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImageFile(file);
  };
  const uploadImage = () => {
    console.log(imageFile);
  };
  return (
    <>
      <div className={styles.form}>
        <Form
          className="border rounded-3 p-3 mb-4 shadow-lg p-3 bg-white rounded"
          onSubmit={handleFormSubmit}
        >
          <div className="d-flex justify-content-center align-items-center mb-3">
            <Image
              src="/product.svg" // Replace with your image path
              alt="User Image"
              width={100} // Set the desired width
              height={100} // Set the desired height
            />
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control
                type="file"
                accept="image/*"
                name="imageFile"
                onChange={handleImageUpload}
              />
              <Button
                variant="primary"
                className="mt-3"
                type="button"
                onClick={uploadImage}
              >
                Upload
              </Button>
            </Form.Group>
          </div>
          <Form.Group className="mb-3" controlId="formGroupCategoryName">
            <Form.Label>
              <b>Category Name</b>
            </Form.Label>
            <Form.Control
              as="select"
              name="title"
              onChange={handleInputChange}
              value={formData.title}
            >
              <option value="Category A">Category A</option>
              <option value="Category B">Category B</option>
              <option value="Category X">Subcategory X</option>
              <option value="Category Y">Subcategory Y</option>
              {/* Add more category options as needed */}
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupActive">
            <Form.Label>
              <b>Active</b>
            </Form.Label>
            <Form.Control
              as="select"
              name="active"
              onChange={handleInputChange}
              value={formData.active.toString()} // Convert boolean to string
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPrice">
            <Form.Label>
              <b>Price</b>
            </Form.Label>
            <Form.Control
              type="number"
              name="price"
              placeholder="Enter Price"
              onChange={handleInputChange}
              value={formData.price}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPriceUnit">
            <Form.Label>
              <b>Price Unit</b>
            </Form.Label>
            <Form.Control
              type="text"
              name="priceUnit"
              placeholder="Enter Price Unit"
              onChange={handleInputChange}
              value={formData.priceUnit}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formGroupMinimumOrderQuantity"
          >
            <Form.Label>
              <b>Minimum Order Quantity</b>
            </Form.Label>
            <Form.Control
              type="number"
              name="minimumOrderQuantity"
              placeholder="Enter Minimum Order Quantity"
              onChange={handleInputChange}
              value={formData.minimumOrderQuantity}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupDescription">
            <Form.Label>
              <b>Description</b>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              onChange={handleInputChange}
              value={formData.description}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="mb-2 mb-md-0 mt-md-2 mx-1"
          >
            Update
          </Button>
          <Button
            variant="danger" // You can use "danger" variant for delete button
            type="button"
            className="mb-2 mb-md-0 mt-md-2 mx-1"
          >
            Delete
          </Button>
        </Form>
      </div>
    </>
  );
}
