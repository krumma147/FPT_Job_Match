import React, { Component } from "react";

const CustomToastBS = ({ message, timestamp }) => {
  return (
    <div
      key={timestamp}
      className="toast"
      role="status"
      aria-live="assertive"
      aria-atomic="true"
      data-delay="5000"
    >
      <div className="toast-header">
        <img src="..." className="rounded mr-2" alt="..." />
        <strong className="mr-auto">Bootstrap</strong>
        <small>{timestamp}</small>
        <button
          type="button"
          className="ml-2 mb-1 close"
          data-dismiss="toast"
          aria-label="Close"
        >
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="toast-body">{message}</div>
    </div>
  );
};

export default CustomToastBS;
