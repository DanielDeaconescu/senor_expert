import { useState, useEffect } from "react";
import { useUsers } from "../features/getAllUsers/useUsers";
import { useToggleUser } from "../services/useToggleUser";

function AdminDashboard() {
  const { users: initialUsers, loading, error } = useUsers();
  const {
    toggleUser,
    loading: toggleLoading,
    error: toggleError,
  } = useToggleUser();

  const [users, setUsers] = useState(initialUsers); // Local state for users

  useEffect(() => {
    setUsers(initialUsers); // Update the local state when users data is fetched
  }, [initialUsers]);

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

  const handleToggleUser = (userId, isActive) => {
    toggleUser(userId, isActive, () => {
      // Update the local state to reflect the change immediately
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === userId ? { ...user, active: !isActive } : user
        )
      );
    });
  };

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mt-4">
      <h2>Toți utilizatorii</h2>

      {toggleError && <p className="text-danger">{toggleError}</p>}

      {/* Table view for larger screens */}
      <div className="d-none d-md-block">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Ultima autentificare</th>
              <th>Status</th>
              <th>Acțiune</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.email}</td>
                <td>{formatDate(user.last_login)}</td>
                <td>{user.active ? "Activ" : "Inactiv"}</td>
                <td>
                  <button
                    className={`btn ${
                      user.active ? "btn-danger" : "btn-success"
                    }`}
                    onClick={() => handleToggleUser(user.id, user.active)}
                    disabled={toggleLoading}
                  >
                    {toggleLoading
                      ? "Se actualizează..."
                      : user.active
                      ? "Dezactivează"
                      : "Activează"}
                  </button>
                </td>
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
                    <li className="list-group-item">
                      <strong>Status:</strong>{" "}
                      {user.active ? "Activ" : "Inactiv"}
                    </li>
                  </ul>
                  <button
                    className={`btn ${
                      user.active ? "btn-danger" : "btn-success"
                    } mt-2`}
                    onClick={() => handleToggleUser(user.id, user.active)}
                    disabled={toggleLoading}
                  >
                    {toggleLoading
                      ? "Se actualizează..."
                      : user.active
                      ? "Dezactivează"
                      : "Activează"}
                  </button>
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
