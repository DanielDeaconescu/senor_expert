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
      redirectTo: "https://senor-expert.vercel.app/reset-password",
    });
    if (error) throw error;

    return {
      success: true,
      message: "Password reset email sent successfully.",
    };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
