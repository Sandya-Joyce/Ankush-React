import React from "react";
import classes from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="m-2 p-2">
        <div className="float-start">
          <input
            className="btn btn-primary"
            type="button"
            value="Browse Status"
          />
        </div>
        <div className="float-end">
          <input
            className="btn btn-secondary"
            type="button"
            value="Add Status"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
