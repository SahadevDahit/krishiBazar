"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// Define the User interface
interface User {
  userId: string;
  mobileNumber: string;
  firstName: string;
  lastName: string;
  email: string;
}

export default function Home() {
  // Default user data array
  const defaultUserData: User[] = [
    {
      userId: "1",
      mobileNumber: "123-456-7890",
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
    },
    {
      userId: "2",
      mobileNumber: "987-654-3210",
      firstName: "Jane",
      lastName: "Smith",
      email: "jane@example.com",
    },
    {
      userId: "3",
      mobileNumber: "555-555-5555",
      firstName: "Alice",
      lastName: "Johnson",
      email: "alice@example.com",
    },
    {
      userId: "4",
      mobileNumber: "777-888-9999",
      firstName: "Bob",
      lastName: "Williams",
      email: "bob@example.com",
    },
    // Add more user data objects as needed
  ];

  // State variable for search value
  const [searchValue, setSearchValue] = useState<string>("");

  const handleRowClick = (userId: string) => {
    window.location.href += `/${userId}`;
  };

  // Event handler for search button click
  const handleSearchClick = () => {
    // Log the search value
    console.log("Search Value:", searchValue);
    setSearchValue("");
  };

  return (
    <>
      <div className={styles.main}>
        <h2 className="text-center py-3">Krishi Bazar</h2>
        <h3 className="text-center">Users</h3>
        <div id={styles.container} className="d-sm-flex">
          <div className="search d-flex">
            <Form className="d-flex align-items-center shadow-lg p-3 bg-white rounded">
              <div className="input-group mb-1 flex-grow-1">
                <Form.Group className="" controlId="formBasicPassword">
                  <Form.Control
                    type="text"
                    placeholder="Enter search key..."
                    value={searchValue}
                    required={true}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                </Form.Group>
                <div className="input-group-append">
                  <Button variant="primary" onClick={handleSearchClick}>
                    <FontAwesomeIcon icon={faSearch} />
                  </Button>
                </div>
              </div>
            </Form>
          </div>
        </div>

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
              <th>Mobile Number</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {defaultUserData.map((user) => (
              <tr key={user.userId} onClick={() => handleRowClick(user.userId)}>
                <td>{user.userId}</td>
                <td>{user.mobileNumber}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}
