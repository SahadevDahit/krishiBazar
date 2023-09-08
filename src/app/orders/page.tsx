"use client";
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
// Define the order interface with the "confirmed" property
interface Order {
  id: string;
  status: string;
  confirmed: boolean; // Add the "confirmed" property
}


export default function OrderTable() {
const [orders, setOrders] = useState<Order[]>();

  useEffect(() => {
    const fetchorders = async () => {
      try {
        const response = await axios.get(
          `${process.env.server}/api/v1/users/4825c6e9-6573-4ce2-bd6c-16340b16f003/orders`
        );
        if (response.status === 200 || response.status === 201) {
          setOrders(response.data);
        } else {
          console.error(
            "Server responded with an unexpected status:",
            response.status
          );
        }
      } catch (error) {
        console.error("An error occurred while fetching users:", error);
      }
    };
    fetchorders();
  }, []);

  const handleRowClick = (id: string) => {
    window.location.href += `/${id}`;
  };
  return (
    <>
      <h2 className="text-center pt-5">Orders</h2>
      <Table
        responsive="sm"
        className="container mt-3 shadow-lg p-3 bg-white rounded"
        striped
        bordered
        hover
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Order ID</th>
            <th>Status</th>
            <th>Confirmed</th> {/* Add a new column for "Confirmed" */}
          </tr>
        </thead>
        <tbody>
          {orders?.map((order, index: number) => (
            <tr key={order.id} onClick={() => handleRowClick(order.id)}>
              <td>{index + 1}</td>
              <td>{order.id}</td>
              <td>{order.status}</td>
              <td>{order.confirmed ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
