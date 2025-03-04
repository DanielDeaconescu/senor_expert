import { useQuery } from "react-query";
import { getPrices } from "./apiPrices";

function usePrices() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["prices_list"],
    queryFn: () => getPrices(),
  });

  return { isLoading, data, error };
}

export default usePrices;
