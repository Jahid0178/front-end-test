import React from "react";
import PageTitle from "@/components/PageTitle/PageTitle";
import Link from "next/link";
import { AiOutlinePlusCircle } from "react-icons/ai";
import InvoiceTable from "@/components/Tables/InvoiceTable";

const InvoicePage = () => {
  return (
    <section>
      <div>
        <div className="flex justify-between items-center gap-4 p-4 mb-4">
          <PageTitle title="Invoice" />
          <Link
            href="/invoices/new-invoice"
            className="flex gap-2 justify-center items-center btn btn-primary"
          >
            <AiOutlinePlusCircle size={20} /> Add Invoice
          </Link>
        </div>
        {/* Invoice Table */}
        <InvoiceTable />
      </div>
    </section>
  );
};

export default InvoicePage;
