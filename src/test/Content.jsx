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
    className: "table_content_tbody_STT",
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
    className: "table_content_tbody_Name",
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
    className: "table_content_tbody_country",
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
    className: "table_content_tbody_usage",
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
    className: "table_content_tbody_pay",
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
    className: "table_content_tbody_act",
  },
];

const card = [
  {
    number: 9.832,
    text: "Members online",
    color: "#321fdb",
    className: "card card_1",
  },
  {
    number: 9.832,
    text: "Members online",
    color: "#39f",
    className: "card card_2",
  },
  {
    number: 9.832,
    text: "Members online",
    color: "#f9b115",
    className: "card card_3",
  },
  {
    number: 9.832,
    text: "Members online",
    color: "#e55353",
    className: "card card_4",
  },
];

const socialNetwork = [
  {
    number_left: "89k",
    text_left: "FRIENDS",
    number_right: "459",
    text_right: "FEEDS",
    icon: "fa fa-facebook socialNetwork_top_icon",
    className: "socialNetwork_top socialNetwork_top_1",
  },
  {
    number_left: "973k",
    text_left: "FOLLOWERS",
    number_right: "1.792",
    text_right: "TWEETS",
    icon: "fa fa-twitter socialNetwork_top_icon",
    className: "socialNetwork_top socialNetwork_top_2",
  },
  {
    number_left: "500+",
    text_left: "CONTRACTS",
    number_right: "292",
    text_right: "FEEDS",
    icon: "fa fa-instagram socialNetwork_top_icon",
    className: "socialNetwork_top socialNetwork_top_3",
  },
  {
    number_left: "12",
    text_left: "EVENTS",
    number_right: "4",
    text_right: "MEETINGS",
    icon: "fa fa-weibo socialNetwork_top_icon",
    className: "socialNetwork_top socialNetwork_top_4",
  },
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
        {card.map((card) => {
          return (
            <div className={card.className}>
              <div className="card_number">{card.number}</div>
              <div className="card_text">{card.text}</div>
            </div>
          );
        })}
      </div>
      <div className="row" style={{ display: "flex", marginBottom: "30px" }}>
        {socialNetwork.map((socialNetwork) => {
          return (
            <div className="socialNetwork">
              <div className={socialNetwork.className}>
                <i class={socialNetwork.icon} aria-hidden="true"></i>
              </div>
              <div className="row" style={{ display: "flex" }}>
                <div className="socialNetwork_bottom socialNetwork_bottom_1">
                  <div className="socialNetwork_bottom_numbers">
                    {socialNetwork.number_left}
                  </div>
                  <div className="socialNetwork_bottom_text">
                    {socialNetwork.text_left}
                  </div>
                </div>
                <div className="socialNetwork_bottom socialNetwork_bottom_2">
                  <div className="socialNetwork_bottom_numbers">
                    {socialNetwork.number_right}
                  </div>
                  <div className="socialNetwork_bottom_text">
                    {socialNetwork.text_right}
                  </div>
                </div>
              </div>
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
            {Items.map((item) => (
              <td className={item.className}>{item.row_1}</td>
            ))}
          </tr>
          <tr className="table_content_tbody-tr">
            {Items.map((item) => (
              <td className={item.className}>{item.row_2}</td>
            ))}
          </tr>
          <tr className="table_content_tbody-tr">
            {Items.map((item) => (
              <td className={item.className}>{item.row_3}</td>
            ))}
          </tr>
          <tr className="table_content_tbody-tr">
            {Items.map((item) => (
              <td className={item.className}>{item.row_4}</td>
            ))}
          </tr>
          <tr className="table_content_tbody-tr">
            {Items.map((item) => (
              <td className={item.className}>{item.row_5}</td>
            ))}
          </tr>
          <tr className="table_content_tbody-tr">
            {Items.map((item) => (
              <td className={item.className}>{item.row_6}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Content;
