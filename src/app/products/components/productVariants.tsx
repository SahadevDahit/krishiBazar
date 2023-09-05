"use client";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

interface ProductVariants {
  productVariantId: string;
  productVariant1: string;
  values1: string;
  productVariant2: string;
  values2: string;
}
interface ProductVariant1 {
  productVariantId: string;
  productVariant1: string;
  values1: string;
}

interface ProductVariant2 {
  productVariantId: string;
  productVariant2: string;
  values2: string;
}

interface ProductOptionsProps {
  productId: string;
}

export default function ProductOptions({ productId }: ProductOptionsProps) {
  // Define states for each product variant form
  const [variant1, setVariant1] = useState<ProductVariant1>({
    productVariantId: "",
    productVariant1: "",
    values1: "",
  });

  const [variant2, setVariant2] = useState<ProductVariant2>({
    productVariantId: "",
    productVariant2: "",
    values2: "",
  });

  const productVariant: ProductVariants[] = [
    {
      productVariantId: "dfs3", // Unique ID
      productVariant1: "New Variant 1", // Replace with actual data
      values1: "New Values 1", // Replace with actual data
      productVariant2: "New Variant 2", // Replace with actual data
      values2: "New Values 2", // Replace with actual data
    },
  ];
  const handleRowClick = (productVariantId: string) => {
    window.location.href += `/productVariants/${productVariantId}`;
  };

  const handleAddVariant = () => {
    // You can update the state or perform other actions
    console.log("Added Variant 1:", variant1);

    console.log("Added Variant 2:", variant2);
  };

  return (
    <>
      <h1 className="text-center">
        Product Variants for Product ID: {productId}
      </h1>
      <div className="container-fluid d-sm-block d-md-inline-block d-lg-flex justify-content-around">
        <div>
          <Form className="border rounded-3 p-3 mb-4">
            <Form.Group className="mb-3" controlId="formGroupOption1">
              <Form.Label>
                <b>Select Option 1</b>
              </Form.Label>
              <Form.Control
                as="select"
                value={variant1.productVariant1}
                onChange={(e) =>
                  setVariant1({
                    ...variant1,
                    productVariant1: e.target.value,
                  })
                }
              >
                <option value="">Select an option</option>
                {/* Replace these options with your actual options */}
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupValues1">
              <Form.Label>
                <b>Values 1</b>
              </Form.Label>
              <Form.Control
                as="select"
                value={variant1.values1}
                onChange={(e) =>
                  setVariant1({
                    ...variant1,
                    values1: e.target.value,
                  })
                }
              >
                <option value="">Values</option>
                {/* Replace these options with your actual options */}
                <option value="values 1">Values 1</option>
                <option value="values 2">Values 2</option>
                <option value="values 3">Values 3</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </div>
        <div className="mb-3">
          <Form className="border rounded-3 p-3 mb-4">
            <Form.Group className="mb-3" controlId="formGroupOption2">
              <Form.Label>
                <b>Select Option 2</b>
              </Form.Label>
              <Form.Control
                as="select"
                value={variant2.productVariant2}
                onChange={(e) =>
                  setVariant2({
                    ...variant2,
                    productVariant2: e.target.value,
                  })
                }
              >
                <option value="">Select an option</option>
                {/* Replace these options with your actual options */}
                <option value="Option A">Option A</option>
                <option value="Option B">Option B</option>
                <option value="Option C">Option C</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupValues2">
              <Form.Label>
                <b>Values 2</b>
              </Form.Label>
              <Form.Control
                as="select"
                value={variant2.values2}
                onChange={(e) =>
                  setVariant2({
                    ...variant2,
                    values2: e.target.value,
                  })
                }
              >
                <option value="">Values</option>
                {/* Replace these options with your actual options */}
                <option value="values X">Values X</option>
                <option value="values Y">Values Y</option>
                <option value="values Z">Values Z</option>
              </Form.Control>
            </Form.Group>
          </Form>
          <Button
            variant="primary"
            type="button"
            className="mb-2 mb-md-0 mt-md-2 mx-1"
            onClick={handleAddVariant}
          >
            Add Variant
          </Button>
        </div>
      </div>
      <div className="container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Variant ID</th>
              <th>Product Variant 1</th>
              <th>Values 1</th>
              <th>Product Variant 2</th>
              <th>Values 2</th>
            </tr>
          </thead>
          <tbody>
            {productVariant.map((variant, index) => (
              <tr
                key={variant.productVariantId}
                onClick={() => handleRowClick(variant.productVariantId)}
              >
                <td>{index + 1}</td>
                <td>{variant.productVariantId}</td>
                <td>{variant.productVariant1}</td>
                <td>{variant.values1}</td>
                <td>{variant.productVariant2}</td>
                <td>{variant.values2}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}
