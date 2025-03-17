import supabase from "../services/supabase";

// function to sign up a user

export async function signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("Login Error: ", error);
    throw new Error(error.message);
  }

  // Fetch user profile details (assuming you have a table for user profiles)
  const { data: userProfile, error: profileError } = await supabase
    .from("retrieved_users") // replace with your actual table name
    .select("active")
    .eq("email", email)
    .single(); // Ensure we only get a single user

  if (profileError) {
    console.error("Profile Error: ", profileError);
    throw new Error("A avut loc o eroare.");
  }

  // Check if the user is active
  if (!userProfile || !userProfile.active) {
    throw new Error(
      "Contul dumneavoastră este inactiv, vă rugăm contactați administratorul!"
    );
  }

  return data;
}

// function to load the user from supabase again
export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);
  return data?.user;
}

export async function getAllUsers() {
  const { data, error } = await supabase.auth.admin.listUsers();

  if (error) {
    console.error("Eroare la incarcarea utilizatorilor", error);
    return;
  }

  return data;
}

export const resetPassword = async (email) => {
  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "https://www.senorexpert.ro/reset-password",
    });
    if (error) throw error;

    return {
      success: true,
      message:
        "Un link de resetare al parolei a fost trimis pe adresa de email. Urmați pașii specificați în email.",
    };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
