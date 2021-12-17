import React, { useState } from "react";
import ReactDOM from "react-dom";

import Backdrop from "../../Helpers/Backdrop/Backdrop";
import AddStatusForm from "../AddStatusForm/AddStatusForm";

const AddStatus = ({visibility,setVisibility}) => {

  const addStatusHandler = (status) => {
    console.log({ id: uuid(), status: status });
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

/////////////
function uuid() {
  var d = new Date().getTime(); //Timestamp
  var d2 = (performance && performance.now && performance.now() * 1000) || 0; //Time in microseconds since page-load or 0 if unsupported
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = Math.random() * 16; //random number between 0 and 16
    if (d > 0) {
      //Use timestamp until depleted
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      //Use microseconds since page-load if supported
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}
/////////////
