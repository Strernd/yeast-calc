import React from "react";

function Info({ children, ...props }) {
  return <p className="text-gray-600 text-xs mb-2"
  {...props}>{children}</p>;
}

export default Info;
