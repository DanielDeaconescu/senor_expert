import { useUsers } from "../features/getAllUsers/useUsers";

function AdminDashboard() {
  const { users, loading, error } = useUsers();

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(
      new Date(dateString.replace(" ", "T")).getTime() + 2 * 60 * 60 * 1000
    );
    return `${date.toLocaleDateString("ro-RO", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })}, ora ${date.toLocaleTimeString("ro-RO", {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  };

  return (
    <div className="container mt-4">
      <h2>Toți utilizatorii</h2>

      {/* Table view for larger screens */}
      <div className="d-none d-md-block">
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
                <td>{formatDate(user.last_login)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Responsive card layout for smaller screens */}
      <div className="d-block d-md-none">
        <div className="row">
          {users.map((user, index) => (
            <div key={user.id} className="col-12 mb-3">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Utilizator #{index + 1}</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <strong>Email:</strong> {user.email}
                    </li>
                    <li className="list-group-item">
                      <strong>Ultima autentificare:</strong>{" "}
                      {formatDate(user.last_login)}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
