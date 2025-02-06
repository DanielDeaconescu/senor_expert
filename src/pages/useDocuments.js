import { useQuery } from "react-query";
import { getDocuments } from "../services/apiDocuments";
import { useSearchParams } from "react-router";

function useDocuments() {
  const [searchParams] = useSearchParams();
  // pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    data: { data: documents, count } = {},
    error,
  } = useQuery({
    queryKey: ["documents", page],
    queryFn: () => getDocuments({ page }),
  });

  return { isLoading, error, documents, count };
}

export default useDocuments;
