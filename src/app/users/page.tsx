"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

// Define the User interface
interface User {
  id: string;
  mobileNumber: string;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
}

export default function Home() {
  // State variable for users
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${process.env.server}/api/v1/users`);
        if (response.status === 200 || response.status === 201) {
          // Update the users state with the API response data
          setUsers(response.data);
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
    fetchUsers();
  }, []);

  // State variable for search value
  const [searchValue, setSearchValue] = useState<string>("");

  const handleRowClick = (userId: string) => {
    window.location.href += `/${userId}`;
  };

  // Event handler for search button click
  const handleSearchClick = async () => {
   
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
                <div className="input-group-append ms-1">
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
              <th>Middle Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={user.id} onClick={() => handleRowClick(user.id)}>
                <td>{index + 1}</td>
                <td>{user.mobileNumber}</td>
                <td>{user.firstName}</td>
                <td>{user.middleName}</td>
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
