import supabase from "./supabase";

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
