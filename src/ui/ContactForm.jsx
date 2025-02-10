function ContactForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      fullName: e.target.fullName.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      company: e.target.company.value,
      service: e.target.service.value,
      message: e.target.message.value,
    };

    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    alert(result.message);
  };

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nume
        </label>
        <input type="email" className="form-control name" name="name" />
      </div>
      <div className="mb-3">
        <label htmlFor="phone-number" className="form-label phone-number">
          Număr de telefon
        </label>
        <input
          type="tel"
          className="form-control phone-number"
          name="phone-number"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="company-name" className="form-label company-name">
          Numele societății
        </label>
        <input
          type="text"
          className="form-control company-name"
          name="company-name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="service-type" className="form-label service-type">
          Alegeți serviciul (orientativ)
        </label>
        <select
          id="service-type"
          className="form-select service-type"
          name="service-type"
        >
          <option selected>Tipul serviciului dorit</option>
          <option value="contabilitate-financiara">
            Contabilitate financiară
          </option>
          <option value="contabilitate-gestiune">
            Contabilitate de gestiune
          </option>
          <option value="salarizare">Salarizare și resurse umane</option>
          <option value="consultanta-fiscala">Consultanță fiscală</option>
          <option value="consultanta-fiscala">Alt serviciu</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="request-details" className="form-label">
          Detalii solicitare (opțional)
        </label>
        <textarea
          className="form-control"
          name="request-details"
          id="request-details"
          rows="4"
          placeholder="Mesajul dumneavoastră..."
        ></textarea>
      </div>
      <div className="text-center">
        <button className="btn btn-primary">Trimite</button>
      </div>
    </form>
  );
}

export default ContactForm;
