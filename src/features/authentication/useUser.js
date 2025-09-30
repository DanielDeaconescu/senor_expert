import { useQuery } from "react-query";
import { getCurrentUser } from "../../services/apiAuth";
import supabase from "../../services/supabase";

export function useUser() {
  const {
    isLoading,
    data: user,
    refetch,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    enabled: !!supabase.auth.getSession(),
  });

  return {
    isLoading,
    user,
    isAuthenticated: !!user,
    isAdmin:
      user?.email === "mona@senorexpert.ro" ||
      user?.email === "matei@senorexpert.ro",
    refetch,
  };
}
