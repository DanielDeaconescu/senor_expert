import { Navigate } from "react-router";
import { useUser } from "../services/UserContext";

function AdminRoute({ children }) {
  const { user, loading } = useUser();

  if (loading) return null; // Optionally show a loading spinner
  if (!user || user.role !== "admin") return <Navigate to="/" replace />;

  return children;
}

export default AdminRoute;
