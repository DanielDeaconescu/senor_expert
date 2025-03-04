import supabase from "./supabase";

export async function getPrices() {
  let { data: prices_list, error } = await supabase
    .from("prices_list")
    .select("*")
    .order("id", { ascending: true });
  if (error) {
    throw new Error("Nu am putut citi preturile din baza de date!");
  }

  return { prices_list };
}
