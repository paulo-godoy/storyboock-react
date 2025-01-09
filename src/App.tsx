import React from "react";
import { AppRoutes } from "./routes/AppRoutes";
import "./styles/global.scss";

export const App: React.FC = () => {
  return (
    <div className="app-container">
      <AppRoutes />
    </div>
  );
};
