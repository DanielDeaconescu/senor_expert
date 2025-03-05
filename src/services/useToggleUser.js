import { useState } from "react";
import { toggleUserStatus } from "./apiUser";

export const useToggleUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const toggleUser = async (userId, isActive, onSuccess) => {
    setLoading(true);
    setError(null);

    try {
      const updatedUser = await toggleUserStatus(userId, isActive);

      if (!updatedUser || updatedUser.length === 0) {
        throw new Error("User update failed. No data returned.");
      }

      onSuccess();
    } catch (err) {
      setError(err.message || "Failed to update user status");
    }

    setLoading(false);
  };

  return { toggleUser, loading, error };
};
