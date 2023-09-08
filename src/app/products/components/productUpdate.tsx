"use client";
import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./styles/productUpdate.module.css";
import Image from "next/image";
import axios from "axios";
import { useStore } from "@/app/zustLand/store";

interface ProductUpdate {
  productId: string;
}
interface Category {
  id: string;
  name: string;
}

interface Product {
  categoryId: string;
  active: boolean;
  title: string;
  description: string;
  price: number;
  priceUnit: string;
  minimumOrderQuantity: number;
}

export default function Page({ productId }: ProductUpdate) {
  const { businessId } = useStore();
  const [formData, setFormData] = useState<Product>({
    categoryId: "",
    title: "",
    active: true,
    description: "",
    price: 0,
    priceUnit: "",
    minimumOrderQuantity: 0,
  });
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category>();

  const [imageFile, setImageFile] = useState<File | null>(null);

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
    const fetchProduct = async () => {
      try {
        if (!productId) {
          // Handle case where productId is empty
          console.error("productId is empty");
          return;
        }

        const response = await axios.get(
          `${process.env.server}/api/v1/business/${businessId}/products/${productId}`
        );
        if (response.status === 200 || response.status === 201) {
          // Update the formData state with the API response data
          setFormData(response.data);
        } else {
          console.error(
            "Server responded with an unexpected status:",
            response.status
          );
        }
      } catch (error) {
        console.error("An error occurred while fetching product data:", error);
      }
    };

    fetchProduct();
    categories();
  }, [productId]);
  useEffect(() => {
    //fetch categories
    const fetchCategory = async () => {
      try {
        const response = await axios.get(
          `${process.env.server}/api/v1/product-categories/${formData.categoryId}`
        );
        if (response.status === 200 || response.status === 201) {
          // Update the formData state with the API response data
          setSelectedCategory(response?.data);
        } else {
          console.error(
            "Server responded with an unexpected status:",
            response.status
          );
        }
      } catch (error) {
        console.error("An error occurred while fetching product data:", error);
      }
    };
    fetchCategory();
  }, [formData.categoryId]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "active" ? value === "true" : value,
    });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (!productId) {
        // Handle case where productId is empty
        console.error("product not found");
        return;
      }

      // Send an API request to update the product
      const response = await axios.patch(
        `${process.env.server}/api/v1/business/${businessId}/products/${productId}`,
        formData
      );

      if (response.status === 200 || response.status === 201) {
        // Handle success, e.g., show a success message
        alert("Product updated successfully");
      } else {
        // Handle other HTTP status codes if necessary
        console.error("Product update failed:", response.statusText);
      }
    } catch (error) {
      // Handle any network or request errors
      console.error("An error occurred:", error);
      alert("Error updating product. Please try again later.");
    }
  };

  const handleDelete = async () => {
    console.log(formData);
    // if (window.confirm("Are you sure you want to delete this product?")) {
    //   try {
    //     if (!productId) {
    //       // Handle case where productId is empty
    //       console.error("productId is empty");
    //       return;
    //     }

    //     // Send an API request to delete the product
    //     const response = await axios.delete(
    //       `${process.env.server}/api/v1/business/${businessId}/products/${productId}`
    //     );

    //     if (response.status === 200 || response.status === 204) {
    //       // Handle success, e.g., show a success message
    //       alert("Product deleted successfully");
    //       // You can also redirect the user to another page after deletion
    //       // window.location.href = "/products"; // Replace with your desired URL
    //     } else {
    //       // Handle other HTTP status codes if necessary
    //       console.error("Product deletion failed:", response.statusText);
    //     }
    //   } catch (error) {
    //     // Handle any network or request errors
    //     console.error("An error occurred:", error);
    //     alert("Error deleting product. Please try again later.");
    //   }
    // }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImageFile(file);
  };

  const uploadImage = async () => {
    if (!imageFile) {
      alert("No image selected for upload.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", imageFile);

      const response = await axios.post(
        `${process.env.server}/api/v1/business/${businessId}/products/{productId}/photos`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        alert("Image uploaded successfully");
        // You can update the product with the image URL received in the response
        // setFormData({
        //   ...formData,
        //   imageUrl: response.data.imageUrl,
        // });
      } else {
        console.error("Image upload failed:", response.statusText);
      }
    } catch (error) {
      console.error("An error occurred while uploading the image:", error);
      alert("Error uploading image. Please try again later.");
    }
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
              alt="Product Image"
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
              <b>Category Name : {selectedCategory?.name}</b>
            </Form.Label>
            <Form.Control
              as="select"
              name="category"
              value={selectedCategory?.name}
              onChange={(e) => {
                const categoryFound = categories.find(
                  (category) => category.name === e.target.value
                );
                setSelectedCategory(categoryFound);
                if (categoryFound?.id) {
                  setFormData({
                    ...formData,
                    categoryId: categoryFound.id,
                  });
                }
              }}
            >
              {categories?.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
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
          <Form.Group className="mb-3" controlId="formGroupTitle">
            <Form.Label>
              <b>Title</b>
            </Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder="Enter Title"
              required={true}
              value={formData.title}
              onChange={handleInputChange}
            />
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
            className="mb-2 mb-md-0 mt-md-2 mx-1"
            type="submit"
          >
            Update
          </Button>
          <Button
            variant="danger" // You can use "danger" variant for delete button
            type="button"
            className="mb-2 mb-md-0 mt-md-2 mx-1"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </Form>
      </div>
    </>
  );
}
