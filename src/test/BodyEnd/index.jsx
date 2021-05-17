import React from "react";
import "./BodyEnd.css";

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
        <div className="row" style={{ margin: "0 11px" }}>
          <div className="body-end-body-rate body-end-body-rate-left">
            <div className="row">
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
          </div>
          <div className="body-end-body-rate body-end-body-rate-right">
            Male
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyEnd;
