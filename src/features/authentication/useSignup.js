import { useMutation } from "react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      toast.success(
        "Contul a fost creat cu succes! Noul utilizator trebuie să verifice adresa de email pentru a putea folosi contul!"
      );
    },
  });

  return { signup, isLoading };
}
