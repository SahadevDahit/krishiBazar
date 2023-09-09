"use client";
import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useStore } from "../../zustLand/store";
import Table from "react-bootstrap/Table";

interface ProductOptionsProps {
  productId: string;
}

interface ProductOption {
  id: string;
  name: string;
  values?: {
    value: string;
  }[];
}

export default function ProductOptions({ productId }: ProductOptionsProps) {
  const [optionName, setOptionName] = useState<string>("");
  const [optionValue, setOptionValue] = useState<string>("");
  const [options, setOptions] = useState<ProductOption[]>([]);
  const { businessId } = useStore();

  const fetchProductOptions = async () => {
    try {
      const response = await axios.get(
        `${process.env.server}/api/v1/business/${businessId}/products/${productId}/options`
      );
      if (response.status === 200 || response.status === 201) {
        setOptions(response.data);
      } else {
        console.error(
          "Server responded with an unexpected status:",
          response.status
        );
      }
    } catch (error) {
      console.error(
        "An error occurred while fetching products options:",
        error
      );
    }
  };

  useEffect(() => {
    fetchProductOptions();
  }, []);

  const handleAddOption = async () => {
    if (optionName && optionValue) {
      const option = {
        name: optionName,
        values: [
          {
            value: optionValue,
          },
        ],
      };
      try {
        const response = await axios.post(
          `${process.env.server}/api/v1/business/${businessId}/products/${productId}/options`,
          option
        );
        if (response.status === 200 || response.status === 201) {
          console.log("Submitted successfully!");
          alert("Option successfully submitted");
          fetchProductOptions();
          setOptionName("");
          setOptionValue("");
        } else {
          console.error(
            "Server responded with an unexpected status:",
            response.status
          );
        }
      } catch (error) {
        console.error("An error occurred while submitting the form:", error);
        alert("Error in submitting the product options");
      }
    }
  };

  const handleDeleteOption = async (optionId: string) => {
    try {
      const response = await axios.delete(
        `${process.env.server}/api/v1/business/${businessId}/products/${productId}/options/${optionId}`
      );
      if (response.status === 200 || response.status === 204) {
        console.log("Deleted successfully!");
        alert("Option successfully deleted");
        setOptions(options.filter((option) => option.id !== optionId));
      } else {
        console.error(
          "Server responded with an unexpected status:",
          response.status
        );
      }
    } catch (error) {
      console.error("An error occurred while deleting the option:", error);
      alert("Error in deleting the product option");
    }
  };

  return (
    <div>
      <h1 className="text-center">Product Options</h1>
      <div className="container d-sm-block d-md-flex flex-row justify-content-between">
        {/* Form */}
        <div className="w-25">
          <Form className="border rounded-3 p-3 mb-4 shadow-lg p-3 bg-white rounded">
            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label>
                <b>
                  Name<span style={{ color: "red" }}>*</span>
                </b>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter option Name..."
                value={optionName}
                required={true}
                onChange={(e) => setOptionName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupValue">
              <Form.Label>
                <b>
                  Value<span style={{ color: "red" }}>*</span>
                </b>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter option Value..."
                value={optionValue}
                required={true}
                onChange={(e) => setOptionValue(e.target.value)}
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
          </Form>
        </div>

        {/* Table */}
        <div className="w-50">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Option Name</th>
                <th>Option Value</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {options?.map((option) => (
                <tr key={option.id}>
                  <td>{option.name}</td>
                  <td>
                    {option.values && option.values[0]
                      ? option.values[0].value
                      : ""}
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => handleDeleteOption(option.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
