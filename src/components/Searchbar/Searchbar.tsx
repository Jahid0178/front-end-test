"use client";

import React from "react";
import { BiSearch } from "react-icons/bi";

const Searchbar = () => {
  return (
    <div className="flex items-center relative text-primary">
      <BiSearch size={25} className="absolute left-2" />
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search"
        className="border border-gray-300 pl-9 pr-4 py-2 rounded-full outline-none"
      />
    </div>
  );
};

export default Searchbar;
