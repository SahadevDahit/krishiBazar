"use client";
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./page.module.css";
import Image from "next/image";
import ProductOptions from "../components/productOptions";
import ProductVariants from "../components/productVariants";
import ProductUpdate from "../components/productUpdate";
interface page {
  params: {
    productId: string;
  };
}
export default function Page({ params }: page) {
  const productId = "7djghg78";
  return (
    <>
      <h1 className="text-center py-3">Product Details</h1>
      <ProductUpdate />
      <hr className="mx-5" />
      <ProductOptions productId={productId} />
      <hr className="mx-5" />
      <ProductVariants productId={productId} />
    </>
  );
}
