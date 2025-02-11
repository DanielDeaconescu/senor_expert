import { useUsers } from "../features/getAllUsers/useUsers";

function AdminDashboard() {
  const { users, loading, error } = useUsers();
  console.log(users);
  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mt-4">
      <h2>Toți utilizatorii</h2>

      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Ultima autentificare</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.email}</td>
                <td>
                  {user.last_login
                    ? new Date(
                        new Date(user.last_login.replace(" ", "T")).getTime() +
                          2 * 60 * 60 * 1000
                      ).toLocaleDateString("ro-RO", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      }) +
                      ", ora " +
                      new Date(
                        new Date(user.last_login.replace(" ", "T")).getTime() +
                          2 * 60 * 60 * 1000
                      ).toLocaleTimeString("ro-RO", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                    : "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDashboard;
