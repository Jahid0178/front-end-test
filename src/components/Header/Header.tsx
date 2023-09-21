import React from "react";
import Link from "next/link";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import Searchbar from "../Searchbar/Searchbar";
import Image from "next/image";

const Header = () => {
  return (
    <header className="mb-4">
      <div>
        <nav className="flex justify-between items-center gap-4 bg-white p-6 rounded-xl">
          <Searchbar />
          <ul className="flex items-center gap-4">
            <li>
              <Link href="#">
                <BiMessageRoundedDetail size={30} />
              </Link>
            </li>
            <li>
              <Link href="#">
                <IoMdNotificationsOutline size={30} />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image
                  src="/images/person.png"
                  alt="User Profile"
                  width={40}
                  height={40}
                />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
