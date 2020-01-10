import React from "react";

function Label({ children, ...props }) {
  return <label className="w-64 text-gray-800 inline-block"
  {...props}>{children}</label>;
}

export default Label;
