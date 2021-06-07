import React from "react";
import avatar_1 from "./avatar1.jpg";
import "./Header.scss";

const header_left = [
  {
    item: "Dashboard",
    class: "header_top_left_li header_top_left_li_1 ",
  },
  {
    item: "Users",
    class: "header_top_left_li header_top_left_li_2 ",
  },
  {
    item: "Settings",
    class: "header_top_left_li header_top_left_li_3 ",
  },
];

const header_right = [
  {
    class: "fa fa-list-ul header_top_right_li header_top_right_li_5",
  },
  {
    class: "fa fa-envelope-o header_top_right_li header_top_right_li_4",
  },
  {
    class: "fa fa-server header_top_right_li header_top_right_li_3",
  },
  {
    class: "fa fa-bell-o header_top_right_li header_top_right_li_2",
  },
  {
    class: "fa fa-moon-o header_top_right_li header_top_right_li_1 ",
  },
];

const Header = (props) => {
  const { setOpen } = props;

  return (
    <div
      style={{
        borderBottom: "1px solid grey",
        background: "white",
        position: "sticky",
        top: 0,
        padding: "3px 24px",
        display: "flex",
        alignItems: "center",
        color: "#777777",
      }}
    >
      <div className="row" style={{ width: "100%" }}>
        <div
          className="header_top"
          style={{
            height: 32,
            width: 32,
            borderRadius: 8,
            cursor: "pointer",
            backgroundColor: "#1f3253",
          }}
          onClick={() => {
            setOpen((one) => !one);
          }}
        ></div>
        {header_left.map((header_left) => {
          return (
            <ul className="header_top_left">
              <li className={header_left.class}>{header_left.item}</li>
            </ul>
          );
        })}
        <img
          className="header_top_right header_top_right_img"
          src={avatar_1}
          alt="avatar"
        ></img>
        {header_right.map((header_right) => {
          return (
            <ul className="header_top_right">
              <i className={header_right.class} aria-hidden="true"></i>
            </ul>
          );
        })}
      </div>
    </div>
  );
};
export default Header;
