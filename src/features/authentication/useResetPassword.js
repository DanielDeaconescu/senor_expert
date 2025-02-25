import { resetPassword } from "../../services/apiAuth";
import { useState } from "react";

const useResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleResetPassword = async (email) => {
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    const result = await resetPassword(email);
    setLoading(false);

    if (result.success) {
      setSuccessMessage(result.message);
    } else {
      setError(result.message);
    }
  };

  return { loading, error, successMessage, handleResetPassword };
};

export default useResetPassword;
