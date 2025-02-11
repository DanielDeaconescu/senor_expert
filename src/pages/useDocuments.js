import { useQuery } from "react-query";
import { getDocuments } from "../services/apiDocuments";
import { useSearchParams } from "react-router";

function useDocuments() {
  const [searchParams] = useSearchParams();
  // pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // sorting
  const sort = searchParams.get("sort") || "desc";

  const {
    isLoading,
    data: { data: documents, count } = {},
    error,
  } = useQuery({
    queryKey: ["documents", page, sort],
    queryFn: () => getDocuments({ page, sort }),
  });

  return { isLoading, error, documents, count };
}

export default useDocuments;
