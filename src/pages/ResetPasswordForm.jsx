import { useState, useEffect } from "react";
import { useNavigate } from "react-router"; // If using React Router
import supabase from "../services/supabase"; // Adjust import as needed

const ResetPasswordForm = () => {
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate(); // If using React Router

  // Extract token from URL
  useEffect(() => {
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.replace("#", "?")); // Convert # to ?
    const accessToken = params.get("access_token");

    if (!accessToken) {
      setError("Invalid or missing reset token.");
    }
  }, []);

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      setSuccessMessage("Your password has been reset successfully!");
      setTimeout(() => navigate("/connect"), 3000); // Redirect to login after success
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handlePasswordReset}>
        <label>New Password</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
          disabled={loading}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Updating..." : "Update Password"}
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
    </div>
  );
};

export default ResetPasswordForm;
