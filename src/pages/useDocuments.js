import { useQuery } from "react-query";
import { getDocuments } from "../services/apiDocuments";

function useDocuments() {
  const {
    isLoading,
    data: documents,
    error,
  } = useQuery({
    queryKey: ["documents"],
    queryFn: getDocuments,
  });

  return { isLoading, error, documents };
}

export default useDocuments;
