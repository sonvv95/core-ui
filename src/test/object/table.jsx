import React, { useState } from "react";
import "./table.scss";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    render: (text) => <a href="#">{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];

const data = [
  {
    key: 1,
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    checkBox: "",
    color: false,
  },
  {
    key: 2,
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    color: false,
  },
  {
    key: 3,
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    checkBox: "",
    color: false,
  },
  {
    key: 4,
    name: "Disabled User",
    age: 99,
    address: "Sidney No. 1 Lake Park",
    checkBox: "",
    color: false,
  },
];

const Table = () => {
  // const [checked, setChecked] = useState(data);
  const [selection, setSelection] = useState([]);
  const [color, setColor] = useState(data);
  // console.log(color.map((v) => v.color));

  // console.log(newData);

  const handleColorChange = (key) => {
    const newData = data.map((v) => {
      return {
        ...v,
        color: !color,
      };
    });
    setColor(newData);
  };
  // return (
  //   <div className="table_checkBox">
  //     <form className="table_checkBox_top">
  //       <input name="select" type="radio" value="Checkbox" />
  //       Checkbox
  //       <input
  //         name="select"
  //         style={{ marginLeft: 15 }}
  //         type="radio"
  //         value="radio"
  //       />
  //       Radio
  //     </form>
  //     <table className="table" style={{ background: "white" }}>
  //       <thead className="table_thead">
  //         <th className="table_thead_th">
  //           {close ? (
  //             <input checked type="checkbox"></input>
  //           ) : (
  //             <input onClick={handleClickOpen} type="checkbox"></input>
  //           )}
  //         </th>
  //         {columns.map((v) => (
  //           <th style={{ textAlign: "start" }} type={v.dataIndex}>
  //             {v.title}
  //           </th>
  //         ))}
  //       </thead>
  //       <tbody>
  //         {data.map((v) => (
  //           <tr
  //             key={data.key}
  //             style={{
  //               background: open ? "#e6f7ff" : "white",
  //             }}
  //             className="table_tbody_tr"
  //           >
  //             <td>
  //               {open ? (
  //                 <input type="checkbox" checked></input>
  //               ) : (
  //                 <input
  //                   type="checkbox"
  //                   onClick={(handleClickClose, handleColorChange)}
  //                 ></input>
  //               )}
  //             </td>
  //             <td className="table_tbody_tr_name">{v.name}</td>
  //             <td>{v.age}</td>
  //             <td>{v.address}</td>
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //     <div className="pagination">
  //       <button className="btn btn_1">{"<"}</button>
  //       <button className="btn btn_2">1</button>
  //       <button className="btn btn_3">{">"}</button>
  //     </div>
  //     <footer className="footer">
  //       <div className="footer_1">
  //         <p className="footer_p footer_p_1">
  //           Rows can be selectable by making first column as a selectable
  //           column. You can use
  //         </p>
  //         <p className="footer_p footer_p_2">rowSelection.type</p>
  //         <p className="footer_p footer_p_3">
  //           to set selection type. Default is
  //         </p>
  //         <p className="footer_p footer_p_4">checkbox.</p>
  //       </div>
  //       <br />
  //       <div className="footer_2">
  //         <p className="footer_2_p footer_2_p_1">
  //           selection happens when clicking checkbox by default. You can see
  //         </p>
  //         <a
  //           className="footer_2_p footer_2_p_2"
  //           href="https://codesandbox.io/s/000vqw38rl"
  //         >
  //           https://codesandbox.io/s/000vqw38rl
  //         </a>
  //         <p className="footer_2_p footer_2_p_3">
  //           if you need row-click selection behavior.
  //         </p>
  //       </div>
  //     </footer>
  //   </div>
  // );
  return (
    <table className="table" style={{ background: "white" }}>
      <thead className="table_thead">
        <th className="table_thead_th" style={{ padding: 8 }}>
          <input
            checked={selection.length === data.length}
            type="checkbox"
            onChange={(e) => {
              setSelection(e.target.checked ? data : []);
            }}
          />
        </th>
        {columns.map((v) => (
          <th style={{ textAlign: "start" }} type={v.dataIndex}>
            {v.title}
          </th>
        ))}
      </thead>
      <tbody>
        {data.map((val, index) => {
          const checked = !!selection?.find((v) => v.key === val.key);
          return (
            <tr key={index} className="table_tbody_tr">
              <td style={{ padding: 8 }}>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={(e) => {
                    const checkedValue = e.target.checked;
                    if (checkedValue) {
                      setSelection((old) => [...old, val]);
                    } else {
                      setSelection((old) =>
                        old.filter((v) => v.key !== val.key)
                      );
                    }
                  }}
                />
              </td>
              <td className="table_tbody_tr_name">{val.name}</td>
              <td>{val.age}</td>
              <td>{val.address}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
