import React from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Home from "../pages/Home/Index";
import Login from "../pages/Login/Index";
import Register from "../pages/Register/Index";

const ProtectedRoutes: React.FunctionComponent = () => {
  return false ? <Outlet /> : <Navigate to="/" />;
};

const SystemRoutes: React.FunctionComponent = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default SystemRoutes;
