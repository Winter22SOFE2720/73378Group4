import * as React from "react";
import { Navigate } from "react-router-dom";
interface IProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FunctionComponent<IProtectedRouteProps> = ({
  children,
}) => {
  const isAuthenticated = localStorage.getItem("isLoggedIn");

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
