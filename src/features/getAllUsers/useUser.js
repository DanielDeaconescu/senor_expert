import { useEffect, useState } from "react";
import { getUsers } from "../../services/apiUser";

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const data = await getUsers();
      if (data) {
        setUsers(data);
      } else {
        setError("Failed to fetch users");
      }

      setLoading(false);
    };
    console.log("fetching users...");
    fetchUsers();
  }, []);

  return { users, loading, error };
};
