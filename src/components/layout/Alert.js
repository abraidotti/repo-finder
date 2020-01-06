import React from "react";

export const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`${alert.type}`}>
        <i className="fas fa-info-circle" />
        {alert.message}
      </div>
    )
  );
};

export default Alert;
