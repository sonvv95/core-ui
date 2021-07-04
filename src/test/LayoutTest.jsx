import React, { useState } from "react";
import AsideBar from "./AsideBar";
import Header from "./Components/Header/Header";
import Schedule from "./object/schedule";
import App from "./object/table";

const LayoutTest = (props) => {
  const [openSideBar, setOpen] = useState(true);
  return (
    <div style={{ display: "flex", background: "#f5f5f5" }}>
      <AsideBar openSideBar={openSideBar} setOpen={setOpen} />
      <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <Header setOpen={setOpen} />
        {/* <Content /> */}
        {/* <ObjectTest /> */}
        <Schedule />
        {/* <ObjectTest2 /> */}
        <App />
      </div>
    </div>
  );
};
export default LayoutTest;
