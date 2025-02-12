import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import styled from "styled-components";

const ContactFormContainer = styled.div`
  width: 320px;
`;

function ContactForm() {
  const navigate = useNavigate();
  const [turnstileToken, setTurnstileToken] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (window.turnstile) {
      window.turnstile.render(".cf-turnstile", {
        sitekey: "0x4AAAAAAA8RURF0seaJgE_b",
        callback: setTurnstileToken,
      });
    }
  }, []);

  const onSubmit = async (formData) => {
    if (!turnstileToken) {
      alert("Vă rugăm să finalizați verificarea Turnstile.");
      return;
    }

    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, turnstileToken }),
    });

    const result = await response.json();
    if (result.success) {
      sessionStorage.setItem("contactFormSubmitted", "true");
      navigate("/thank-you");
    } else {
      alert("Eroare la trimiterea mesajului.");
    }
  };

  return (
    <ContactFormContainer>
      <form onSubmit={handleSubmit(onSubmit)} className="py-2">
        {/* Name Field */}
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            Nume
          </label>
          <input
            className="form-control"
            {...register("fullName", {
              required: 'Câmpul "Nume" este obligatoriu!',
            })}
          />
          {errors.fullName && (
            <p className="contact-form-error-message">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            {...register("email", {
              required: 'Câmpul "Email" este obligatoriu!',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Adresă de Email invalidă!",
              },
            })}
          />
          {errors.email && (
            <p className="contact-form-error-message">{errors.email.message}</p>
          )}
        </div>

        {/* Phone Field */}
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Număr de telefon
          </label>
          <input
            type="tel"
            className="form-control"
            {...register("phone", {
              required: 'Câmpul "Număr de telefon" este obligatoriu!',
            })}
          />
          {errors.phone && (
            <p className="contact-form-error-message">{errors.phone.message}</p>
          )}
        </div>

        {/* Company Field */}
        <div className="mb-3">
          <label htmlFor="company" className="form-label">
            Numele societății
          </label>
          <input
            type="text"
            className="form-control"
            {...register("company", {
              required: 'Câmpul "Numele societății" este obligatoriu!',
            })}
          />
          {errors.company && (
            <p className="contact-form-error-message">
              {errors.company.message}
            </p>
          )}
        </div>

        {/* Service Field */}
        <div className="mb-3">
          <label htmlFor="service" className="form-label">
            Alegeți serviciul
          </label>
          <select
            className="form-select"
            {...register("service", {
              required: "Vă rugăm alegeți un serviciu!",
            })}
          >
            <option value="">Tipul serviciului dorit</option>
            <option value="contabilitate-financiara">
              Contabilitate financiară
            </option>
            <option value="contabilitate-de-gestiune">
              Contabilitate de gestiune
            </option>
            <option value="salarizare">Salarizare și resurse umane</option>
            <option value="consultanta-fiscala">Consultanță fiscală</option>
            <option value="alt-serviciu">Alt serviciu</option>
          </select>
          {errors.service && (
            <p className="contact-form-error-message">
              {errors.service.message}
            </p>
          )}
        </div>

        {/* Message Field */}
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Detalii solicitare (opțional)
          </label>
          <textarea
            className="form-control"
            {...register("message")}
            rows="4"
            placeholder="Mesajul dumneavoastră..."
          ></textarea>
        </div>

        {/* Turnstile Widget */}
        <div className="text-center">
          <div
            className="cf-turnstile"
            data-sitekey="0x4AAAAAAA8RURF0seaJgE_b"
          ></div>
          <button className="btn btn-primary">Trimite</button>
        </div>
      </form>
    </ContactFormContainer>
  );
}

export default ContactForm;
