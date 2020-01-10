import React from "react";

function Input({ setValue, ...props }) {
  const onChange = e => {
    const cast = Number(e.currentTarget.value);
    if (!isNaN(cast)) setValue(cast);
  };
  return <input type="number" className="w-16 border-b border-gray-600 text-right mr-4 pr-1"
  onChange={onChange} {...props} />;
}

export default Input;
