import React from "react";
import "./BodyChart.css";

function BodyChart() {
  return (
    <div>
      <div className="chart">
        <div className="chart-body">
          <div className="row">
            <div className="chart-body-left">
              <b>Traffic</b>
              <div>November</div>
            </div>
            <div className="chart-body-right">
              <button>Day</button>
              <button>Month</button>
              <button>Year</button>
            </div>
            <button>
              <i class="fa fa-cloud-download" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyChart;
