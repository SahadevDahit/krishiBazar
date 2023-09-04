"use client";
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./styles/productUpdate.module.css";
import Image from "next/image";
export default function Page() {
  return (
    <>
      <div className={styles.form}>
        <Form className="border rounded-3 p-3 mb-4">
          <div className="d-flex justify-content-center align-items-center mb-3">
            <Image
              src="/product.svg" // Replace with your image path
              alt="User Image"
              width={100} // Set the desired width
              height={100} // Set the desired height
            />
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control type="file" />
              <Button variant="primary" type="submit" className="mt-3">
                Upload
              </Button>
            </Form.Group>
          </div>
          <Form.Group className="mb-3" controlId="formGroupCategoryName">
            <Form.Label>
              <b>Category Name</b>
            </Form.Label>
            <Form.Control as="select" name="title">
              <option value="Category A">Category A</option>
              <option value="Category B">Category B</option>
              <option value="Category X">Subcategory X</option>
              <option value="Category Y">Subcategory Y</option>
              {/* Add more category options as needed */}
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupActive">
            <Form.Label>
              <b>Active</b>
            </Form.Label>
            <Form.Control as="select" name="active">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupDescription">
            <Form.Label>
              <b>Description</b>
            </Form.Label>
            <Form.Control as="textarea" rows={3} name="description" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPrice">
            <Form.Label>
              <b>Price</b>
            </Form.Label>
            <Form.Control
              type="number"
              name="price"
              placeholder="Enter Price"
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
            />
          </Form.Group>

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
        </Form>
      </div>
    </>
  );
}
