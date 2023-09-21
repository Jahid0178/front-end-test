"use client";

import React from "react";
import InvoiceForm from "@/components/Forms/InvoiceForm";
import PageTitle from "@/components/PageTitle/PageTitle";
import { InvoiceFormProps } from "../../../../interfaces";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  clients,
  productTypes,
  products,
  tripsOption,
} from "../../../../data/data";
import Button from "@/components/Button/Button";
import { BiSolidTrashAlt } from "react-icons/bi";
import Link from "next/link";

const NewInvoicePage = () => {
  const { register, handleSubmit, reset } = useForm<InvoiceFormProps>();

  const onSubmit: SubmitHandler<InvoiceFormProps> = async (data) => {
    const res = await fetch("http://localhost:3000/api/submit-form", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
    if (res.status === 200) {
      toast.success("Invoice Created Successfully");
    }
    reset();
  };
  return (
    <section>
      <div className="space-y-4">
        <div>
          <PageTitle title="Invoices" />
        </div>
        <div>
          <InvoiceForm>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="bg-white p-6 rounded-xl mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-4 md:col-span-4 gap-4">
                    <div className="md:col-span-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="field-wrap">
                          <label htmlFor="select" className="font-semibold">
                            Select
                          </label>
                          <select
                            id="select"
                            className="input-field"
                            {...register("client", { required: true })}
                          >
                            {clients.map((client) => (
                              <option key={client.value} value={client.value}>
                                {client.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="field-wrap">
                          <label
                            htmlFor="invoice-date"
                            className="font-semibold"
                          >
                            Invoice Date
                          </label>
                          <input
                            type="date"
                            className="input-field"
                            {...register("date", { required: true })}
                          />
                        </div>
                        <div className="field-wrap">
                          <label
                            htmlFor="invoice-date"
                            className="font-semibold"
                          >
                            Trip
                          </label>
                          <select
                            id="trip"
                            className="input-field"
                            {...register("trip", { required: true })}
                          >
                            {tripsOption.map((option) => (
                              <option key={option.name} value={option.value}>
                                {option.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="field-wrap md:col-span-1">
                      <label htmlFor="plane-image" className="font-semibold">
                        Plane Image
                      </label>
                      <input
                        type="file"
                        id="plane-image"
                        {...register("image", { required: false })}
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <table
                    className="min-w-7xl overflow-x-scroll w-full"
                    border={1}
                    cellPadding={10}
                    cellSpacing={10}
                  >
                    <thead>
                      <tr>
                        <th className="text-left p-2">Products Type</th>
                        <th className="text-left p-2">Products</th>
                        <th className="text-left p-2">Description</th>
                        <th className="text-left p-2">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2">
                          <select
                            className="input-field rounded-md w-full"
                            {...register("productType", { required: true })}
                          >
                            {productTypes.map((productType) => (
                              <option
                                key={productType.name}
                                value={productType.value}
                              >
                                {productType.name}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td className="p-2">
                          <select
                            className="input-field rounded-md w-full"
                            {...register("product", { required: true })}
                          >
                            {products.map((product) => (
                              <option key={product.name} value={product.value}>
                                {product.name}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td className="p-2">
                          <input
                            type="text"
                            placeholder="Product Description"
                            className="input-field rounded-md w-full"
                            {...register("description", { required: true })}
                          />
                        </td>
                        <td className="flex gap-2 p-2">
                          <input
                            type="text"
                            id="total"
                            placeholder="Total"
                            className="input-field rounded-md"
                            {...register("total", { required: true })}
                          />
                          <Button
                            className="btn-danger rounded-md"
                            onClick={() =>
                              confirm("Are you sure?") ? alert("Done") : null
                            }
                          >
                            <BiSolidTrashAlt size={20} color="#F36A6A" />
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <Button className="btn-primary mt-12" type="button">
                    Add Product
                  </Button>
                  <div className="border-t-2 border-b-2 p-4 mt-4">
                    <div className="w-[220px] p-2 ml-auto">
                      <p>
                        <span>Subtotal: </span> 12,000
                      </p>
                      <p>
                        <span>TVA: </span> 820
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-4 items-center py-4">
                      <Button className="btn-primary" type="submit">
                        Save
                      </Button>
                      <Button className="btn-outline" type="button">
                        Cancel
                      </Button>
                      <Link
                        href="/invoices/download-invoice"
                        className="btn btn-primary"
                        type="button"
                      >
                        Download Invoice
                      </Link>
                    </div>
                    <div className="w-[220px] p-2">
                      <p>
                        <span>Total:</span>
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </InvoiceForm>
        </div>
      </div>
    </section>
  );
};

export default NewInvoicePage;
