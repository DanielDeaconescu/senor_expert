import { useUsers } from "../features/getAllUsers/useUser";

function AdminDashboard() {
  const { users, loading, error } = useUsers();
  console.log(users);
  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Toți utilizatorii</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDashboard;
