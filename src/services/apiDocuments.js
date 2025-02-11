import supabase from "./supabase";
import { PAGE_SIZE } from "../../utils/constants";

export async function getDocuments({ page, sort }) {
  let query = supabase.from("documents").select("*", { count: "exact" });

  if (sort) {
    query = query.order("created_at", { ascending: sort === "asc" });
  }

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Documentele nu au putut fi incarcate!");
  }

  return { data, count };
}

export async function deleteDocument(id) {
  const { data, error } = await supabase
    .from("documents")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Eroare la ștergerea documentului!");
  }

  console.log(data, error);

  return data;
}

export async function deleteAllDocuments() {
  const { data, error } = await supabase
    .from("documents")
    .delete()
    .neq("id", 0);

  if (error) {
    console.error(error);
    throw new Error("Eroare la ștergerea în masă!");
  }

  console.log(data, error);

  return data;
}

export async function uploadFileToStorage(file) {
  // Generate a unique name for the file
  const fileName = `${Math.random()}-${file.name}`.replaceAll("/", "");

  // Upload the file to the Supabase storage bucket
  const { data, error } = await supabase.storage
    .from("accounting_docs")
    .upload(fileName, file);

  if (error) {
    console.error(error);
    throw new Error("Failed to upload file to storage!");
  }

  // Return the public URL of the uploaded file
  const { data: publicUrlData } = supabase.storage
    .from("accounting_docs")
    .getPublicUrl(fileName);

  return publicUrlData.publicUrl;
}

export async function createDocumentInput(newDocInput, fileUrls) {
  const { data, error } = await supabase
    .from("documents")
    .insert([{ ...newDocInput, documents: fileUrls }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Failed to create document input!");
  }

  return data;
}
