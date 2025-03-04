import { useQuery } from "react-query";
import { getPrices } from "./apiPrices";

function usePrices() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["prices_list"],
    queryFn: () => getPrices(),
  });

  // Define custom order for categories
  const customCategoryOrder = [
    "Obținere certificat de înregistrare în scopuri de TVA",
    "Servicii contabile",
    "Gestionarea salarizării: state de salarii, pontaje și declarații",
    "Servicii de certificare a bilanțului",
    "Servicii adiționale",
    "Număr total de documente pentru PFA-urile plătitoare de TVA",
    "Număr total de documente pentru PFA-urile neplătitoare de TVA",
  ];

  // Make sure data is loaded before processing
  if (isLoading || !data || !data.prices_list) {
    return { isLoading, data: {}, error }; // Return early if data is not loaded
  }

  // Process the data to group by category
  const groupedPrices = data.prices_list.reduce((acc, item) => {
    const category = item.category || "Uncategorized"; // Default to "Uncategorized" if no category
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  // Sort the categories using the custom order
  const sortedCategories = customCategoryOrder.filter(
    (category) => category in groupedPrices
  );

  // Sort services within each category by their ID (or another field if needed)
  const sortedPrices = sortedCategories.reduce((acc, category) => {
    acc[category] = groupedPrices[category].sort((a, b) => a.id - b.id); // Sorting by 'id'
    return acc;
  }, {});

  return { isLoading, data: sortedPrices, error };
}

export default usePrices;
