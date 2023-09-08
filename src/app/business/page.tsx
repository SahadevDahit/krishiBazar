"use client";
import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./page.module.css";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useStore } from "../zustLand/store";
interface Order {
  id: string;
  status: string;
  confirmed: boolean;
}

interface Business {
  id: string;
  ownerId: string;
  name: string;
  address: string;
  phoneNumber: string;
}

export default function Page() {
  const { businessId } = useStore();
  const [orders, setOrders] = useState<Order[]>();

  const [businessForm, setBusinessForm] = useState<Business>({
    id: "",
    ownerId: "",
    name: "",
    address: "",
    phoneNumber: "",
  });
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(
    null
  );
  const [business, setBusiness] = useState<Business[] | null>(null);

  useEffect(() => {
    const fetchBusiness = async () => {
      try {
        const response = await axios.get(
          `${process.env.server}/api/v1/business`
        );
        if (response.status === 200 || response.status === 201) {
          // Update the users state with the API response data
          setBusiness(response.data);
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
    const fetchorders = async () => {
      try {
        const bid = Number(businessId);
        const response = await axios.get(
          `${process.env.server}/api/v1/business/${bid}/orders`
        );
        if (response.status === 200 || response.status === 201) {
          setOrders(response.data);
        } else {
          console.error(
            "Server responded with an unexpected status:",
            response.status
          );
        }
      } catch (error) {
        console.error("An error occurred while fetching users:", error);
      }
    };
    fetchBusiness();
    fetchorders();
  }, []);

  const handleBusinessClick = (businessId: string) => {
    // Find the clicked business from the defaultBusinessData array
    const clickedBusiness = business?.find(
      (business) => business.id === businessId
    );

    if (clickedBusiness) {
      // Set the selectedBusiness state with the clicked business data
      setSelectedBusiness(clickedBusiness);

      // Populate the form fields with the clicked business data
      setBusinessForm({
        id: clickedBusiness.id,
        ownerId: clickedBusiness.ownerId,
        name: clickedBusiness.name,
        address: clickedBusiness.address,
        phoneNumber: clickedBusiness.phoneNumber,
      });
    }
  };
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

  const updateBusiness = async () => {
    if (selectedBusiness?.id !== null || undefined) {
      try {
        const response = await axios.patch(
          `${process.env.server}/api/v1/business/${selectedBusiness?.id}`,
          businessForm
        );

        if (response.status === 200) {
          // Handle success, e.g., show a success message
          alert("Business updated successfully");
          console.log("Business updated successfully!");
        } else {
          // Handle other HTTP status codes if necessary
          console.error("Business update failed:", response.statusText);
          console.log("Business update failed");
        }
      } catch (error) {
        // Handle any network or request errors
        console.error("An error occurred:", error);
      }
    } else {
      alert("Please select an existing Business");
    }
  };
  const deleteBusiness = async () => {
    if (!selectedBusiness) {
      return; // No business selected, nothing to delete
    }

    try {
      const response = await axios.delete(
        `${process.env.server}/api/v1/business/${selectedBusiness.id}`
      );

      if (response.status === 200 || 201) {
        // Handle success, e.g., show a success message
        alert("Business deleted successfully");
        console.log("Business deleted successfully!");

        // Clear the form and selected business after deletion
        setBusinessForm({
          id: "",
          ownerId: "",
          name: "",
          address: "",
          phoneNumber: "",
        });
        setSelectedBusiness(null);
      } else {
        // Handle other HTTP status codes if necessary
        console.error("Business deletion failed:", response.statusText);
        console.log("Business deletion failed");
      }
    } catch (error) {
      // Handle any network or request errors
      console.error("An error occurred:", error);
    }
  };

  const createBusiness = async () => {
    try {
      const response = await axios.post(
        `${process.env.server}/api/v1/business`,
        businessForm
      );

      if (response.status === 200 || 201) {
        // Handle success, e.g., show a success message
        alert("Business created sucessfully");
        console.log("Business created successfully!");
        // Optionally, reset the form and selected business
        setBusinessForm({
          id: "",
          ownerId: "",
          name: "",
          address: "",
          phoneNumber: "",
        });
        setSelectedBusiness(null);
      } else {
        // Handle other HTTP status codes if necessary
        console.error("Business creation failed:", response.statusText);
        console.log("Business creation failed");
      }
    } catch (error) {
      // Handle any network or request errors
      console.error("An error occurred:", error);
    }
  };
  return (
    <>
      <h2 className="text-center py-3">Business Information</h2>

      <div className="container d-sm-block d-md-flex justify-content-around">
        <div className={`${styles.form} shadow-lg p-3 bg-white rounded`}>
          <Form className="border rounded-3 p-3 mb-4">
            <Form.Group className="mb-3" controlId="formGroupOwnerId">
              <Form.Label>
                <b>
                  Owner ID<span style={{ color: "red" }}>*</span>
                </b>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Owner ID"
                name="ownerId"
                required={true}
                value={businessForm.ownerId}
                onChange={handleBusinessFormChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label>
                <b>
                  Name<span style={{ color: "red" }}>*</span>
                </b>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                name="name"
                required={true}
                value={businessForm.name}
                onChange={handleBusinessFormChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupAddress">
              <Form.Label>
                <b>
                  Address<span style={{ color: "red" }}>*</span>
                </b>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Address"
                name="address"
                required={true}
                value={businessForm.address}
                onChange={handleBusinessFormChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPhoneNumber">
              <Form.Label>
                <b>
                  Phone Number<span style={{ color: "red" }}>*</span>
                </b>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Number"
                name="phoneNumber"
                required={true}
                value={businessForm.phoneNumber}
                onChange={handleBusinessFormChange}
              />
            </Form.Group>
            <div className="d-sm-inline-block d-md-flex">
              <Button
                variant="primary"
                className="mb-2 mb-md-0 mt-md-2 mx-1"
                onClick={createBusiness}
              >
                Create
              </Button>
              <Button
                variant="primary"
                className="mb-2 mb-md-0 mt-md-2 mx-1"
                onClick={updateBusiness}
              >
                Update
              </Button>
              <Button
                variant="primary"
                className="mb-2 mb-md-0 mt-md-2 mx-1"
                onClick={deleteBusiness}
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
              {business?.map((business, index) => (
                <tr
                  key={business.id}
                  onClick={() => handleBusinessClick(business.id)}
                >
                  <td>{index + 1}</td>
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
      <h2 className="text-center">Business Orders</h2>
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
          {orders?.map((order, index: number) => (
            <tr key={order.id} onClick={() => handleRowClick(order.id)}>
              <td>{index + 1}</td>
              <td>{order.id}</td>
              <td>{order.status}</td>
              <td>{order.confirmed ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
