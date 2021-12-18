import React from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../store/index";

import Backdrop from "../../Helpers/Backdrop/Backdrop";
import AddStatusForm from "../AddStatusForm/AddStatusForm";

const AddStatus = ({ visibility, setVisibility }) => {
  const dispatch = useDispatch();
  const { addStatus } = bindActionCreators(actionCreators, dispatch);
  
  const addStatusHandler = (status) => {
    addStatus(status);
    setVisibility(false);
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        visibility && (
          <div className="modal" style={{ display: "block" }}>
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Add New Status</h4>
                </div>
                <div className="modal-body">
                  <AddStatusForm addStatusHandler={addStatusHandler} />
                </div>
              </div>
            </div>
          </div>
        ),
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default AddStatus;
