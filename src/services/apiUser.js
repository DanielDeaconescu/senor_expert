import supabase from "./supabase";

export const getUsers = async () => {
  const { data, error } = await supabase.from("retrieved_users").select("*");

  console.log("Fetched users: ", data);
  console.log("Fetch error: ", error);

  if (error) {
    console.error("Error fetching users: ", error);
    return null;
  }

  return data;
};

export const toggleUserStatus = async (userId, isActive) => {
  const { data, error } = await supabase
    .from("retrieved_users")
    .update({ active: !isActive })
    .eq("id", userId)
    .select();

  if (error) {
    console.error("Eroare la modificarea statusului: ", error);
    return null;
  }

  return data;
};
