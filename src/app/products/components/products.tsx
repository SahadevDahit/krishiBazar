"use client";
import React, { useState, useEffect } from "react";
import { useStore } from "../../zustLand/store";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./styles/products.module.css";
import Table from "react-bootstrap/Table";
import axios from "axios";
interface Product {
  id: string;
  categoryId: string;
  active: boolean;
  title: string;
  description: string;
  price: number;
  priceUnit: string;
  minimumOrderQuantity: number;
}
interface Category {
  id: string;
  name: string;
}
export default function Page() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  const { businessId } = useStore();

  const [formData, setFormData] = useState<Product>({
    id: "",
    categoryId: "",
    active: true,
    title: "",
    description: "",
    price: 0,
    priceUnit: "",
    minimumOrderQuantity: 0,
  });
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
    const products = async () => {
      try {
        const response = await axios.get(
          `${process.env.server}/api/v1/business/${businessId}/products`
        );
        if (response.status === 200 || response.status === 201) {
          // Update the users state with the API response data
          setProducts(response?.data);
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
    products();
  }, []);

  const handleRowClick = (id: string) => {
    window.location.href = `/products/${id}`;
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "category") {
      // Find the selected category object by its name
      const selectedCategory = categories.find(
        (category) => category.name === value
      );

      if (selectedCategory) {
        // Set the categoryId in the formData to the selected category's id
        setFormData({
          ...formData,
          categoryId: selectedCategory.id,
        });
      }
    } else if (name === "price" || name === "minimumOrderQuantity") {
      // Ensure that the price and minimumOrderQuantity values are numbers
      setFormData({
        ...formData,
        [name]: parseFloat(value), // Parse the input value to a float
      });
    } else if (name === "title" || name === "description") {
      // Handle title and description fields as text
      setFormData({
        ...formData,
        [name]: value,
      });
    } else {
      // Handle other form inputs as usual
      setFormData({
        ...formData,
        [name]: name === "active" ? value === "true" : value,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    if (formData?.categoryId === "") {
      alert("Please select the category");
      return;
    }
    try {
      const response = await axios.post(
        `${process.env.server}/api/v1/business/${businessId}/products`,
        formData
      );

      if (response.status === 200 || 201) {
        // Handle success, e.g., show a success message
        alert("Product created successfully");
        console.log("Product created successfully!");

        // Optionally, reset the form
        setFormData({
          id: "",
          categoryId: "",
          active: true,
          title: "",
          description: "",
          price: 0,
          priceUnit: "",
          minimumOrderQuantity: 0,
        });
      } else {
        // Handle other HTTP status codes if necessary
        console.error("Product creation failed:", response.statusText);
        console.log("Product creation failed");
      }
    } catch (error) {
      // Handle any network or request errors
      console.error("An error occurred:", error);

      // Optionally, show an error message to the user
      alert("Error creating product. Please try again later.");
    }
  };
  return (
    <>
      <h2 className="text-center py-3">Product Information</h2>
      <div className="container-fluid d-sm-block d-md-inline-block d-lg-flex justify-content-around">
        <div className={styles.form}>
          <Form
            className="border rounded-3 p-3 mb-4 shadow-lg p-3 bg-white rounded"
            onSubmit={handleSubmit}
          >
            <Form.Group className="mb-3" controlId="formGroupCategoryName">
              <Form.Label>
                <b>
                  Category Name<span style={{ color: "red" }}>*</span>
                </b>
              </Form.Label>
              <Form.Control
                as="select"
                name="category"
                required={true}
                onChange={handleFormChange}
              >
                <option value="null">Select Category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupActive">
              <Form.Label>
                <b>
                  Active<span style={{ color: "red" }}>*</span>
                </b>
              </Form.Label>
              <Form.Control
                as="select"
                name="active"
                required={true}
                onChange={handleFormChange}
                value={formData.active.toString()} // Convert boolean to string
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupTttle">
              <Form.Label>
                <b>
                  Title<span style={{ color: "red" }}>*</span>
                </b>
              </Form.Label>
              <Form.Control
                type="text"
                name="title"
                required={true}
                placeholder="Enter title"
                onChange={handleFormChange}
                value={formData.title}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPrice">
              <Form.Label>
                <b>
                  Price<span style={{ color: "red" }}>*</span>
                </b>
              </Form.Label>
              <Form.Control
                type="number"
                name="price"
                required={true}
                placeholder="Enter Price"
                onChange={handleFormChange}
                value={formData.price}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPriceUnit">
              <Form.Label>
                <b>
                  Price Unit<span style={{ color: "red" }}>*</span>
                </b>
              </Form.Label>
              <Form.Control
                type="text"
                name="priceUnit"
                required={true}
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
                <b>
                  Minimum Order Quantity<span style={{ color: "red" }}>*</span>
                </b>
              </Form.Label>
              <Form.Control
                type="number"
                name="minimumOrderQuantity"
                required={true}
                placeholder="Enter Minimum Order Quantity"
                onChange={handleFormChange}
                value={formData.minimumOrderQuantity}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupDescription">
              <Form.Label>
                <b>
                  Description<span style={{ color: "red" }}>*</span>
                </b>
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                required={true}
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
                <th>Price</th>
                <th>Price Unit</th>
                <th>Min Order Quantity</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product, index) => (
                <tr key={index} onClick={() => handleRowClick(product.id)}>
                  <td>{index + 1}</td>
                  <td>{product.title}</td>
                  <td>{product.active ? "Yes" : "No"}</td>
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
