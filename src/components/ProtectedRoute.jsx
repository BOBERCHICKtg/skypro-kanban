import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAllowed, redirectPath = "/sign-in", children }) => {
  return isAllowed ? (
    children || <Outlet />
  ) : (
    <Navigate to={redirectPath} replace />
  );
};

export default ProtectedRoute;
