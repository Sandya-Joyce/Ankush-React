import React from "react";
import ReactDOM from "react-dom";

import Backdrop from "../../Helpers/Backdrop/Backdrop";
import AddStatusForm from "../AddStatusForm/AddStatusForm";
import Button from "../../ui/Button/Button";

const AddStatus = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <div className="modal" style={{ display: "block" }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Add New Status</h4>
              </div>
              <div className="modal-body">
                <AddStatusForm />
              </div>
              <div className="modal-footer">
                <div className="float-lg-end m-2">
                  <Button type="submit" classes="btn-secondary">
                    Add
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default AddStatus;
