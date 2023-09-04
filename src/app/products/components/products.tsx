"use client";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./styles/products.module.css";
import Table from "react-bootstrap/Table";

interface Product {
  productId: string;
  active: boolean;
  title: string;
  description: string;
  price: number;
  priceUnit: string;
  minimumOrderQuantity: number;
}

export default function Page() {
  const defaultProductData: Product[] = [
    {
      productId: "101",
      active: true,
      title: "Product A",
      description: "Description A",
      price: 10,
      priceUnit: "USD",
      minimumOrderQuantity: 5,
    },
    {
      productId: "102",
      active: true,
      title: "Product B",
      description: "Description B",
      price: 15,
      priceUnit: "USD",
      minimumOrderQuantity: 10,
    },
    {
      productId: "201",
      active: true,
      title: "Subproduct X",
      description: "Description X",
      price: 8,
      priceUnit: "USD",
      minimumOrderQuantity: 3,
    },
    {
      productId: "202",
      active: true,
      title: "Subproduct Y",
      description: "Description Y",
      price: 12,
      priceUnit: "USD",
      minimumOrderQuantity: 7,
    },
    // Add more product data objects as needed
  ];

  const [formData, setFormData] = useState<Product>({
    productId: "",
    active: true,
    title: "",
    description: "",
    price: 0,
    priceUnit: "",
    minimumOrderQuantity: 0,
  });

  const handleRowClick = (productId: string) => {
    window.location.href = `/products/${productId}`;
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "active" ? value === "true" : value, // Convert the string "true" or "false" to boolean
    });
  };

  return (
    <>
      <h2 className="text-center py-3">Product Information</h2>
      <div className="container-fluid d-sm-block d-md-inline-block d-lg-flex justify-content-around">
        <div className={styles.form}>
          <Form className="border rounded-3 p-3 mb-4 shadow-lg p-3 bg-white rounded">
            <Form.Group className="mb-3" controlId="formGroupCategoryName">
              <Form.Label>
                <b>Category Name</b>
              </Form.Label>
              <Form.Control
                as="select"
                name="title"
                onChange={handleFormChange}
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
                onChange={handleFormChange}
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
                onChange={handleFormChange}
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
                onChange={handleFormChange}
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
                onChange={handleFormChange}
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
                onChange={handleFormChange}
                value={formData.description}
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
                <th>Product Name</th>
                <th>Active</th>
                <th>Description</th>
                <th>Price</th>
                <th>Price Unit</th>
                <th>Min Order Quantity</th>
              </tr>
            </thead>
            <tbody>
              {defaultProductData.map((product, index) => (
                <tr
                  key={index}
                  onClick={() => handleRowClick(product.productId)}
                >
                  <td>{index + 1}</td>
                  <td>{product.title}</td>
                  <td>{product.active ? "Yes" : "No"}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>{product.priceUnit}</td>
                  <td>{product.minimumOrderQuantity}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}
