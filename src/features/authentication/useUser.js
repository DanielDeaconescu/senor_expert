import { useQuery } from "react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useUser() {
  const {
    isLoading,
    data: user,
    refetch,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    enabled: false,
  });

  return {
    isLoading,
    user,
    isAuthenticated: user?.role === "authenticated",
    refetch,
  };
}
