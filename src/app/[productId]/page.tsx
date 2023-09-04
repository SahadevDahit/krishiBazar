"use client";
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./page.module.css";
import Image from "next/image";
interface page {
  params: {
    productId: string;
  };
}
export default function Page({ params }: page) {
  return (
    <>
      <h1 className="text-center">Products Details</h1>
      <div className="d-sm-block d-md-flex">
        <div className={styles.form}>
          <Form className="border rounded-3 p-3 mb-4  shadow-lg p-3 bg-white rounded">
            <div className="d-flex justify-content-center align-items-center mb-3">
              <Image
                src="/product.svg" // Replace with your image path
                alt="User Image"
                width={100} // Set the desired width
                height={100} // Set the desired height
              />
            </div>
            <Form.Group className="mb-3" controlId="formGroupCategoryName">
              <Form.Label>
                <b>Category Name : CategoryName</b>
              </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupActive">
              <Form.Label>
                <b>Active : True</b>
              </Form.Label>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupPrice">
              <Form.Label>
                <b>Price</b>
              </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPriceUnit">
              <Form.Label>
                <b>Price Unit</b>
              </Form.Label>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formGroupMinimumOrderQuantity"
            >
              <Form.Label>
                <b>Minimum Order Quantity</b>
              </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupDescription">
              <Form.Label>
                <b>Description</b>
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                disabled={true}
              />
            </Form.Group>
          </Form>
        </div>
        <div className={styles.form}>
          <Form className="border rounded-3 p-3 mb-4  shadow-lg p-3 bg-white rounded">
            <h3>
              <u>Order Details</u>
            </h3>

            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label>
                <b>Full Name</b>
              </Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                placeholder="Enter Price"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupMobileNumber">
              <Form.Label>
                <b>Mobile Number</b>
              </Form.Label>
              <Form.Control
                type="Number"
                name="mobileNumber"
                placeholder="Enter mobileNumber"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>
                <b>Email</b>
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Label>
              <b>Delivery Address</b>
            </Form.Label>
            <Form.Group className="mb-3" controlId="formGroupAddress">
              <Form.Label>
                <b>Address</b>
              </Form.Label>
              <Form.Control
                type="text"
                name="address"
                placeholder="Enter Address"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupLandMark">
              <Form.Label>
                <b>LandMark</b>
              </Form.Label>
              <Form.Control
                type="text"
                name="landMark"
                placeholder="Enter landMark..."
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupCity">
              <Form.Label>
                <b>City</b>
              </Form.Label>
              <Form.Control type="text" name="city" placeholder="Enter City" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupOrderquantity">
              <Form.Label>
                <b>Order Quantity</b>
              </Form.Label>
              <Form.Control
                type="number"
                name="orderQuantity"
                placeholder="Enter Order Quantity"
              />
            </Form.Group>
            <Button variant="primary" className="mb-2 mb-md-0 mt-md-2 mx-1">
              Order Now
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}
