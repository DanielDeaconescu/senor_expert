import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import {
  createDocumentInput,
  uploadFileToStorage,
} from "../services/apiDocuments";
import toast from "react-hot-toast";

function UploadDocumentsForm({ onCloseModal }) {
  const { register, handleSubmit, reset } = useForm();
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading: isCreating } = useMutation({
    mutationFn: async ({ formData, files }) => {
      // Upload all files and get their URLs
      const uploadPromises = Array.from(files).map((file) =>
        uploadFileToStorage(file)
      );
      const fileUrls = await Promise.all(uploadPromises);

      // Save form data and file URLs in the database
      return await createDocumentInput(formData, fileUrls);
    },
    onSuccess: () => {
      toast.success("Entry created successfully!");
      queryClient.invalidateQueries({ queryKey: ["documents"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  async function onSubmit(data) {
    const files = data.documents;
    const formData = {
      company_name: data.company_name,
      month: data.month,
    };

    // Mutate with form data and files
    await mutateAsync({ formData, files: files });
    onCloseModal?.();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Numele societății
        </label>
        <input
          type="text"
          {...register("company_name")}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Alegeți luna
        </label>
        <select name="" id="" className="form-select" {...register("month")}>
          {/* Options */}
          <option value="ianuarie">Ianuarie</option>
          <option value="februarie">Februarie</option>
          <option value="martie">Martie</option>
          <option value="aprilie">Aprilie</option>
          <option value="mai">Mai</option>
          <option value="iunie">Iunie</option>
          <option value="iulie">Iulie</option>
          <option value="august">August</option>
          <option value="septembrie">Septembrie</option>
          <option value="octombrie">Octombrie</option>
          <option value="noiembrie">Noiembrie</option>
          <option value="decembrie">Decembrie</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="">Încărcați fișierele contabile</label>
        <input
          {...register("documents")}
          className="form-control"
          type="file"
          multiple
        />
      </div>
      <div className="mb-3 d-flex gap-3">
        <button disabled={isCreating} type="submit" className="btn btn-primary">
          Trimite
        </button>
        <button
          onClick={() => onCloseModal?.()}
          type="button"
          className="btn btn-danger"
        >
          Anulează
        </button>
      </div>
    </form>
  );
}

export default UploadDocumentsForm;
