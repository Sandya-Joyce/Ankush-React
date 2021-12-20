import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { actionCreators } from "../../../store";

import Button from "../../ui/Button/Button";
import { isEmpty } from "../../Helpers/js/js-helpers";

const AddStatusForm = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { addStatus } = bindActionCreators(actionCreators, dispatch);

  const [enteredStatus, setenteredStatus] = useState("");

  const statusChangeHandler = (event) => {
    setenteredStatus(event.target.value);
  };

  const addStatusHandler = (event) => {
    event.preventDefault();
    if (isEmpty(enteredStatus)) {
      addStatus(enteredStatus);
      return navigate("/dashboard/browse");
    } else {
      alert("Invalid text");
    }
    setenteredStatus("");
  };

  return (
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
  );
};

export default AddStatusForm;
