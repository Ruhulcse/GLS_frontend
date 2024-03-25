import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../../assets/home/logo.png";
import Container from "../Container/Container";
import NavLinks from "./NavLinks";
const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-20">
      <nav className="bg-white fixed z-50 w-full top-0">
        <Container>
          <div className="flex font-medium items-center justify-between">
            <div className="z-50 sm:w-auto w-full flex items-center justify-between mt-7 sm:mt-0">
              <Link to="/">
                <img src={logo} alt="logo" className="h-10 w-10" />
              </Link>
              <span
                className="sm:hidden text-xl"
                onClick={() => setOpen(!open)}
              >
                {open ? (
                  <IoCloseOutline className="size-8" />
                ) : (
                  <FaBarsStaggered />
                )}
              </span>
            </div>
            <ul className="sm:flex hidden uppercase items-center gap-8">
              <li>
                <Link to="/" className="py-7 px-3 inline-block">
                  Home
                </Link>
              </li>
              <NavLinks />
              <Link to="/contact">
                <li className="cursor-pointer">Contact</li>
              </Link>
              <Link to={"/logIn"} className="cursor-pointer">
                Login
              </Link>
              <Link to={"/signUp"} className="cursor-pointer">
                Sign Up
              </Link>
            </ul>
            {/* Mobile nav */}
            <ul
              className={`
        md:hidden bg-white flex flex-col fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
            >
              <li>
                <Link to="/" className="py-4 px-3 inline-block">
                  Home
                </Link>
              </li>
              <NavLinks />
              <Link to="/contact">
                <li className="cursor-pointer">Contact</li>
              </Link>
              <li className="py-4 px-3 inline-block cursor-pointer">Login</li>
              <li className="py-4 px-3 inline-block cursor-pointer">Sign Up</li>
            </ul>
          </div>
        </Container>
      </nav>
    </div>
  );
};

export default Nav;
