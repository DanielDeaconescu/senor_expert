import { useMutation, useQueryClient } from "react-query";
import { deleteAllDocuments as deleteAllDocumentsApi } from "../../services/apiDocuments";
import toast from "react-hot-toast";

export function useDeleteAllDocuments() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteAllDocumentsFunction } =
    useMutation({
      mutationFn: deleteAllDocumentsApi,
      onSuccess: () => {
        toast.success("Documentele au fost șterse cu succes!");
        queryClient.invalidateQueries({
          queryKey: ["documents"],
        });
      },
      onError: (err) => toast.error(err.message),
    });

  return { isDeleting, deleteAllDocumentsFunction };
}
