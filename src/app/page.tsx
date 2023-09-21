import React from "react";
import { redirect } from "next/navigation";

const HomePage = () => {
  redirect("/invoices");
  return (
    <div>
      <h1 className="text-3xl font-bold">Please Click Invoices Link</h1>
    </div>
  );
};

export default HomePage;
