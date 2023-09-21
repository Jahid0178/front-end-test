"use client";

import React, { useEffect, useState } from "react";
import Logo from "@/components/Logo/Logo";
import { PDFDownloadLink } from "@react-pdf/renderer";
import InvoicePDF from "@/components/InvoicePdf/InvoicePDF";

const DownloadInvoicePage = () => {
  const [invoiceData, setInvoiceData] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const [month, date, year] = new Date().toLocaleDateString("en-US").split("/");

  useEffect(() => {
    fetch("http://localhost:3000/api/submit-form", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setInvoiceData(data.data));

    setIsClient(true);
  }, []);

  // @ts-ignore
  const total = invoiceData.reduce((acc, curr) => acc + curr.total, 0);

  return (
    <section>
      <div>
        <div className="space-y-4 bg-white p-8 mb-4">
          <div className="flex justify-between items-center gap-4">
            <div className="flex-1 p-2 space-y-2">
              <h2 className="text-xl text-gray-400">
                <span className="font-bold text-black">Invoice No #</span>
                1909211
              </h2>
              <p>Date: {`${date}/${month}/${year}`}</p>
            </div>
            <div className="flex-1 p-2">
              <Logo
                title="Logo"
                className="text-center text-4xl text-gray-400"
              />
            </div>
            <div className="flex-1 p-2 text-end text-gray-500 space-y-2">
              <p>1474 Avenue Kwame</p>
              <p>NKRUMAH 10 BP 13395</p>
              <p>10 Ouagadougou, Burkina Faso</p>
              <p>finance@lizetransport.com</p>
              <p>+1(226)50272383</p>
            </div>
          </div>
          <div className="flex justify-between items-center gap-4">
            <div className="p-2">
              <h3 className="text-xl font-semibold mb-4">Invoice To:</h3>
              <div className="space-y-2">
                <p className="text-gray-500">John Doe</p>
                <p className="text-gray-500">123 Main Street</p>
                <p className="text-gray-500">Anytown, USA</p>
              </div>
            </div>
            <div className="p-2 space-y-2 text-gray-500 text-end">
              <p>1474 Avenue Kwame</p>
              <p>NKRUMAH 10 BP 13395</p>
              <p>10 Ouagadougou, Burkina Faso</p>
              <p>finance@lizetransport.com</p>
            </div>
          </div>
          <div className="p-2">
            <table className="w-full">
              <thead className="border-y-2">
                <tr>
                  <th className="py-4 px-2 text-primary text-start">
                    Products
                  </th>
                  <th className="py-4 px-2 text-primary text-start">
                    Description
                  </th>
                  <th className="py-4 px-2 text-primary text-start">
                    Reservation
                  </th>
                  <th className="py-4 px-2 text-primary text-start">Trip</th>
                  <th className="py-4 px-2 text-primary text-start">Total</th>
                </tr>
              </thead>
              <tbody>
                {invoiceData.map(
                  ({ _id, product, description, trip, total, date }) => {
                    return (
                      <tr key={_id}>
                        <td className="p-2 text-start uppercase">{product}</td>
                        <td className="p-2 text-start">{description}</td>
                        <td className="p-2 text-start">{date}</td>
                        <td className="p-2 text-start">{trip}</td>
                        <td className="p-2 text-start">{total}</td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </div>
          <div className="p-2 w-64 ml-auto">
            <p>
              <span className="font-semibold">Sub-Total:</span> {total}
            </p>
            <p>
              <span className="font-semibold">Total:</span> {total}
            </p>
          </div>
        </div>

        {isClient && (
          <PDFDownloadLink
            className="btn btn-primary w-40"
            document={<InvoicePDF />}
            fileName="InvoicePDF"
          >
            Download
          </PDFDownloadLink>
        )}
      </div>
    </section>
  );
};

export default DownloadInvoicePage;
