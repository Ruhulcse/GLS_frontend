import React from "react";

const Button = ({ btnText }) => {
  return (
    <button className="  uppercase py-1 px-3 bg-blue-700 text-sm text-white font-bold hover:bg-white hover:text-blue-700 rounded-full">
      {btnText}
    </button>
  );
};

export default Button;
