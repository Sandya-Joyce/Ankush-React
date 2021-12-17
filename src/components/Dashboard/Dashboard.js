import AddStatus from "../Status/AddStatus/AddStatus";
import { useState } from "react";
import Button from "../ui/Button/Button";

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
          <Button classes="btn-primary" type="button" onClick={toggleAddStatus}>
            Browse Status
          </Button>
        </div>
        <div className="float-end">
          <Button
            classes="btn-secondary"
            type="button"
            onClick={toggleAddStatus}
          >
            Add Status
          </Button>
        </div>
      </div>
      <section></section>
      <div>
        {addStatusVisibility && (
          <AddStatus
            visibility={addStatusVisibility}
            setVisibility={setaddStatusVisibility}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
