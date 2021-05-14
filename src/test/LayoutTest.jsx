import React from "react";
import BodyChart from "./BodyChart";
import "./cards.css";
import "./style.css";

const LayoutTest = (props) => {
  return (
    <div className="row">
      <div className="col-1-of-6 c-sidebar">
        <div className="c-sidebar c-sidebar-barand">
          Core
          <small>UI chan dai vt </small>
        </div>
        <ul className="c-sidebar-nav">
          <li className="c-sidebar-nav c-sidebar-nav-item">
            <i className="fa fa-book c-sidebar-nav-icon" aria-hidden="true"></i>
            Dashboard
            <mark>NEW</mark>
          </li>
          <li className="c-sidebar-nav c-sidebar-nav-item-category">THEME</li>
          <li className="c-sidebar-nav c-sidebar-nav-item">
            <i className="fa fa-tint c-sidebar-nav-icon" aria-hidden="true"></i>
            Color
          </li>
          <li className="c-sidebar-nav c-sidebar-nav-item">
            <i
              className="fa fa-pencil c-sidebar-nav-icon"
              aria-hidden="true"
            ></i>
            Typography
          </li>
          <li className="c-sidebar-nav c-sidebar-nav-item-category">
            COMPONENTS
          </li>
          <li className="c-sidebar-nav c-sidebar-nav-item">
            <i className="fa fa-bug c-sidebar-nav-icon" aria-hidden="true"></i>
            Base
          </li>
          <li className="c-sidebar-nav c-sidebar-nav-item">
            <i
              className="fa fa-location-arrow c-sidebar-nav-icon"
              aria-hidden="true"
            ></i>
            Buttons
          </li>
          <li className="c-sidebar-nav c-sidebar-nav-item">
            <i
              className="fa fa-pie-chart c-sidebar-nav-icon"
              aria-hidden="true"
            ></i>
            Charts
          </li>
          <li className="c-sidebar-nav c-sidebar-nav-item">
            <i
              className="fa fa-star-o c-sidebar-nav-icon"
              aria-hidden="true"
            ></i>
            Icons
          </li>
          <li className="c-sidebar-nav c-sidebar-nav-item">
            <i
              className="fa fa-bell-o c-sidebar-nav-icon"
              aria-hidden="true"
            ></i>
            Notifications
          </li>
          <li className="c-sidebar-nav c-sidebar-nav-item">
            <i
              className="fa fa-wpforms c-sidebar-nav-icon"
              aria-hidden="true"
            ></i>
            Widgets
            <mark>NEW</mark>
          </li>
          <li className="c-sidebar-nav c-siderbar-item-category">EXTRAS</li>
          <li className="c-sidebar-nav c-siderbar-nav-item">
            <i
              className="fa fa-star-o c-sidebar-nav-icon"
              aria-hidden="true"
            ></i>
            Page
          </li>
          <li className="c-sidebar-nav c-siderbar-nav-item">
            <i
              className="fa fa-cloud-download c-sidebar-nav-icon"
              aria-hidden="true"
            ></i>
            Download CoreUI
          </li>
          <li className="c-sidebar-nav c-siderbar-nav-item">
            <i className="fa fa-book c-sidebar-nav-icon" aria-hidden="true"></i>
            TryCoreUIPRO
          </li>
        </ul>
        <div className="c-siderbar-button"></div>
      </div>
      <div className="col-5-of-6">
        <header>
          <div className="row row-c-header-bars" style={{ marginBottom: 0 }}>
            <button className="c-header-bars">
              <i className="fa fa-bars" aria-hidden="true"></i>
            </button>
            <ul className="c-header-nav c-header-nav-left">
              <a className="c-header-nav-link">Dashboard</a>
              <a className="c-header-nav-link">Users</a>
              <a className="c-header-nav-link">Settings</a>
            </ul>
            <ul className="c-header-nav c-header-nav-right">
              <li className="c-header-nav-item">
                <i className="fa fa-moon-o" aria-hidden="true"></i>
              </li>
              <li className="c-header-nav-item">
                <i className="fa fa-bell-o" aria-hidden="true"></i>
              </li>
              <li className="c-header-nav-item">
                <i className="fa fa-list" aria-hidden="true"></i>
              </li>
              <li className="c-header-nav-item">
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
              </li>
              <li className="c-header-nav-item">
                <img
                  src="./src/img/photo1.jpg"
                  className="c-header-nav-item-img"
                  alt="photo1"
                />
              </li>
              <li className="c-header-nav-item">
                <i className="fa fa-th" aria-hidden="true"></i>
              </li>
            </ul>
          </div>
          <hr style={{ color: "#64676d" }} />
          <div className="row row-c-header-bars" style={{ marginBottom: 0 }}>
            <ol className="c-header-item-left">Home / Dashboard </ol>
            <div className="c-header-item-right">
              <a className="c-header-item-right-title">
                <i className="fa fa-commenting-o" aria-hidden="true"></i>
              </a>
              <a className="c-header-item-right-title">
                <i className="fa fa-ils" aria-hidden="true">
                  Dashboard
                </i>
              </a>
              <a className="c-header-item-right-title">
                <i className="fa fa-cog" aria-hidden="true">
                  Setting
                </i>
              </a>
            </div>
          </div>
          <hr style={{ color: "#64676d" }} />
        </header>
        <div className="c-body">
          <div className="row">
            <div className="col-1-of-4 card card-1">
              <div className="row">
                <div className="card-information">
                  <div className="card-value">9.832</div>
                  <div>Members online</div>
                </div>
                <div className="card-icon">
                  <i class="fa fa-cog" aria-hidden="true"></i>
                  <i class="fa fa-sort-desc" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div className="col-1-of-4 card card-2">
              <div className="row">
                <div className="card-information">
                  <div className="card-value">9.832</div>
                  <div>Members online</div>
                </div>
                <div className="card-icon">
                  <i class="fa fa-cog" aria-hidden="true"></i>
                  <i class="fa fa-sort-desc" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div className="col-1-of-4 card card-3">
              <div className="row">
                <div className="card-information">
                  <div className="card-value">9.832</div>
                  <div>Members online</div>
                </div>
                <div className="card-icon">
                  <i class="fa fa-cog" aria-hidden="true"></i>
                  <i class="fa fa-sort-desc" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div className="col-1-of-4 card card-4">
              <div className="row">
                <div className="card-information">
                  <div className="card-value">9.832</div>
                  <div>Members online</div>
                </div>
                <div className="card-icon">
                  <i class="fa fa-cog" aria-hidden="true"></i>
                  <i class="fa fa-sort-desc" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <BodyChart />
        </div>
      </div>
    </div>
  );
};
export default LayoutTest;
