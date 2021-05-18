import React from "react";
import "./BodyEnd.css";
import Table from "./Table/Table";

BodyEnd.propTypes = {};

function BodyEnd(props) {
  return (
    <div>
      <div className="body-end">
        <div className="row body-end-header">Traffic & Sale</div>
        <div className="body-end-hr" />
        <div className="body-end-body">
          <div className="row">
            <div className="body-end-body-information body-end-body-information-1">
              <div className="body-end-body-information-text">New Clients</div>
              <strong>9.123</strong>
            </div>
            <div className="body-end-body-information body-end-body-information-2">
              <div className="body-end-body-information-text">
                Recurring Clients
              </div>
              <strong>22.643</strong>
            </div>
            <div className="body-end-body-information body-end-body-information-3">
              <div className="body-end-body-information-text">Pageviews</div>
              <strong>78.623</strong>
            </div>
            <div className="body-end-body-information body-end-body-information-4">
              <div className="body-end-body-information-text">Organic</div>
              <strong>49.123</strong>
            </div>
          </div>
        </div>
        <div className="row " style={{ margin: "0 11px" }}>
          <div className="body-end-body-rate body-end-body-rate-left">
            <div className="row body-end-body-rate-left-row ">
              <div className="progress-group-text">Monday</div>
              <div className="progress-group-bars">
                <div className="progress progress-xs">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    aria-valuenow="34"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="progress progress-xs">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    aria-valuenow="78"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "78%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="row body-end-body-rate-left-row">
              <div className="progress-group-text">Tuesday</div>
              <div className="progress-group-bars">
                <div className="progress progress-xs">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    aria-valuenow="34"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "56%" }}
                  ></div>
                </div>
                <div className="progress progress-xs">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    aria-valuenow="78"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "94%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="row body-end-body-rate-left-row">
              <div className="progress-group-text">Wednesday</div>
              <div className="progress-group-bars">
                <div className="progress progress-xs">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    aria-valuenow="34"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "12%" }}
                  ></div>
                </div>
                <div className="progress progress-xs">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    aria-valuenow="78"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "67%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="row body-end-body-rate-left-row">
              <div className="progress-group-text">Thursday</div>
              <div className="progress-group-bars">
                <div className="progress progress-xs">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    aria-valuenow="34"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "43%" }}
                  ></div>
                </div>
                <div className="progress progress-xs">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    aria-valuenow="78"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "91%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="row body-end-body-rate-left-row">
              <div className="progress-group-text">Friday</div>
              <div className="progress-group-bars">
                <div className="progress progress-xs">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    aria-valuenow="34"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "22%" }}
                  ></div>
                </div>
                <div className="progress progress-xs">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    aria-valuenow="78"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "73%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="row body-end-body-rate-left-row">
              <div className="progress-group-text">Saturday</div>
              <div className="progress-group-bars">
                <div className="progress progress-xs">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    aria-valuenow="34"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "53%" }}
                  ></div>
                </div>
                <div className="progress progress-xs">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    aria-valuenow="78"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "82%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="row body-end-body-rate-left-row">
              <div className="progress-group-text">Sunday</div>
              <div className="progress-group-bars">
                <div className="progress progress-xs">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    aria-valuenow="34"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "9%" }}
                  ></div>
                </div>
                <div className="progress progress-xs">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    aria-valuenow="78"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "69%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div class="note text-center">
              <small>
                <sup class="px px-1">
                  <span class="badge badge-info badge-pill">&nbsp;</span>
                </sup>
                New clients &nbsp;
                <sup class="px px-2">
                  <span class="badge badge-danger badge-pill">&nbsp;</span>
                </sup>
                Recurring clients
              </small>
            </div>
          </div>
          <div className="body-end-body-rate body-end-body-rate-right">
            <div className="body-end-body-rate-right-row">
              <div className="row body-end-body-rate-right-row-1">
                <div className="body-end-body-rate-right-icon">
                  <i class="fa fa-male" aria-hidden="true"></i>
                </div>
                <div className="body-end-body-rate-right-information">Male</div>
                <div className="body-end-body-rate-right-rate">43%</div>
              </div>
              <div class="progress progress-xs">
                <div
                  class="progress-bar bg-warning"
                  role="progressbar"
                  aria-valuenow="43"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "43%" }}
                ></div>
              </div>
            </div>
            <div className="body-end-body-rate-right-row">
              <div className="row body-end-body-rate-right-row-1">
                <div className="body-end-body-rate-right-icon">
                  <i class="fa fa-female" aria-hidden="true"></i>
                </div>
                <div className="body-end-body-rate-right-information">
                  Female
                </div>
                <div className="body-end-body-rate-right-rate">37%</div>
              </div>
              <div class="progress progress-xs">
                <div
                  class="progress-bar bg-warning"
                  role="progressbar"
                  aria-valuenow="43"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "37%" }}
                ></div>
              </div>
            </div>
            <div className="body-end-body-rate-right-row">
              <div className="row body-end-body-rate-right-row-1">
                <div className="body-end-body-rate-right-icon">
                  <i class="fa fa-globe" aria-hidden="true"></i>
                </div>
                <div className="body-end-body-rate-right-information">
                  Organic Search
                </div>
                <div className="body-end-body-rate-right-rate">
                  191,235 (56%)
                </div>
              </div>
              <div class="progress progress-xs">
                <div
                  class="progress-bar bg-warning-3"
                  role="progressbar"
                  aria-valuenow="43"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "56%" }}
                ></div>
              </div>
            </div>
            <div className="body-end-body-rate-right-row">
              <div className="row body-end-body-rate-right-row-1">
                <div className="body-end-body-rate-right-icon">
                  <i class="fa fa-facebook-official" aria-hidden="true"></i>
                </div>
                <div className="body-end-body-rate-right-information">
                  Facebook
                </div>
                <div className="body-end-body-rate-right-rate">
                  51,223 (15%)
                </div>
              </div>
              <div class="progress progress-xs">
                <div
                  class="progress-bar bg-warning-3"
                  role="progressbar"
                  aria-valuenow="43"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "15%" }}
                ></div>
              </div>
            </div>
            <div className="body-end-body-rate-right-row">
              <div className="row body-end-body-rate-right-row-1">
                <div className="body-end-body-rate-right-icon">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </div>
                <div className="body-end-body-rate-right-information">
                  Twitter
                </div>
                <div className="body-end-body-rate-right-rate">
                  37,564 (11%)
                </div>
              </div>
              <div class="progress progress-xs">
                <div
                  class="progress-bar bg-warning-3"
                  role="progressbar"
                  aria-valuenow="43"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "11%" }}
                ></div>
              </div>
            </div>
            <div className="body-end-body-rate-right-row">
              <div className="row body-end-body-rate-right-row-1">
                <div className="body-end-body-rate-right-icon">
                  <i class="fa fa-male" aria-hidden="true"></i>
                </div>
                <div className="body-end-body-rate-right-information">
                  LinkedIn
                </div>
                <div className="body-end-body-rate-right-rate">27,319 (8%)</div>
              </div>
              <div class="progress progress-xs">
                <div
                  class="progress-bar bg-warning-3"
                  role="progressbar"
                  aria-valuenow="43"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "8%" }}
                ></div>
              </div>
            </div>
          </div>
          <Table />
        </div>
      </div>
    </div>
  );
}

export default BodyEnd;
