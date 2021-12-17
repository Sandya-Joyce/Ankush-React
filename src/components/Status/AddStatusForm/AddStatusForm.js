import React from "react";
import Card from "../../ui/Card/Card";

const AddStatusForm = () => {
  const addStatusHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card>
      <form onSubmit={addStatusHandler}>
        <div className="form-control">
          <label htmlFor="status-description" className="form-label">
            Status
          </label>
          <input
            className="form-control-plaintext"
            title="Add status here"
            placeholder="  Add daily status"
            type="text"
            name="status-description"
            id="stdesc"
          />
        </div>
        
      </form>
    </Card>
  );
};

export default AddStatusForm;
