"use client";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "next/image";
import styles from "./page.module.css";
// Define the Product interface
interface Product {
  productId: string;
  productName: string;
  price: number;
  productImage: string; // Using the same image URL for all products
}

export default function Home() {
  // Sample product data (using the same image URL for all products)
  const products: Product[] = [
    {
      productId: "1",
      productName: "Product 1",
      price: 100,
      productImage: "/product.svg", // Using the same image URL for all products
    },
    {
      productId: "2",
      productName: "Product 2",
      price: 150,
      productImage: "/product.svg", // Using the same image URL for all products
    },
    {
      productId: "3",
      productName: "Product 3",
      price: 80,
      productImage: "/product.svg", // Using the same image URL for all products
    },
    {
      productId: "4",
      productName: "Product 4",
      price: 120,
      productImage: "/product.svg", // Using the same image URL for all products
    },
    {
      productId: "5",
      productName: "Product 5",
      price: 200,
      productImage: "/product.svg", // Using the same image URL for all products
    },
    {
      productId: "6",
      productName: "Product 6",
      price: 90,
      productImage: "/product.svg", // Using the same image URL for all products
    },
    {
      productId: "7",
      productName: "Product 7",
      price: 110,
      productImage: "/product.svg", // Using the same image URL for all products
    },
    {
      productId: "8",
      productName: "Product 8",
      price: 70,
      productImage: "/product.svg", // Using the same image URL for all products
    },
    {
      productId: "9",
      productName: "Product 9",
      price: 130,
      productImage: "/product.svg", // Using the same image URL for all products
    },
    {
      productId: "10",
      productName: "Product 10",
      price: 180,
      productImage: "/product.svg", // Using the same image URL for all products
    },
    // Add more products as needed
  ];
  const BuyNow = (productId: string) => {
    window.location.href += `/${productId}`;
  };
  return (
    <div className="container pt-5">
      <h1 className="text-center">Products List</h1>
      <div className="row">
        {products.map((product) => (
          <div
            key={product.productId}
            className="col-sm-12 col-md-4 col-lg-3 mb-4"
          >
            <Card
              className={`${styles.card} w-100 shadow-lg p-3 bg-white rounded`}
            >
              <div className="text-center">
                <Image
                  src={product.productImage}
                  alt={product.productName}
                  width={150}
                  height={150}
                />
              </div>
              <Card.Body className="mx-auto">
                <Card.Title>{product.productName}</Card.Title>
                <h4>
                  <b>NPR {product.price}</b>
                </h4>
                <div className="d-sm-flex justify-content-between">
                  <Button
                    variant="primary"
                    type="submit"
                    className="btn-sm mb-2 mx-1"
                  >
                    Add To Cart
                  </Button>
                  <Button
                    variant="primary"
                    type="submit"
                    className="btn-sm mb-2 mx-1"
                    onClick={() => BuyNow(product.productId)}
                  >
                    Buy Now
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
