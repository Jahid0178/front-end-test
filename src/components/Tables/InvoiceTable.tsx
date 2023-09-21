"use client";

import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import { BiSolidTrashAlt } from "react-icons/bi";
import { AiFillEdit } from "react-icons/ai";
import Link from "next/link";
import toast from "react-hot-toast";

const InvoiceTable = () => {
  const [invoices, setInvoices] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/submit-form", {
          method: "GET",
        });
        if (response.ok) {
          const data = await response.json();
          setInvoices(data.data);
          setIsDeleted(false);
        } else {
          console.error("Failed to fetch invoices");
        }
      } catch (error) {
        console.error("An error occurred while fetching invoices:", error);
      }
    };

    fetchData();
  }, [isDeleted]);

  const handleDelete = async (id: any) => {
    if (window.confirm("Are you sure you want to delete this invoice?")) {
      try {
        const response = await fetch(`http://localhost:3000/api/submit-form`, {
          method: "DELETE",
          body: JSON.stringify(id),
        });

        if (response.ok) {
          toast.success("Invoice Deleted Successfully");
          setIsDeleted(true);
        } else {
          console.error("Failed to delete invoice");
        }
      } catch (error) {
        console.error("An error occurred while deleting invoice:", error);
      }
    } else {
      console.log("Cancelled");
      toast.error("Delete Cancelled");
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl">
      <table className="w-full">
        <thead className="border-b border-b-gray-120">
          <tr>
            <th className="text-left p-2 text-primary">Invoice No.</th>
            <th className="text-left p-2 text-primary">Trip</th>
            <th className="text-left p-2 text-primary">Inv. Date</th>
            <th className="text-left p-2 text-primary">Inv. Amount</th>
            <th className="text-left p-2 text-primary">Bal. Due</th>
            <th className="text-left p-2 text-primary">Payment Method</th>
            <th className="text-left p-2 text-primary">Due Date</th>
            <th className="text-left p-2 text-primary">Status</th>
            <th className="text-left p-2 text-primary">Action</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map(({ total, date, trip, _id }) => {
            return (
              <tr key={_id}>
                <td className="p-2 text-primary">1909112</td>
                <td className="p-2 text-primary uppercase">{trip}</td>
                <td className="p-2 text-primary">{date}</td>
                <td className="p-2 text-primary">{total}</td>
                <td className="p-2 text-primary">{total}</td>
                <td className="p-2 text-primary">Cash</td>
                <td className="p-2 text-primary">{date}</td>
                <td className="p-2 text-primary">Paid</td>
                <td className="p-2 text-primary flex items-center gap-2">
                  <Link
                    href={`/invoices/${_id}`}
                    className="bg-lime-400/20 rounded-md p-2"
                    type="button"
                  >
                    <AiFillEdit color="#CAE138" size={20} />
                  </Link>
                  <Button
                    className="btn-danger rounded-md p-2"
                    type="button"
                    onClick={() => handleDelete(_id)}
                  >
                    <BiSolidTrashAlt color="#F36A6A" />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceTable;
