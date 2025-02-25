import { Navigate } from "react-router";
import { useUser } from "../features/authentication/useUser";

function AdminRoute({ children }) {
  const { isLoading, isAdmin } = useUser();

  if (isLoading) return null; // Wait until authentication is confirmed
  if (!isAdmin) return <Navigate to="/" replace />; // Redirect non-admin users

  return children;
}

export default AdminRoute;
