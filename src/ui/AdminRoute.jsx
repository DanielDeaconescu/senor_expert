import { Navigate } from "react-router";
import { useUser } from "../features/authentication/useUser";

function AdminRoute({ children }) {
  const { user, isLoading } = useUser();

  if (isLoading) return null;
  if (!user || user.email !== "mona@senorexpert.ro")
    return <Navigate to="/" replace />;

  return children;
}

export default AdminRoute;
