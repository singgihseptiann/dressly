import React from "react";

const Tombol = (props) => {
  const { children, variant = "btn-primary" } = props;
  return (
    <div>
      <button className={`${variant} fw-bold btn `}>{children}</button>
    </div>
  );
};

export default Tombol;
