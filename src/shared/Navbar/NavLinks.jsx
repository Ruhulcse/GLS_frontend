import React, { useState } from "react";
import { MdKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { Link } from "react-router-dom";
import { links } from "./RouteLinks";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  return (
    <>
      {links.map((link) => (
        <div>
          <div className="px-3 text-left sm:cursor-pointer group">
            <h1
              className="py-7 flex justify-between items-center sm:pr-0 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
              }}
            >
              {link.name}
              <span className="text-xl md:hidden inline">
                {
                    heading === link.name ? <MdOutlineKeyboardArrowUp/>
                    : <MdKeyboardArrowDown/>
                }
              </span>
              <span className="text-2xl sm:ml-2 sm:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <MdKeyboardArrowDown/>
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute 
                    mt-1 bg-white rotate-45"
                    ></div>
                  </div>
                  <div className="bg-white py-2 px-10 flex flex-col">
                    {link.sublink.map((mysublinks) => (
                      <div>
                        <li className="text-sm text-gray-600 my-2">
                            <Link
                              to={mysublinks.link}
                              className="hover:text-primary"
                            >
                              {mysublinks.name}
                            </Link>
                          </li>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div className={`${heading === link.name ? "md:hidden" : "hidden"}`}>
            {link.sublink.map((slinks) => (
                <div>
                  <li
                    className="py-4 pl-7 text-sm font-semibold flex justify-between items-center md:pr-0 pr-5"
                  >
                    <Link to={slinks.link}>
                    {slinks.name}
                    </Link>
                  </li>
                </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;