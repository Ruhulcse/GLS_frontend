import clsx from "clsx";
import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import { RecourcesDropdown, SolutionsDropdown } from "./Dropdown";
const routes = [
  {
    href: "/contact",
    label: "Contact",
  },
  {
    href: "/Login",
    label: "login",
  },
  {
    href: "/signUp",
    label: "Sign Up",
  },
];
const Navbar = () => {
  const [isSideMenuOpen, setMenu] = useState(false);
  return (
    <header className="bg-[#0A0D10] fixed z-10 top-0 w-full">
      <Container>
        <nav className="flex justify-between items-center h-[88px] w-full py-6 sm:px-0 px-6">
          <a href="#">
            <h3 className="text-2xl font-bold text-white">GLS</h3>
          </a>
          <ul className="sm:flex hidden flex-row space-x-6">
            <li className="text-base text-white font-normal leading-normal tracking-normal cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <div className="group relative cursor-pointer">
              <li className="text-base text-white font-normal leading-normal tracking-normal cursor-pointer">
                <a href="" className="flex items-center">
                  Solutions
                  <svg
                    class="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </a>
              </li>
              <div className="invisible absolute z-10 flex w-auto h-auto p-5 flex-col bg-gray-100 text-[#696969] group-hover:visible">
                <SolutionsDropdown/>
              </div>
            </div>
            <div className="group relative cursor-pointer">
              <li className="text-base text-white font-normal leading-normal tracking-normal cursor-pointer">
                <a href="" className="flex items-center">
                  Recources
                  <svg
                    class="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </a>
              </li>
              <div className="invisible absolute z-10 flex w-auto h-auto p-5 flex-col bg-gray-100 text-[#696969] group-hover:visible">
                <RecourcesDropdown/>
              </div>
            </div>
            {routes.map((route, i) => (
              <li
                key={i}
                className="text-base text-white font-normal leading-normal tracking-normal cursor-pointer"
              >
                <a href={route.href}>{route.label}</a>
              </li>
            ))}
          </ul>
          <span
            className="h-5 w-5 sm:hidden block text-white"
            onClick={() => setMenu(true)}
          >
            <HiMenuAlt2 />
          </span>
          <div
            className={clsx(
              "fixed h-full w-full sm:hidden bg-black/50  backdrop-blur-sm top-0 left-0  -translate-x-full  transition-all ",
              isSideMenuOpen && "translate-x-0"
            )}
          >
            <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex  ">
              <IoCloseOutline
                onClick={() => setMenu(false)}
                className="mt-0 mb-8 text-3xl cursor-pointer"
              />

              {routes.map((route, i) => (
                <a key={i} className="font-bold" href={route.href}>
                  {route.label}
                </a>
              ))}
            </section>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;