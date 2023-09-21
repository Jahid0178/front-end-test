"use client";

import React from "react";
import Button from "../Button/Button";

const DownloadInvoiceTable = () => {
  return (
    <>
      <table className="w-full">
        <thead className="border-y-2">
          <tr>
            <th className="py-4 px-2 text-primary text-start">Products</th>
            <th className="py-4 px-2 text-primary text-start">Description</th>
            <th className="py-4 px-2 text-primary text-start">Reservation</th>
            <th className="py-4 px-2 text-primary text-start">Trip</th>
            <th className="py-4 px-2 text-primary text-start">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 text-start">Product 1</td>
            <td className="p-2 text-start">Description 1</td>
            <td className="p-2 text-start">Reservation 1</td>
            <td className="p-2 text-start">Trip 1</td>
            <td className="p-2 text-start">10000</td>
          </tr>
        </tbody>
      </table>
      <Button type="button" className="btn-primary" onClick={() => print()}>
        Download
      </Button>
    </>
  );
};

export default DownloadInvoiceTable;
