import React from "react";

export default function Savebutton(props) {
  return (
    <span className="save-btn" {...props} role="button" tabIndex="0">
      {this.props.children}
    </span>
  );
}
