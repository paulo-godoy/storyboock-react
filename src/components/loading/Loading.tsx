import React from "react";
import "./Loading.scss";

export const Loading: React.FC = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-spinner"></div>
    </div>
  );
};
