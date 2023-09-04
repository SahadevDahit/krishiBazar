"use client";
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./styles/productCategory.module.css";
import Table from "react-bootstrap/Table";

interface Category {
  name: string;
  parentId: string;
}

export default function Page() {
  const defaultCategoryData: Category[] = [
    {
      name: "Category A",
      parentId: "1",
    },
    {
      name: "Category B",
      parentId: "1",
    },
    {
      name: "Subcategory X",
      parentId: "2",
    },
    {
      name: "Subcategory Y",
      parentId: "2",
    },
    // Add more category data objects as needed
  ];

  const handleRowClick = (name: string) => {
   
  };

  return (
    <>
      <h2 className="text-center py-3">Category Information</h2>

      <div className="container d-sm-block d-md-flex justify-content-around">
        <div className={styles.form}>
          <Form className="border rounded-3 p-3 mb-4 shadow-lg p-3 bg-white rounded">
            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label>
                <b>Name</b>
              </Form.Label>
              <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupParentId">
              <Form.Label>
                <b>Parent ID</b>
              </Form.Label>
              <Form.Control type="text" placeholder="Enter Parent ID" />
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
                <th>Name</th>
                <th>Parent ID</th>
              </tr>
            </thead>
            <tbody>
              {defaultCategoryData.map((category, index) => (
                <tr key={index} onClick={() => handleRowClick(category.name)}>
                  <td>{index + 1}</td>
                  <td>{category.name}</td>
                  <td>{category.parentId}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}
