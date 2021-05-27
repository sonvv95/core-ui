import React, { useState } from "react";
import "./styleAside.scss";
const ITEMS = [
  { name: "Dashboard", icon: "fa fa-arrows-alt", mark: "NEW" },
  { name: "THEME" },
  { name: "Colors", icon: "fa fa-tint" },
  { name: "Typography", icon: "fa fa-pencil" },
  { name: "COMPONENTS" },
  { name: "Base", icon: "fa fa-tint" },
  { name: "Buttons", icon: "fa fa-location-arrow" },
  { name: "Char", icon: "fa fa-pie-chart" },
  { name: "Editor", icon: "fa fa-tint" },
  { name: "Forms", icon: "fa fa-tint" },
  { name: "Google Maps", icon: "fa fa-map-o", google: "Pro" },
  { name: "Icon", icon: "fa fa-star-o " },
  { name: "Notification", icon: "fa fa-bell-o" },
  { name: "Plugins", icon: "fa fa-plug" },
  { name: "Tables", icon: "fa fa-table " },
  { name: "Widgets", icon: "fa fa-tint", mark: "NEW" },
  { name: "EXTRA" },
  { name: "EXTRA", icon: "fa fa-star-o " },
  { name: "Disabled", icon: "fa fa-ban" },
  { name: "Apps", icon: "fa fa-tint" },
  { name: "LABELS" },
  { name: "Label danger", icon: "fa fa-tint" },
  { name: "Label info", icon: "fa fa-tint" },
  { name: "Label warning", icon: "fa fa-tint" },
  { name: "SYSTEM UTILIZATION" },
  { name: "CPU USAGE" },
  { name: "MEMORY USAGE" },
  { name: "Icon" },
  { name: "SSD 1 USAGE" },
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
        className="item item_header"
        style={{
          minHeight: 50,
          color: "white",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          position: "sticky",
          top: 0,
        }}
      >
        <div className="item_header_1">CORE</div>
        <small className="item_header_2">IU</small>
        <div className="item_header_3">REACT.JS</div>
        <mark className="item_header_4">PRO</mark>
      </div>
      <div style={{ flex: 1 }}>
        {ITEMS.map((item, index) => {
          return (
            <div
              key={index}
              className="item"
              style={{
                height: 40,
                color: "white",
                paddingLeft: "15px",
                paddingTop: 18,
                cursor: "pointer",
                fontSize: "13px",
              }}
            >
              <i
                className={item.icon}
                style={{ marginRight: 13 }}
                aria-hidden="true"
              ></i>
              {item.name}
              <mark className="item_mark item_mark_1">{item.mark}</mark>
              <mark className="item_mark item_mark_2">{item.google}</mark>
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
          console.log("Open/Close");
          setOpen(!open);
          setOpenBar(true);
        }}
      >
        {">"}
      </div>
    </div>
  );
};
export default AsideBar;
