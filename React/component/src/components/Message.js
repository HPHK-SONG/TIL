import React from "react";

const Message = props => {
  return (
    <div className="ui message">
      <div className="header">{props.header}</div>
      <p>{props.body}</p>
    </div>
  );
};

export default Message;
