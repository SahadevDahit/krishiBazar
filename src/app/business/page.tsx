"use client";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./page.module.css";
import Table from "react-bootstrap/Table";

interface Order {
  orderId: string;
  status: string;
  confirmed: boolean;
}

interface Business {
  businessId: string;
  ownerId: string;
  name: string;
  address: string;
  phoneNumber: string;
}

interface BusinessFormData {
  name: string;
  address: string;
  phoneNumber: string;
}

export default function Page() {
  const orders: Order[] = [
    { orderId: "1", status: "confirmed", confirmed: true },
    { orderId: "2", status: "pending", confirmed: false },
    { orderId: "3", status: "shipped", confirmed: true },
  ];

  const defaultBusinessData: Business[] = [
    {
      businessId: "78sgjdhgj87",
      ownerId: "1",
      name: "Business A",
      address: "123 Main St",
      phoneNumber: "123-456-7890",
    },
    // ... (other default data)
  ];

  const [businessForm, setBusinessForm] = useState<BusinessFormData>({
    name: "",
    address: "",
    phoneNumber: "",
  });

  const handleBusinessFormChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = e.target;
    setBusinessForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  const handleRowClick = (orderId: string) => {
    window.location.href += `/${orderId}`;
  };
  const handleBusinessClick = (businessId: string) => {
    // Handle the click event for the business row if needed
  };

  const handleSubmitBusinessForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here, for example, sending data to the server
    console.log("Business Form Data:", businessForm);
    // You can perform further actions, such as sending the data to the server
  };

  return (
    <>
      <h2 className="text-center py-3">Business Information</h2>

      <div className="container d-sm-block d-md-flex justify-content-around">
        <div className={`${styles.form} shadow-lg p-3 bg-white rounded`}>
          <Form
            className="border rounded-3 p-3 mb-4"
            onSubmit={handleSubmitBusinessForm}
          >
            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label>
                <b>Name</b>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                name="name"
                value={businessForm.name}
                onChange={handleBusinessFormChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupAddress">
              <Form.Label>
                <b>Address</b>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Address"
                name="address"
                value={businessForm.address}
                onChange={handleBusinessFormChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPhoneNumber">
              <Form.Label>
                <b>Phone Number</b>
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Number"
                name="phoneNumber"
                value={businessForm.phoneNumber}
                onChange={handleBusinessFormChange}
              />
            </Form.Group>
            <div className="d-sm-inline-block d-md-flex">
              <Button
                variant="primary"
                type="submit"
                className="mb-2 mb-md-0 mt-md-2 mx-1"
              >
                Create
              </Button>
              <Button
                variant="primary"
                type="submit"
                className="mb-2 mb-md-0 mt-md-2 mx-1"
              >
                Update
              </Button>
              <Button
                variant="primary"
                type="submit"
                className="mb-2 mb-md-0 mt-md-2 mx-1"
              >
                Delete
              </Button>
            </div>
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
                <th>Address</th>
                <th>Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {defaultBusinessData.map((business) => (
                <tr
                  key={business.ownerId}
                  onClick={() => handleBusinessClick(business.businessId)}
                >
                  <td>{business.ownerId}</td>
                  <td>{business.name}</td>
                  <td>{business.address}</td>
                  <td>{business.phoneNumber}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
      <hr className="mx-5" />
      <h2 className="text-center">Business</h2>
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
            <th>Order ID</th>
            <th>Status</th>
            <th>Confirmed</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index: number) => (
            <tr
              key={order.orderId}
              onClick={() => handleRowClick(order.orderId)}
            >
              <td>{index + 1}</td>
              <td>{order.orderId}</td>
              <td>{order.status}</td>
              <td>{order.confirmed ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
