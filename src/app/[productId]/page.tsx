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

// Define an interface for the product data
interface Product {
  title: string;
  categoryName: string;
  active: boolean;
  price: number;
  priceUnit: string;
  minimumOrderQuantity: number;
  description: string;
}

// Define an interface for order details
interface OrderDetails {
  fullName: string;
  mobileNumber: string;
  email: string;
  address: string;
  landMark: string;
  city: string;
  orderQuantity: number;
}

export default function Page({ params }: page) {
  // Create an instance of the Product interface with default values
  const product: Product = {
    title: "Product Title",
    categoryName: "Vegetables",
    active: true,
    price: 0, // Set your default price value here
    priceUnit: "kg",
    minimumOrderQuantity: 5, // Set your default minimum order quantity here
    description: "Best in Dhangadhi",
  };

  // Create state variables for order details
  const [orderDetails, setOrderDetails] = useState<OrderDetails>({
    fullName: "",
    mobileNumber: "",
    email: "",
    address: "",
    landMark: "",
    city: "",
    orderQuantity: 0,
  });
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // You can access the order details in the orderDetails state
    console.log("Order Details:", orderDetails);

    // Perform any other actions, such as sending data to a server
  };
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
                <b>Category Name : {product.categoryName}</b>
              </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupActive">
              <Form.Label>
                <b>Active : {product.active.toString()}</b>
              </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupTitle">
              <Form.Label>
                <b>Title : {product.title}</b>
              </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPrice">
              <Form.Label>
                <b>Price</b>
              </Form.Label>
              <Form.Control
                type="text"
                name="price"
                value={product.price.toString()}
                placeholder="Enter Price"
                readOnly
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPriceUnit">
              <Form.Label>
                <b>Price Unit : {product.priceUnit}</b>
              </Form.Label>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formGroupMinimumOrderQuantity"
            >
              <Form.Label>
                <b>
                  Minimum Order Quantity :{" "}
                  {product.minimumOrderQuantity.toString()}
                </b>
              </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupDescription">
              <Form.Label>
                <b>Description : {product.description}</b>
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={product.description}
                disabled={true}
              />
            </Form.Group>
          </Form>
        </div>
        <div className={styles.form}>
          <Form
            className="border rounded-3 p-3 mb-4  shadow-lg p-3 bg-white rounded"
            onSubmit={handleSubmit}
          >
            <h3>
              <u>Order Details</u>
            </h3>

            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label>
                <b>
                  Full Name<span style={{ color: "red" }}>*</span>
                </b>
              </Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                required={true}
                placeholder="Enter Full Name"
                value={orderDetails.fullName}
                onChange={(e) =>
                  setOrderDetails({
                    ...orderDetails,
                    fullName: e.target.value,
                  })
                }
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
                placeholder="Enter Mobile Number"
                value={orderDetails.mobileNumber}
                onChange={(e) =>
                  setOrderDetails({
                    ...orderDetails,
                    mobileNumber: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>
                <b>
                  Email<span style={{ color: "red" }}>*</span>
                </b>
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                required={true}
                placeholder="Enter Email"
                value={orderDetails.email}
                onChange={(e) =>
                  setOrderDetails({
                    ...orderDetails,
                    email: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Label>
              <b>Delivery Address</b>
            </Form.Label>
            <Form.Group className="mb-3" controlId="formGroupAddress">
              <Form.Label>
                <b>
                  Address<span style={{ color: "red" }}>*</span>
                </b>
              </Form.Label>
              <Form.Control
                type="text"
                name="address"
                placeholder="Enter Address"
                required={true}
                value={orderDetails.address}
                onChange={(e) =>
                  setOrderDetails({
                    ...orderDetails,
                    address: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupLandMark">
              <Form.Label>
                <b>
                  LandMark<span style={{ color: "red" }}>*</span>
                </b>
              </Form.Label>
              <Form.Control
                type="text"
                name="landMark"
                placeholder="Enter Landmark"
                required={true}
                value={orderDetails.landMark}
                onChange={(e) =>
                  setOrderDetails({
                    ...orderDetails,
                    landMark: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupCity">
              <Form.Label>
                <b>
                  City<span style={{ color: "red" }}>*</span>
                </b>
              </Form.Label>
              <Form.Control
                type="text"
                name="city"
                placeholder="Enter City"
                required={true}
                value={orderDetails.city}
                onChange={(e) =>
                  setOrderDetails({
                    ...orderDetails,
                    city: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupOrderQuantity">
              <Form.Label>
                <b>
                  Order Quantity<span style={{ color: "red" }}>*</span>
                </b>
              </Form.Label>
              <Form.Control
                type="number"
                name="orderQuantity"
                placeholder="Enter Order Quantity"
                value={orderDetails.orderQuantity.toString()}
                required={true}
                onChange={(e) =>
                  setOrderDetails({
                    ...orderDetails,
                    orderQuantity: Number(e.target.value),
                  })
                }
              />
            </Form.Group>
            <Button
              variant="primary"
              className="mb-2 mb-md-0 mt-md-2 mx-1"
              type="submit"
            >
              Order Now
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}
