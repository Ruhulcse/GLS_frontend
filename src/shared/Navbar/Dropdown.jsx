import React from "react";
import { Link } from "react-router-dom";

const solutions = [
  {
    label: "Carrier",
    href: "/carrier",
  },
  {
    label: "Brokers",
    href: "/brokers",
  },
  {
    label: "Shippers",
    href: "/shippers",
  },
];

const Recources = [
  {
    label: "Blog",
    href: "/blog",
  },
];

export const SolutionsDropdown = () => {
  return (
    <>
      {solutions.map((item, i) => (
        <li
          className="text-base font-normal leading-normal tracking-normal cursor-pointer w-40 py-2"
          key={i}
        >
          <Link to={item.href}>{item.label}</Link>
        </li>
      ))}
    </>
  );
};

export const RecourcesDropdown = () => {
  return (
    <>
      {Recources.map((item, i) => (
        <li
          className="text-base font-normal leading-normal tracking-normal cursor-pointer w-40 py-2"
          key={i}
        >
          <Link to={item.href}>{item.label}</Link>
        </li>
      ))}
    </>
  );
};
