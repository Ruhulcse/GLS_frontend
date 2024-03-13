import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import NavLinks from "./NavLinks";
const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white fixed z-10 w-full h-[88px] top-0">
      <Container>
        <div className="flex font-medium items-center justify-between">
          <div className="z-50 sm:w-auto w-full flex items-center justify-between mt-7 sm:mt-0">
            <h3 className="text-2xl font-bold text-black">GLS</h3>
            <span className="sm:hidden text-xl" onClick={() => setOpen(!open)}>
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
            <li className="cursor-pointer">Login</li>
            <li className="cursor-pointer">Sign Up</li>
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
  );
};

export default Nav;
