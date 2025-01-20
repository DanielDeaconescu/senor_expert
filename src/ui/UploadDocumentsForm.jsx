function UploadDocumentsForm({ onCloseModal }) {
  // don't forget to close the modal when the form is submitted
  function onSubmit(data) {}

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Numele societatii
        </label>
        <input type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Alegeti luna
        </label>
        <select name="" id="" className="form-select">
          <option value="1">Ianuarie</option>
          <option value="2">Februarie</option>
          <option value="3">Martie</option>
          <option value="4">Aprilie</option>
          <option value="5">Mai</option>
          <option value="6">Iunie</option>
          <option value="7">Iulie</option>
          <option value="8">August</option>
          <option value="9">Septembrie</option>
          <option value="10">Octombrie</option>
          <option value="11">Noiembrie</option>
          <option value="12">Decembrie</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="">Incărcați fișierele contabile</label>
        <input className="form-control" type="file" multiple />
      </div>
      <div className="mb-3 d-flex gap-3">
        <button type="submit" className="btn btn-primary">
          Trimite
        </button>
        <button
          onClick={() => onCloseModal?.()}
          type="submit"
          className="btn btn-danger"
        >
          Anulează
        </button>
      </div>
    </form>
  );
}

export default UploadDocumentsForm;
