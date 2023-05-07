import React from "react";

const AlertsBanner = (props) => {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <div
          className={`alert text-center alert-${props.type}`}
          role="alert"
        >
          {props.msg}
        </div>
      </div>
    </div>
  );
};

export default AlertsBanner;
