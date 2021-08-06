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
  const [selection, setSelection] = useState([]);
  return (
    <table className="table" style={{ background: "white" }}>
      <thead className="table_thead">
        <tr>
          <th className="table_thead_th" style={{ padding: 8 }}>
            <input
              checked={selection.length === data.length}
              type="checkbox"
              onChange={(e) => {
                const checked = selection.length !== data.length;
                setSelection(checked ? data : []);
              }}
            />
          </th>
          {columns.map((v, i) => (
            <th key={i} style={{ textAlign: "start" }} type={v.dataIndex}>
              {v.title}
            </th>
          ))}
        </tr>
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
                    const checkedValue = !checked;
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
