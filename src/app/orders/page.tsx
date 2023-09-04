"use client";
import React from "react";
import Table from "react-bootstrap/Table";

// Define the order interface with the "confirmed" property
interface Order {
  orderId: string;
  status: string;
  confirmed: boolean; // Add the "confirmed" property
}

// Sample list of orders with the "confirmed" property
const orders: Order[] = [
  { orderId: "1", status: "confirmed", confirmed: true },
  { orderId: "2", status: "pending", confirmed: false },
  { orderId: "3", status: "shipped", confirmed: true },
];

export default function OrderTable() {
  const handleRowClick = (orderId: string) => {
    window.location.href += `/${orderId}`;
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
          {orders.map((order, index: number) => (
            <tr
              key={order.orderId}
              onClick={() => handleRowClick(order.orderId)}
            >
              <td>{index + 1}</td>
              <td>{order.orderId}</td>
              <td>{order.status}</td>
              <td>{order.confirmed ? "Yes" : "No"}</td>{" "}
              {/* Display "Yes" or "No" based on the "confirmed" property */}
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
