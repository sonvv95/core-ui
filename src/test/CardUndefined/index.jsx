import React from "react";
import "./CardUndefined.css";
CardUndefined.propTypes = {};

function CardUndefined(props) {
  return (
    <div className="row" style={{ marginTop: "25px" }}>
      <div className="card-undefined card-undefined-1">
        <div className="card-header card-header-1">
          <i class="fa fa-facebook card-header-icon" aria-hidden="true"></i>
        </div>
        <div className="card-undefined-information">
          <div className="row">
            <div className="card-undefined-information-under card-undefined-information-under-1">
              <strong>89K</strong>
              <div className="card-undefined-information-under-text">
                FRIEND
              </div>
            </div>
            <hr style={{ height: "55px", width: "2px", float: "left" }} />
            <div className="card-undefined-information-under card-undefined-information-under-2">
              <strong>459</strong>
              <div className="card-undefined-information-under-text">FEEDS</div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-undefined card-undefined-2">
        <div className="card-header card-header-2">
          <i class="fa fa-twitter card-header-icon" aria-hidden="true"></i>
        </div>
        <div className="card-undefined-information">
          <div className="row">
            <div className="card-undefined-information-under card-undefined-information-under-1">
              <strong>973K</strong>
              <div className="card-undefined-information-under-text">
                FOLLOWERS
              </div>
            </div>
            <hr style={{ height: "55px", width: "2px", float: "left" }} />
            <div className="card-undefined-information-under card-undefined-information-under-2">
              <strong>1.792</strong>
              <div className="card-undefined-information-under-text">
                TWEETS
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-undefined card-undefined-3">
        <div className="card-header card-header-3">
          <i class="fa fa-info card-header-icon" aria-hidden="true"></i>
        </div>
        <div className="card-undefined-information">
          <div className="row">
            <div className="card-undefined-information-under card-undefined-information-under-1">
              <strong>500+</strong>
              <div className="card-undefined-information-under-text">
                CONTRACTS
              </div>
            </div>
            <hr style={{ height: "55px", width: "2px", float: "left" }} />
            <div className="card-undefined-information-under card-undefined-information-under-2">
              <strong>292</strong>
              <div className="card-undefined-information-under-text">FEEDS</div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-undefined card-undefined-4">
        <div className="card-header card-header-4">
          <i class="fa fa-calendar card-header-icon" aria-hidden="true"></i>
        </div>
        <div className="card-undefined-information">
          <div className="row">
            <div className="card-undefined-information-under card-undefined-information-under-1">
              <strong>12</strong>
              <div className="card-undefined-information-under-text">
                EVENTS
              </div>
            </div>
            <hr style={{ height: "55px", width: "2px", float: "left" }} />
            <div className="card-undefined-information-under card-undefined-information-under-2">
              <strong>4</strong>
              <div className="card-undefined-information-under-text">
                MEETINGS
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardUndefined;
