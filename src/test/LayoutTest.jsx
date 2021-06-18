import React, { useState } from "react";
import AsideBar from "./AsideBar";
import Header from "./Components/Header/Header";
// import Content from "./Content.jsx";
import ObjectTest from "./object/ObjectTest";

const LayoutTest = (props) => {
  const [openSideBar, setOpen] = useState(true);
  return (
    <div style={{ display: "flex", background: "#f5f5f5" }}>
      <AsideBar openSideBar={openSideBar} setOpen={setOpen} />
      <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <Header setOpen={setOpen} />
        {/* <Content /> */}
        <ObjectTest />
        {/* <ObjectTest2 /> */}
      </div>
    </div>
  );
};
export default LayoutTest;
