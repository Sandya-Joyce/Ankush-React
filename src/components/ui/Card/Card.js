import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      {props.title && <div className="card-header">
        <h2>{props.title}</h2>
      </div>}
      <div className="card-body">{props.children}</div>
    </div>
  );
};

export default Card;
