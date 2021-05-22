import React from "react";

const Header = (props) => {
  const { setOpen } = props;
  return (
    <div
      style={{
        borderBottom: "1px solid grey",
        background: "white",
        position: "sticky",
        top: 0,
        padding: "8px 24px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: 32,
          width: 32,
          borderRadius: 8,
          cursor: "pointer",
          backgroundColor: "grey",
        }}
        onClick={() => {
          setOpen((one) => !one);
        }}
      ></div>
    </div>
  );
};
export default Header;
