import React from "react";

const CustomInput = (props) => {
  const { type, name, placeholder, classname, value, onchange } = props;
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`form-control ${classname}`}
        value={value}
        onChange={onchange}
      />
    </div>
  );
};

export default CustomInput;
