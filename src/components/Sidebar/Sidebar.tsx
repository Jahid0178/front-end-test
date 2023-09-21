"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "../Logo/Logo";
import { sidebarLinks } from "../../../data/data";
import { IoCloseCircle } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { animated, useSpring } from "@react-spring/web";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const spring = useSpring({
    from: { width: 350 },
    to: { width: isOpen ? 350 : 120 },
  });

  return (
    <animated.aside
      style={{ ...spring }}
      className={`bg-[#CAE138] ${
        isOpen ? "pl-8" : "px-8"
      } py-4 sticky left-0 bottom-0 top-0 h-screen`}
    >
      <Logo title="Logo" className="mb-4 text-center" />
      <ul className="space-y-2">
        {sidebarLinks.map((link) => (
          <li
            key={link.name}
            className={`px-4 py-2 text-center text-black hover:bg-white/30 hover:rounded-md ${
              isOpen && "hover:rounded-l-full"
            }`}
          >
            <Link
              href={link.link}
              className="flex gap-2 items-center"
              title={link.name}
            >
              {link.icon}{" "}
              <span className={`${isOpen ? "block" : "hidden"}`}>
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <button
        className={`absolute ${
          isOpen ? "top-4 right-4" : "top-4 -right-7 btn-primary rounded-r-full"
        } p-2`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <IoCloseCircle size={25} />
        ) : (
          <IoIosArrowForward size={25} className="z-[300]" />
        )}
      </button>
    </animated.aside>
  );
};

export default Sidebar;
