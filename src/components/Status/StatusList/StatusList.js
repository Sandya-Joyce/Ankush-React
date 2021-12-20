import React from "react";
import { useSelector } from "react-redux";

const StatusList = () => {
  const statusList = useSelector((store) => store.status);
  return (
    <>
      <ul>
        {statusList.map((status) => {
          return <li key={status.uuid}>{status.status}</li>;
        })}
      </ul>
    </>
  );
};

export default StatusList;
