import React, { useState } from "react";
import Card from "../../ui/Card/Card";
import Button from "../../ui/Button/Button";

import { isEmpty } from "../../Helpers/js/js-helpers";

const AddStatusForm = ({ addStatusHandler }) => {
  const [enteredStatus, setenteredStatus] = useState("");

  const statusChangeHandler = (event) => {
    setenteredStatus(event.target.value);
  };

  const addStatus = (event) => {
    event.preventDefault();
    isEmpty(enteredStatus)
      ? addStatusHandler(enteredStatus)
      : alert("Invalid text");
    setenteredStatus("");
  };

  return (
    <Card>
      <form onSubmit={addStatus}>
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
            onChange={statusChangeHandler}
            value={enteredStatus}
          />
        </div>
        <div className="modal-footer">
          <div className="float-lg-end m-2">
            <Button type="submit" classes="btn-secondary">
              Add
            </Button>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default AddStatusForm;
