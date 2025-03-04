import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { createEditPrice } from "./apiPrices";

export function useEditPrice() {
  const queryClient = useQueryClient();

  const { mutate: editPrice, isLoading: isEditing } = useMutation({
    mutationFn: ({ newPrice, id }) => createEditPrice(newPrice, id),
    onSuccess: () => {
      toast.success("Prețul a fost actualizat cu succes!");
      queryClient.invalidateQueries({ queryKey: ["prices_list"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editPrice };
}
