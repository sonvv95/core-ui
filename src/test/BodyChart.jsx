import React from "react";
import img from ".././img/BodyChart.PNG";
import "./BodyChart.css";

function BodyChart() {
  return (
    <div>
      <div className="chart">
        <div className="chart-body">
          <div className="row">
            <div className="chart-body-left">
              <b style={{ fontSize: "larger" }}>Traffic</b>
              <div className="chart-body-left-day">November 2017</div>
            </div>
            <div className="chart-body-right">
              <button className="btn btn-outline-secondary">Day</button>
              <button className="btn btn-outline-secondary btn-outline-secondary-2">
                Month
              </button>
              <button className="btn btn-outline-secondary">Year</button>
            </div>
            <button className="chart-body-end">
              <i
                className="chart-body-end-icon fa fa-cloud-download"
                aria-hidden="true"
              ></i>
            </button>
          </div>
        </div>
        <div className="chart-body-middle">
          <img src={img} alt={"BodyChart"} />
        </div>
        <footer className="card-footer">
          <div className="row">
            <div className="footer footer-1">
              <div className="footer-text">Visits</div>
              <strong>29.730 Users(40%)</strong>
              <div class="progress progress-xs ">
                <div
                  class="progress-bar bg-success bg-success-1"
                  role="progressbar"
                  aria-valuenow="40"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="footer footer-2">
              <div className="footer-text">Unique</div>
              <strong>24.093 Users(20%)</strong>
              <div class="progress progress-xs">
                <div
                  class="progress-bar bg-success bg-success-2"
                  role="progressbar"
                  aria-valuenow="40"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="footer footer-3">
              <div className="footer-text">Pageviews</div>
              <strong>78.706 Viewer(60%)</strong>
              <div class="progress progress-xs">
                <div
                  class="progress-bar bg-success bg-success-3"
                  role="progressbar"
                  aria-valuenow="40"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="footer footer-4">
              <div className="footer-text">New Users</div>
              <strong>22.123 Users(80%)</strong>
              <div class="progress progress-xs">
                <div
                  class="progress-bar bg-success bg-success-4"
                  role="progressbar"
                  aria-valuenow="40"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="footer footer-5">
              <div className="footer-text">Bounce Rate</div>
              <strong>Average Rate(40.15%)</strong>
              <div class="progress progress-xs">
                <div
                  class="progress-bar bg-success bg-success-5"
                  role="progressbar"
                  aria-valuenow="40"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default BodyChart;
