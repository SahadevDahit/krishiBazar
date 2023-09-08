"use client";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "next/image";
import Form from "react-bootstrap/Form";
import styles from "./page.module.css";
import { useStore } from "./zustLand/store";
import HomePage from "./components/home";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// Define the Product interface
interface Product {
  id: string;
  title: string;
  price: number;
  productImage: string; // Using the same image URL for all products
}

export default function Page() {
  const { businessId } = useStore();
  const [searchValue, setSearchValue] = useState<string>("");

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${process.env.server}/api/v1/business/${businessId}/products`
        );
        if (response.status === 200 || response.status === 201) {
          // Update the products state with the API response data
          setProducts(response.data);
        } else {
          console.error(
            "Server responded with an unexpected status:",
            response.status
          );
        }
      } catch (error) {
        console.error("An error occurred while fetching products:", error);
        alert("Error in fetching product data");
      }
    };

    fetchProducts();
  }, [businessId]);

  const BuyNow = (productId: string) => {
    window.location.href += `/${productId}`;
  };

  const handleSearchClick = async () => {
    try {
      const response = await axios.get(
        `${process.env.server}/api/v1/customer/products?title=${searchValue}&take=100&skip=0`
      );
      if (response.status === 200 || response.status === 201) {
        setProducts(response.data);
      } else {
        console.error(
          "Server responded with an unexpected status:",
          response.status
        );
      }
    } catch (error) {
      console.error("An error occurred while fetching products:", error);
    }
  };

return (
    <>
      <HomePage />
      <div className="container-fluid w-100 pt-5">
        <h1 className="text-center">Products List</h1>
        <div className="my-3 d-flex justify-content-center">
          <div className="shadow-lg p-3 bg-white rounded">
            <Form className="d-flex">
              <div className="input-group mb-1 flex-grow-1">
                <Form.Group className="" controlId="formBasicPassword">
                  <Form.Control
                    type="text"
                    placeholder="Enter search key..."
                    value={searchValue}
                    required={true}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                </Form.Group>
                <div className="input-group-append ms-1">
                  <Button variant="primary" onClick={handleSearchClick}>
                    <FontAwesomeIcon icon={faSearch} />
                  </Button>
                </div>
              </div>
            </Form>
          </div>
        </div>

        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-sm-12 col-md-4 col-lg-3 mb-4">
              <Card className={`w-100 shadow-lg rounded`}>
                <div className="text-center">
                  <div
                    className=""
                    style={{
                      width: "100%",
                      height: 0,
                      paddingTop: "60%", // 60% for a 2:3 aspect ratio
                      position: "relative",
                    }}
                  >
                    <Image
                      src={"/product.svg"}
                      alt="product Image"
                      layout="fill" // This fills the container dimensions
                    />
                  </div>
                </div>
                <Card.Body className="mx-auto">
                  <Card.Title>{product.title}</Card.Title>
                  <h6>
                    <b>NPR {product.price}</b>
                  </h6>
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
                      onClick={() => BuyNow(product.id)}
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
    </>
  );
}