import React from "react";

const CustomInput = (props) => {
  const { type, name, placeholder, classname, value, onchange } = props;
  return (
    <div className=" align-items-center justify-content-center ">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`form-control mb-2 gp-3  align-items-center justify-content-center ${classname}` }
        value={value}
        onChange={onchange}
        style={{borderRadius:"30px"}}
      />
    </div>
  );
};

export default CustomInput;
