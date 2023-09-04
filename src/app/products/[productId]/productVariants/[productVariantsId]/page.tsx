"use client";
import React from "react";

// Define the ProductVariants interface
interface ProductVariants {
  productVariantId: string;
  productOption1: string;
  values1: string;
  productOption2: string;
  values2: string;
}

export default function Page() {
  const productVariants: ProductVariants[] = [
    {
      productVariantId: "1", // Unique ID
      productOption1: "Option 1",
      values1: "Values 1",
      productOption2: "Option 2",
      values2: "Values 2",
    },
    {
      productVariantId: "2", // Unique ID
      productOption1: "Option 3",
      values1: "Values 3",
      productOption2: "Option 4",
      values2: "Values 4",
    },
    // Add more product variants as needed
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center">Product Variants</h1>
      <form className="mt-4">
        {productVariants.map((variant, index) => (
          <div key={index} className="mb-3 shadow-lg p-3 bg-white rounded">
            <h5>Product Variant ID: {variant.productVariantId}</h5>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Product Option 1:</strong> {variant.productOption1}
              </li>
              <li className="list-group-item">
                <strong>Values 1:</strong> {variant.values1}
              </li>
              <li className="list-group-item">
                <strong>Product Option 2:</strong> {variant.productOption2}
              </li>
              <li className="list-group-item">
                <strong>Values 2:</strong> {variant.values2}
              </li>
            </ul>
          </div>
        ))}
      </form>
    </div>
  );
}
