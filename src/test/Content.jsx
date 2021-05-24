import React from "react";
import "./Content.scss";

const Items = [
  {
    id: 1,
    title: "STT",
    row_1: "1",
    row_2: "2",
    row_3: "3",
    row_4: "4",
    row_5: "5",
    row_6: "6",
  },
  {
    id: 2,
    title: "User",
    row_1: "Yiorgos Avraamu",
    row_2: "Avram Tarasios",
    row_3: "Quintin Ed",
    row_4: "Enéas Kwadwo",
    row_5: "Agapetus Tadeáš",
    row_6: "Friderik Dávid",
  },
  {
    id: 3,
    title: "Country",
    row_1: "US",
    row_2: "Brazil",
    row_3: "India",
    row_4: "France",
    row_5: "Spain",
    row_6: "Canada",
  },
  {
    id: 4,
    title: "Usage",
    row_1: "Jun 11, 2015 - Jul 10, 2015",
    row_2: "Jun 11, 2015 - Jul 10, 2015",
    row_3: "Jun 11, 2015 - Jul 10, 2015",
    row_4: "Jun 11, 2015 - Jul 10, 2015",
    row_5: "Jun 11, 2015 - Jul 10, 2015",
    row_6: "Jun 11, 2015 - Jul 10, 2015",
  },
  {
    id: 5,
    title: "Payment Method",
    row_1: "Master Card",
    row_2: "Visa",
    row_3: "Stripe",
    row_4: "P",
    row_5: "GPay",
    row_6: "VnPay",
  },
  {
    id: 6,
    title: "Activity",
    row_1: "10 sec ago",
    row_2: "5 minutes ago",
    row_3: "1 hour ago",
    row_4: "Last month",
    row_5: "Last week",
    row_6: "Yesterday",
  },
];

const card = [
  { number: 9.832, text: "Members online" },
  { number: 9.832, text: "Members online" },
  { number: 9.832, text: "Members online" },
  { number: 9.832, text: "Members online" },
];

const Content = (props) => {
  return (
    <div
      style={{
        padding: 16,
        margin: "16px 24px",
        background: "white",
      }}
    >
      <div className="row" style={{ display: "flex", marginBottom: "30px" }}>
        {card.map((card, index) => {
          return (
            <div className="card">
              <div className="card_number">{card.number}</div>
              <div className="card_text">{card.text}</div>
            </div>
          );
        })}
      </div>
      <table className="table_content" style={{ borderCollapse: "collapse" }}>
        <thead className="table_content_thead">
          <tr className="table_content_thead_tr">
            {Items.map((item) => {
              return <th>{item.title}</th>;
            })}
          </tr>
        </thead>
        <tbody className="table_content_tbody">
          <tr className="table_content_tbody-tr">
            {Items.map((item, index) => (
              <td>{item.row_1}</td>
            ))}
          </tr>
          <tr className="table_content_tbody-tr">
            {Items.map((item, index) => (
              <td>{item.row_2}</td>
            ))}
          </tr>
          <tr className="table_content_tbody-tr">
            {Items.map((item, index) => (
              <td>{item.row_3}</td>
            ))}
          </tr>
          <tr className="table_content_tbody-tr">
            {Items.map((item, index) => (
              <td>{item.row_4}</td>
            ))}
          </tr>
          <tr className="table_content_tbody-tr">
            {Items.map((item, index) => (
              <td>{item.row_5}</td>
            ))}
          </tr>
          <tr className="table_content_tbody-tr">
            {Items.map((item, index) => (
              <td>{item.row_6}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Content;
