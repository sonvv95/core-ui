import React, { useState } from "react";
import "./styleAside.css";
const ITEMS = [
  { name: "Color" },
  { name: "Typography" },
  { name: "Base" },
  { name: "Form" },
  { name: "Char" },
  { name: "Icon" },
  { name: "Color" },
  { name: "Typography" },
  { name: "Base" },
  { name: "Form" },
  { name: "Char" },
  { name: "Icon" },
  { name: "Color" },
  { name: "Typography" },
  { name: "Base" },
  { name: "Form" },
  { name: "Char" },
  { name: "Icon" },
  { name: "Color" },
  { name: "Typography" },
  { name: "Base" },
  { name: "Form" },
  { name: "Char" },
  { name: "Icon" },
  { name: "Color" },
  { name: "Typography" },
  { name: "Base" },
  { name: "Form" },
  { name: "Char" },
  { name: "Icon" },
];
const AsideBar = (props) => {
  const { openSideBar, setOpen: setOpenBar } = props;
  const [open, setOpen] = useState(true);
  return (
    <div
      style={{
        width: openSideBar && open ? 256 : open ? 80 : 0,
        background: "#3c4b64",
        height: "100vh",
        overflow: "auto",
        position: "sticky",
        top: 0,
        transition: "0.5s width",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        className="item"
        style={{
          minHeight: 50,
          color: "white",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          position: "sticky",
          top: 0,
          backgroundColor: "grey",
        }}
      >
        Logo
      </div>
      <div style={{ flex: 1 }}>
        {ITEMS.map((item, index) => {
          return (
            <div
              key={index}
              className="item"
              style={{
                height: 48,
                color: "white",
                padding: "6px 12px",
                cursor: "pointer",
              }}
            >
              {item.name}
            </div>
          );
        })}
      </div>
      <div
        className="item"
        style={{
          height: 32,
          color: "white",
          padding: "6px 12px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          position: "sticky",
          bottom: 0,
          backgroundColor: "grey",
        }}
        onClick={() => {
          //   setOpen((one) => !one);
          console.log("ahihi");
          setOpen(!open);
          setOpenBar(true);
        }}
      >
        >
      </div>
    </div>
  );
};
export default AsideBar;
