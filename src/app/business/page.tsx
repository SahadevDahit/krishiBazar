"use client";
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./page.module.css";
import Table from "react-bootstrap/Table";

interface Business {
  ownerId: string;
  name: string;
  address: string;
  phoneNumber: string;
}

export default function Page() {
  const defaultBusinessData: Business[] = [
    {
      ownerId: "1",
      name: "Business A",
      address: "123 Main St",
      phoneNumber: "123-456-7890",
    },
    {
      ownerId: "2",
      name: "Business B",
      address: "456 Elm St",
      phoneNumber: "987-654-3210",
    },
    {
      ownerId: "3",
      name: "Business C",
      address: "789 Oak St",
      phoneNumber: "555-555-5555",
    },
    {
      ownerId: "4",
      name: "Business D",
      address: "101 Pine St",
      phoneNumber: "777-888-9999",
    },
    // Add more business data objects as needed
  ];

  const handleRowClick = (ownerId: string) => {
  };

  return (
    <>
      <h2 className="text-center py-3">Business Information</h2>

      <div className="container d-sm-block d-md-flex justify-content-around">
             <div className={`${styles.form} shadow-lg p-3 bg-white rounded`}>
<Form className="border rounded-3 p-3 mb-4">
            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label>
                <b>Name</b>
              </Form.Label>
              <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupAddress">
              <Form.Label>
                <b>Address</b>
              </Form.Label>
              <Form.Control type="text" placeholder="Enter Address" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPhoneNumber">
              <Form.Label>
                <b>Phone Number</b>
              </Form.Label>
              <Form.Control type="number" placeholder="Enter Number" />
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
                  onClick={() => handleRowClick(business.ownerId)}
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
    </>
  );
}
