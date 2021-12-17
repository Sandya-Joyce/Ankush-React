import AddStatus from "../../Status/AddStatus/AddStatus";
import { useState } from "react";
import classes from "./Dashboard.module.css";

const Dashboard = () => {
  const [addStatusVisibility, setaddStatusVisibility] = useState(false);

  const toggleAddStatus = () => {
    setaddStatusVisibility((prevState) => {
      return !prevState;
    });
  };

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
            onClick={toggleAddStatus}
          />
        </div>
      </div>
      <section></section>
      <div>{addStatusVisibility && <AddStatus />}</div>
    </div>
  );
};

export default Dashboard;
