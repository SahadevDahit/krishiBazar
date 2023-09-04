"use client";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

interface ProductOption {
  productOptionsId: string; // Change productOptionsId to string
  name: string;
}

interface ProductOptionsProps {
  productId: string; // Define productId as a prop
}

export default function ProductOptions({ productId }: ProductOptionsProps) {
  const [optionName, setOptionName] = useState<string>("");

  return (
    <div>
      <h1 className="text-center">
        Product Options for Product ID: {productId}
      </h1>
      <div className="container-fluid d-sm-block d-md-inline-block d-lg-flex justify-content-around">
        <div>
          <Form className="border rounded-3 p-3 mb-4 shadow-lg p-3 bg-white rounded">
            <Form.Group className="mb-3" controlId="formGroupOption">
              <Form.Label>
                <b>Select Option</b>
              </Form.Label>
              <Form.Control as="select">
                <option value="">Select an option</option>
                {/* Replace these options with your actual options */}
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label>
                <b>Name</b>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter option Name..."
                value={optionName}
                onChange={(e) => setOptionName(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="button"
              className="mb-2 mb-md-0 mt-md-2 mx-1"
            >
              Add Option
            </Button>
            <Button
              variant="primary"
              type="button"
              className="mb-2 mb-md-0 mt-md-2 mx-1"
            >
              Delete Option
            </Button>
          </Form>
        </div>
        <div>
          <Form className="border rounded-3 p-3 mb-4 shadow-lg p-3 bg-white rounded">
            <Form.Group className="mb-1" controlId="formGroupOption">
              <Form.Label>
                <b>Selected Option</b>
              </Form.Label>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupOption">
              <Form.Label>
                <b>Values</b>
              </Form.Label>
              <Form.Control as="select">
                <option value="">Values</option>
                {/* Replace these options with your actual options */}
                <option value="values 1">Values 1</option>
                <option value="values 2">Values 2</option>
                <option value="values 3">Values 3</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label>
                <b>Value</b>
              </Form.Label>
              <Form.Control type="text" placeholder="Enter option Values..." />
            </Form.Group>
            <Button
              variant="primary"
              type="button"
              className="mb-2 mb-md-0 mt-md-2 mx-1"
            >
              Add Values
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
