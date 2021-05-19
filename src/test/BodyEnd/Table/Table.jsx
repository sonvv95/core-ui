import React from "react";
import img from "./avatar1.jpg";
import img3 from "./avatar2.jpg";
import img4 from "./avatar3.jpg";
import img5 from "./avatar4.jpg";
import img6 from "./avatar5.jpg";
import img7 from "./avatar6.jpg";
import img8 from "./Ensign-Brazil.png";
import img12 from "./Ensign-Canada.png";
import img10 from "./Ensign-France.png";
import img9 from "./Ensign-India.png";
import img11 from "./Ensign-Spain.png";
import img2 from "./Ensign-US.png";
import "./Table.css";

function Table(props) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr className="table-head">
            <th className="text-center">
              <i
                className="fa fa-user-o text-center-icon"
                aria-hidden="true"
              ></i>
            </th>
            <th className="col-user">User</th>
            <th className="text-center text-center-country ">Country</th>
            <th>Usage</th>
            <th className="text-center">Payment Method</th>
            <th className="text-center text-center-country">Activity</th>
          </tr>
        </thead>
        <tbody className="table-tbody">
          <tr className="table-line table-line-1">
            <td className="text-center">
              <div className="c-avatar">
                <img src={img} className="c-avatar-img" alt={"avatar"} />
              </div>
            </td>
            <td>
              <div>Yiorgos Avraamu</div>
              <div className="small text-muted">
                <span>New</span> | Registered: Jan 1, 2015
              </div>
            </td>
            <td className="text-center text-center-img">
              <img src={img2} className="c-ensign-img" alt={"ensign"} />
            </td>
            <td>
              <div className="clearfix">
                <div className="row">
                  <div className="float-left">
                    <strong>50%</strong>
                  </div>
                  <div className="float-right">
                    <small className="text-muted">
                      Jun 11, 2015 - Jul 10, 2015
                    </small>
                  </div>
                </div>
              </div>
              <div className="progress progress-xs progress-table">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  // style="width: 50%;"
                ></div>
              </div>
            </td>
            <td className="text-center text-center-pay">
              <i className="fa fa-cc-mastercard" aria-hidden="true"></i>
            </td>
            <td>
              <div className="small text-muted">Last login</div>
              <strong className="text-muted-2">10 sec ago</strong>
            </td>
          </tr>
          <tr className="table-line table-line-2">
            <td className="text-center">
              <div className="c-avatar">
                <img src={img3} className="c-avatar-img" alt={"avatar"} />
              </div>
            </td>
            <td>
              <div>Avram Tarasios</div>
              <div className="small text-muted">
                <span>New</span> | Registered: Jan 1, 2015
              </div>
            </td>
            <td className="text-center text-center-img">
              <img src={img8} className="c-ensign-img" alt={"ensign"} />
            </td>
            <td>
              <div className="clearfix">
                <div className="row">
                  <div className="float-left">
                    <strong>10%</strong>
                  </div>
                  <div className="float-right">
                    <small className="text-muted">
                      Jun 11, 2015 - Jul 10, 2015
                    </small>
                  </div>
                </div>
              </div>
              <div className="progress progress-xs progress-table">
                <div
                  className="progress-bar bg-success-2"
                  role="progressbar"
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "10%" }}
                ></div>
              </div>
            </td>
            <td className="text-center text-center-pay">
              <i className="fa fa-cc-visa" aria-hidden="true"></i>
            </td>
            <td>
              <div className="small text-muted">Last login</div>
              <strong className="text-muted-2">5 minutes ago</strong>
            </td>
          </tr>
          <tr className="table-line table-line-3">
            <td className="text-center">
              <div className="c-avatar">
                <img src={img4} className="c-avatar-img" alt={"avatar"} />
              </div>
            </td>
            <td>
              <div>Quintin Ed</div>
              <div className="small text-muted">
                <span>New</span> | Registered: Jan 1, 2015
              </div>
            </td>
            <td className="text-center text-center-img">
              <img src={img9} className="c-ensign-img" alt={"ensign"} />
            </td>
            <td>
              <div className="clearfix">
                <div className="row">
                  <div className="float-left">
                    <strong>74%</strong>
                  </div>
                  <div className="float-right">
                    <small className="text-muted">
                      Jun 11, 2015 - Jul 10, 2015
                    </small>
                  </div>
                </div>
              </div>
              <div className="progress progress-xs progress-table">
                <div
                  className="progress-bar bg-success-3"
                  role="progressbar"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "74%" }}
                ></div>
              </div>
            </td>
            <td className="text-center text-center-pay">
              <i className="fa fa-cc-stripe" aria-hidden="true"></i>
            </td>
            <td>
              <div className="small text-muted">Last login</div>
              <strong className="text-muted-2">1 hour ago</strong>
            </td>
          </tr>
          <tr className="table-line table-line-4">
            <td className="text-center">
              <div className="c-avatar">
                <img src={img5} className="c-avatar-img" alt={"avatar"} />
              </div>
            </td>
            <td>
              <div>Enéas Kwadwo</div>
              <div className="small text-muted">
                <span>New</span> | Registered: Jan 1, 2015
              </div>
            </td>
            <td className="text-center text-center-img">
              <img src={img10} className="c-ensign-img" alt={"ensign"} />
            </td>
            <td>
              <div className="clearfix">
                <div className="row">
                  <div className="float-left">
                    <strong>98%</strong>
                  </div>
                  <div className="float-right">
                    <small className="text-muted">
                      Jun 11, 2015 - Jul 10, 2015
                    </small>
                  </div>
                </div>
              </div>
              <div className="progress progress-xs progress-table">
                <div
                  className="progress-bar bg-success-4"
                  role="progressbar"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "98%" }}
                ></div>
              </div>
            </td>
            <td className="text-center text-center-pay">
              <i className="fa fa-paypal" aria-hidden="true"></i>
            </td>
            <td>
              <div className="small text-muted">Last login</div>
              <strong className="text-muted-2">Last month</strong>
            </td>
          </tr>
          <tr className="table-line table-line-5">
            <td className="text-center">
              <div className="c-avatar">
                <img src={img6} className="c-avatar-img" alt={"avatar"} />
              </div>
            </td>
            <td>
              <div>Agapetus Tadeáš</div>
              <div className="small text-muted">
                <span>New</span> | Registered: Jan 1, 2015
              </div>
            </td>
            <td className="text-center text-center-img">
              <img src={img11} className="c-ensign-img" alt={"ensign"} />
            </td>
            <td>
              <div className="clearfix">
                <div className="row">
                  <div className="float-left">
                    <strong>22%</strong>
                  </div>
                  <div className="float-right">
                    <small className="text-muted">
                      Jun 11, 2015 - Jul 10, 2015
                    </small>
                  </div>
                </div>
              </div>
              <div className="progress progress-xs progress-table">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "22%" }}
                ></div>
              </div>
            </td>
            <td className="text-center text-center-pay">
              <i className="fa fa-cc-paypal" aria-hidden="true"></i>
            </td>
            <td>
              <div className="small text-muted">Last login</div>
              <strong className="text-muted-2">Last week</strong>
            </td>
          </tr>
          <tr className="table-line table-line-6">
            <td className="text-center">
              <div className="c-avatar">
                <img src={img7} className="c-avatar-img" alt={"avatar"} />
              </div>
            </td>
            <td>
              <div>Friderik Dávid</div>
              <div className="small text-muted">
                <span>New</span> | Registered: Jan 1, 2015
              </div>
            </td>
            <td className="text-center text-center-img">
              <img src={img12} className="c-ensign-img" alt={"ensign"} />
            </td>
            <td>
              <div className="clearfix">
                <div className="row">
                  <div className="float-left">
                    <strong>43%</strong>
                  </div>
                  <div className="float-right">
                    <small className="text-muted">
                      Jun 11, 2015 - Jul 10, 2015
                    </small>
                  </div>
                </div>
              </div>
              <div className="progress progress-xs progress-table">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "43%" }}
                ></div>
              </div>
            </td>
            <td className="text-center text-center-pay">
              <i className="fa fa-cc-amex" aria-hidden="true"></i>
            </td>
            <td>
              <div className="small text-muted">Last login</div>
              <strong className="text-muted-2">Yesterday</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
