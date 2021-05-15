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
            <button className="chart-body-end">
              <i class="fa fa-cloud-download" aria-hidden="true"></i>
            </button>
            <div className="chart-body-right">
              <button className="btn btn-outline-secondary">Day</button>
              <button className="btn btn-outline-secondary btn-outline-secondary-2">
                Month
              </button>
              <button className="btn btn-outline-secondary">Year</button>
            </div>
          </div>
        </div>
        <div className="chart-body-middle">
          <img src={img} alt={"BodyChart"} />
        </div>
      </div>
    </div>
  );
}

export default BodyChart;
