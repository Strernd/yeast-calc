import React from "react";

function InputContainer({ children, ...props }) {
  return <div 
  {...props}>{children}</div>;
}

export default InputContainer;
