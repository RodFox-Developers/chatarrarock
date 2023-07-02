import React from "react";
import { Link } from "react-router-dom";

const AlertsBanner = (props) => {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-6 mt-5">
        <div
          className={`alert text-center alert-${props.type}`}
          role="alert"
        >
          <p>{props.msg}</p> 
          <Link to={`/${props?.url}`}><strong><h4>{props?.url}</h4></strong></Link>
        </div>
      </div>
    </div>
  );
};

export default AlertsBanner;
