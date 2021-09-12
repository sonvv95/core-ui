import React, { useState } from "react";
import Image1 from "../img/image1.jpg";
import AsideBar from "./AsideBar";
import Header from "./Components/Header/Header";
import CheckBox from "./object/checkBox";
import ObjectTest from "./object/ObjectTest";
// import ObjectTest2 from "./object/ObjectTest2";
import Schedule from "./object/schedule";
import Table from "./object/table";

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

        <Schedule />
        <Table />
        <CheckBox />
        <img src={Image1} alt="" />
      </div>
    </div>
  );
};
export default LayoutTest;
