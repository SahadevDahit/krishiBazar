"use client";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

interface ProductOption {
  productOptionsId: string;
  name: string;
}

interface ProductOptionsProps {
  productId: string;
}

export default function ProductOptions({ productId }: ProductOptionsProps) {
  const [optionName, setOptionName] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [optionValue, setOptionValue] = useState<string>("");

  const handleAddOption = () => {
    // Add your logic to handle adding an option here

    console.log("Added Option:", optionName);
    setOptionName("");
  };

  const handleDeleteOption = () => {
    // Add your logic to handle deleting an option here
    if (selectedOption) {
      // You can remove the selected option from your state or perform other actions
      console.log("Deleted Option:", selectedOption);
      setSelectedOption("");
    }
  };

  const handleAddValues = () => {
    // Add your logic to handle adding values here
    if (selectedOption) {
      // You can add the value to your state or perform other actions
      console.log("Added Value:", optionValue);
      setOptionValue("");
    }
  };

  const handleFirstFormSelectChange = (e: any) => {
    // Update the selectedOption state when an option is selected in the first form
    setSelectedOption(e.target.value);
  };

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
                <b>Select Option<span style={{color:"red"}}>*</span></b>
              </Form.Label>
              <Form.Control
                as="select"
                value={selectedOption}
                required={true}
                onChange={handleFirstFormSelectChange}
              >
                <option value="">Select an option</option>
                {/* Replace these options with your actual options */}
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label>
                <b>Name<span style={{color:"red"}}>*</span></b>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter option Name..."
                value={optionName}
                required={true}
                onChange={(e) => setOptionName(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="button"
              className="mb-2 mb-md-0 mt-md-2 mx-1"
              onClick={handleAddOption}
            >
              Add Option
            </Button>
            <Button
              variant="danger"
              type="button"
              className="mb-2 mb-md-0 mt-md-2 mx-1"
              onClick={handleDeleteOption}
            >
              Delete Option
            </Button>
          </Form>
        </div>
        <div>
          <Form className="border rounded-3 p-3 mb-4 shadow-lg p-3 bg-white rounded">
            <Form.Group className="mb-1" controlId="formGroupOption">
              <Form.Label>
                <b>Selected Option {selectedOption}</b>
              </Form.Label>
              <Form.Control
                as="select"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
              >
                <option value="">Values</option>
                {/* Replace these options with your actual options */}
                <option value="values 1">Values 1</option>
                <option value="values 2">Values 2</option>
                <option value="values 3">Values 3</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label>
                <b>Value<span style={{color:"red"}}>*</span></b>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter option Values..."
                value={optionValue}
                required={true}
                onChange={(e) => setOptionValue(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="button"
              className="mb-2 mb-md-0 mt-md-2 mx-1"
              onClick={handleAddValues}
            >
              Add Values
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
