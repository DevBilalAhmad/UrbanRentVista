import Example from "./Nav/Example";
import { useContext } from "react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose, IoLogOut } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext.jsx";
import { Link } from "react-router-dom";
import DropdownUser from "../../Pages/prac/DropDownuser";

const routes = [
  {
    name: "Home",
    href: "/",
    isActive: true,
  },
  { name: "About us", href: "/About", isActive: true },
  { name: "properties", href: "/list", isActive: true },
  { name: "Contact", href: "/Contact", isActive: true },
];

const NavMenu = ({ routes }) => (
  <ul className="flex flex-col md:flex-row">
    {routes.map((route, i) => (
      <li key={i} className="md:ml-8 text-xl md:my-0 my-7 ">
        <Link
          className={`px-4 ${
            route.isActive ? "opacity-100" : "opacity-50 hover:opacity-100"
          }`}
          to={route.href}
        >
          {route.name}
        </Link>
      </li>
    ))}
  </ul>
);

const AuthNavMenu = () => (
  <ul className="mb-2 lg:mb-0">
    <li>
      <div className="border border-black hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black rounded-lg px-4 py-1.5">
        <Link to="/login" className="mr-2">
          Login
        </Link>
        <Link to="/signup">Signup</Link>
      </div>
    </li>
  </ul>
);


const Nav = () => {
  let [open, setOpen] = useState(false);

  const { currentUser } = useContext(AuthContext);
  console.log("currentUser", currentUser?.accountType);

  return (
    <div className="shadow-md w-full top-0 left-0 z-50">
      <div className="md:flex flex justify-center items-center bg-white py-4 md:px-10 px-7">
        <div
          className="flex justify-center  sm:block order-first font-bold text-2xl cursor-pointer items-center font-[Poppins] 
          text-gray-800 "
        >
          <span className="mr-5 inline-block">
            <FaHome />
          </span>
          Urban Rent Vista
        </div>
        <div className="sm:hidden">
          <Example />
          <div className="ml-[258px] relative bottom-9">
            {currentUser && <DropdownUser />}
          </div>
        </div>
        <div className="hidden sm:block">
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            <NavMenu routes={routes} />
            {currentUser?.accountType === "Listing Agent" && (
              <Link to={"/add"}>
                <Button className="mr-6">Create List</Button>
              </Link>
            )}
            {!currentUser && <AuthNavMenu />}
            {currentUser && <DropdownUser />}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
