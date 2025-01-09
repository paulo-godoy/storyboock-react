import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "../pages/Login/Login";
import { DragonList } from "../pages/DragonList/DragonList";
import { DragonDetails } from "../pages/DragonDetails/DragonDetails";
import { CreateDragon } from "../pages/CreateDragon/CreateDragon";

export const AppRoutes = () => {
  const isAuthenticated = !!localStorage.getItem("user"); // Simulação de autenticação

  return (
    <Router>
      <Routes>
        {!isAuthenticated ? (
          <Route path="*" element={<Navigate to="/login" />} />
        ) : (
          <>
            <Route path="/dragons" element={<DragonList />} />
            <Route path="/dragons/create" element={<CreateDragon />} />
            <Route path="/dragons/:id/edit" element={<CreateDragon />} />{" "}
            <Route path="/dragons/:id/delete" element={<DragonList />} />{" "}
            <Route path="/dragons/:id" element={<DragonDetails />} />
            <Route path="*" element={<Navigate to="/dragons" />} />
          </>
        )}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};
