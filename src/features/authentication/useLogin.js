import { useMutation, useQueryClient } from "react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router";
import { toast } from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/upload", { replace: true });
    },
    onError: (err) => {
      toast.error("Credențialele introduse nu sunt corecte.");
    },
  });

  return { login, isLoading };
}
