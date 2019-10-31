import React from "react";
import { Spinner } from "reactstrap";
import Proptypes from "prop-types";

const LoadingComponent = ({ message }) => (
  <div className="spinner-loading">
    <Spinner color="yellow" style={{ height: "4rem", width: "4rem" }} />
    <Spinner
      color="secondary"
      type="grow"
      style={{ height: "4rem", width: "4rem" }}
    />
    {message && <h4 className="text-yellow">{message}</h4>}
  </div>
);

LoadingComponent.propTypes = {
  message: Proptypes.string
};

export default LoadingComponent;
