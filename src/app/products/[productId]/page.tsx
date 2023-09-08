"use client";
import React from "react";
import ProductOptions from "../components/productOptions";
import ProductVariants from "../components/productVariants";
import ProductUpdate from "../components/productUpdate";
interface page {
  params: {
    productId: string;
  };
}
export default function Page({ params }: page) {
  return (
    <>
      <h1 className="text-center py-3">Product Details</h1>
      <ProductUpdate productId={params.productId} />
      <hr className="mx-5" />
      <ProductOptions productId={params.productId} />
      <hr className="mx-5" />
      <ProductVariants productId={params.productId} />
    </>
  );
}
