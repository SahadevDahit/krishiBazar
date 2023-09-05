"use client";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./page.module.css";
import Image from "next/image";
interface page {
  params: {
    productId: string;
  };
}
interface Product {
  title: string;
  categoryName: string;
  active: boolean;
  price: number;
  priceUnit: string;
  minimumOrderQuantity: number;
  description: string;
}

// Define an interface for the order data
interface Order {
  fullName: string;
  mobileNumber: number;
  email: string;
  address: string;
  landMark: string;
  city: string;
  orderQuantity: number;
  status: string;
  confirmed: boolean;
}
export default function Page({ params }: page) {
  const defaultProduct: Product = {
    title: "Product Title",
    categoryName: "Vegetables",
    active: true,
    price: 0,
    priceUnit: "kg",
    minimumOrderQuantity: 5,
    description: "Best in Dhangadhi",
  };

  // Create an instance of the Order interface with default values
  const defaultOrder: Order = {
    fullName: "Sahadev Dahit",
    mobileNumber: 0,
    email: "sd@gmai.com",
    address: "Dhangadhi,Nepal",
    landMark: "UtterBehadi",
    city: "Dhangadhi",
    orderQuantity: 0,
    status: "Pending",
    confirmed: false,
  };
  // Define states for product and order
  const [product, setProduct] = useState<Product>(defaultProduct);
  const [order, setOrder] = useState<Order>(defaultOrder);
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      status: e.target.value,
    }));
  };

  const handleConfirmedChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      confirmed: e.target.value === "True",
    }));
  };

  const handleOrderFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle order form submission here, for example, sending data to the server
    console.log("Order Form Data:", order);
  };
  return (
    <>
      <h1 className="text-center">Products Details</h1>
      <div className="d-sm-block d-md-flex">
        <div className={styles.form}>
          {/* First Form - Product Details */}
          <Form className="border rounded-3 p-3 mb-4 shadow-lg p-3 bg-white rounded">
            <div className="d-flex justify-content-center align-items-center mb-3">
              <Image
                src="/product.svg"
                alt="Product Image"
                width={100}
                height={100}
              />
            </div>
            <Form.Group className="mb-3" controlId="formGroupCategoryName">
              <Form.Label>
                <b>Category Name : {product?.categoryName}</b>
              </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupActive">
              <Form.Label>
                <b>Active : {product?.active.toString()}</b>
              </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupTitle">
              <Form.Label>
                <b>Title : {product?.title}</b>
              </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPrice">
              <Form.Label>
                <b>Price : {product?.price}</b>
              </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPriceUnit">
              <Form.Label>
                <b>Price Unit : {product?.priceUnit}</b>
              </Form.Label>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formGroupMinimumOrderQuantity"
            >
              <Form.Label>
                <b>Minimum Order Quantity : {product?.minimumOrderQuantity}</b>
              </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupDescription">
              <Form.Label>
                <b>Description : {product?.description}</b>
              </Form.Label>
            </Form.Group>
          </Form>
        </div>
        <div className={styles.form}>
          <Form
            className="border rounded-3 p-3 mb-4 shadow-lg p-3 bg-white rounded"
            onSubmit={handleOrderFormSubmit}
          >
            <h3>
              <u>Order Details</u>
            </h3>

            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label>
                <b>Full Name : {order?.fullName}</b>
              </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupMobileNumber">
              <Form.Label>
                <b>Mobile Number : {order?.mobileNumber}</b>
              </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>
                <b>Email : {order?.email}</b>
              </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupAddress">
              <Form.Label>
                <b>Address : {order?.address}</b>
              </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupLandMark">
              <Form.Label>
                <b>LandMark : {order?.landMark}</b>
              </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupCity">
              <Form.Label>
                <b>City : {order?.city}</b>
              </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupOrderquantity">
              <Form.Label>
                <b>Order Quantity : {order?.orderQuantity}</b>
              </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupStatus">
              <Form.Label>
                <b>Status</b>
              </Form.Label>
              <Form.Select
                name="status"
                value={order.status}
                onChange={handleStatusChange}
              >
                <option value="Pending">Pending</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
                {/* Add more status options as needed */}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupConfirmed">
              <Form.Label>
                <b>Confirmed</b>
              </Form.Label>
              <Form.Select
                name="confirmed"
                value={order.confirmed ? "True" : "False"}
                onChange={handleConfirmedChange}
              >
                <option value="True">True</option>
                <option value="False">False</option>
              </Form.Select>
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="mb-2 mb-md-0 mt-md-2 mx-1"
            >
              Update
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}
