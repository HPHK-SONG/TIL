import React from "react";
import { Spinner as Loader } from "react-bootstrap";
import "./Spinner.css";
const Spinner = () => {
  return (
    <div className="spinner">
      <Loader animation="border" />
    </div>
  );
};

export default Spinner;
