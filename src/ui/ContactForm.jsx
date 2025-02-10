import { useNavigate } from "react-router";
import styled from "styled-components";

const ContactFormContainer = styled.div`
  width: 320px;
`;

function ContactForm() {
  const navigate = useNavigate();
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
    if (result.success) {
      // Store a flag in sessionStorage
      sessionStorage.setItem("contactFormSubmitted", "true");

      navigate("/thank-you");
    } else {
      alert("Eroare la trimiterea mesajului.");
    }
  };

  return (
    <ContactFormContainer>
      <form onSubmit={handleSubmit} className="py-2">
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            Nume
          </label>
          <input
            type="text"
            className="form-control"
            name="fullName"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" name="email" required />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Număr de telefon
          </label>
          <input type="tel" className="form-control" name="phone" required />
        </div>

        <div className="mb-3">
          <label htmlFor="company" className="form-label">
            Numele societății
          </label>
          <input type="text" className="form-control" name="company" required />
        </div>

        <div className="mb-3">
          <label htmlFor="service" className="form-label">
            Alegeți serviciul (orientativ)
          </label>
          <select className="form-select" name="service" required>
            <option value="">Tipul serviciului dorit</option>
            <option value="contabilitate-financiara">
              Contabilitate financiară
            </option>
            <option value="contabilitate-gestiune">
              Contabilitate de gestiune
            </option>
            <option value="salarizare">Salarizare și resurse umane</option>
            <option value="consultanta-fiscala">Consultanță fiscală</option>
            <option value="alt-serviciu">Alt serviciu</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Detalii solicitare (opțional)
          </label>
          <textarea
            className="form-control"
            name="message"
            rows="4"
            placeholder="Mesajul dumneavoastră..."
          ></textarea>
        </div>

        <div className="text-center">
          <button className="btn btn-primary">Trimite</button>
        </div>
      </form>
    </ContactFormContainer>
  );
}

export default ContactForm;
