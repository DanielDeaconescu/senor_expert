import supabase from "./supabase";

export async function getPrices() {
  let { data: prices_list, error } = await supabase
    .from("prices_list")
    .select("id, service_name, service_price, category"); // No ordering here

  if (error) {
    throw new Error("Nu am putut citi prețurile din baza de date!");
  }

  return { prices_list };
}

export async function createEditPrice(newPriceData, id) {
  const { error } = await supabase
    .from("prices_list")
    .update({ service_price: newPriceData })
    .eq("id", id);

  if (error) {
    throw new Error("Nu am putut actualiza prețul în baza de date!");
  }
}
