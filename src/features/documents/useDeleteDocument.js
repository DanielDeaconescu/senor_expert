import { useMutation, useQueryClient } from "react-query";
import { deleteDocument as deleteDocumentApi } from "../../services/apiDocuments";
import toast from "react-hot-toast";

export function useDeleteDocument() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteDocumentFunction } = useMutation(
    {
      mutationFn: deleteDocumentApi,
      onSuccess: () => {
        toast.success("Documentul a fost șters cu succes");
        queryClient.invalidateQueries({
          queryKey: ["documents"],
        });
      },
      onError: (err) => toast.error(err.message),
    }
  );

  return { isDeleting, deleteDocumentFunction };
}
