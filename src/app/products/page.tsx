import React from "react";
import ProductCategory from "./components/productCategory";
import Product from "./components/products";
export default function Page() {
  return (
    <>
      <ProductCategory />
      <hr className="mx-5" />
      <Product />
    </>
  );
}
