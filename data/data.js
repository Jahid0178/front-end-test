import {
  BsHouseDoor,
  BsTelephone,
  BsBag,
  BsAirplane,
  BsPeople,
  BsFolder2Open,
  BsCalendar4Week,
  BsGear,
} from "react-icons/bs";
import { LiaFileInvoiceSolid, LiaGlassMartiniSolid } from "react-icons/lia";
import { MdOutlineGroups } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";

export const sidebarLinks = [
  {
    name: "Dashboard",
    icon: <BsHouseDoor size={20} />,
    link: "#",
  },
  {
    name: "Reservations",
    icon: <BsTelephone size={20} />,
    link: "#",
  },
  {
    name: "Trips",
    icon: <BsBag size={20} />,
    link: "#",
  },
  {
    name: "Invoices",
    icon: <LiaFileInvoiceSolid size={20} />,
    link: "/invoices",
  },
  {
    name: "Planes",
    icon: <BsAirplane size={20} />,
    link: "#",
  },
  {
    name: "Amenities",
    icon: <LiaGlassMartiniSolid size={20} />,
    link: "#",
  },
  {
    name: "Contacts",
    icon: <MdOutlineGroups size={20} />,
    link: "#",
  },
  {
    name: "Team",
    icon: <BsPeople size={20} />,
    link: "#",
  },
  {
    name: "Crew Members",
    icon: <MdOutlineGroups size={20} />,
    link: "#",
  },
  {
    name: "Files",
    icon: <BsFolder2Open size={20} />,
    link: "#",
  },
  {
    name: "Messages",
    icon: <AiOutlineMessage size={20} />,
    link: "#",
  },
  {
    name: "Calendar",
    icon: <BsCalendar4Week size={20} />,
    link: "#",
  },
  {
    name: "Settings",
    icon: <BsGear size={20} />,
    link: "#",
  },
];

export const clients = [
  {
    name: "Select Client",
    value: "#",
  },
  {
    name: "Elon Musk",
    value: "elon-musk",
  },
  {
    name: "Jeff Bezos",
    value: "jeff-bezos",
  },
  {
    name: "Bill Gates",
    value: "bill-gates",
  },
  {
    name: "Mark Zuckerberg",
    value: "mark-zuckerberg",
  },
];

export const tripsOption = [
  {
    name: "T2930",
    value: "t2930",
  },
  {
    name: "T2940",
    value: "t2940",
  },
  {
    name: "T2952",
    value: "t2952",
  },
  {
    name: "T2955",
    value: "t2955",
  },
  {
    name: "T2974",
    value: "t2974",
  },
];

export const productTypes = [
  {
    name: "Trips IDs",
    value: "trips",
  },
  {
    name: "Flowers",
    value: "flowers",
  },
  {
    name: "Drinks",
    value: "drinks",
  },
  {
    name: "Foods",
    value: "foods",
  },
  {
    name: "Planes",
    value: "planes",
  },
  {
    name: "Airbus",
    value: "airbus",
  },
  {
    name: "Helicopters",
    value: "helicopters",
  },
];

export const products = [
  {
    name: "Falcon885X TBA / LTI",
    value: "falcon885x",
  },
  {
    name: "Falcon8X TBA / LTI",
    value: "falcon8x",
  },
  {
    name: "Falcon998X TBA / LTI",
    value: "falcon998x",
  },
  {
    name: "Falcon1428X TBA / LTI",
    value: "falcon1428x",
  },
  {
    name: "Falcon6558X TBA / LTI",
    value: "falcon6558x",
  },
];
