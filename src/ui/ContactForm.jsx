import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Logo from "./Logo";
import toast from "react-hot-toast";

const ContactFormContainer = styled.div`
  overflow: hidden;
`;

const StyledContactForm = styled.form`
  padding: 0.25rem;
  text-align: left;
  @media (max-width: 576px) {
    & div {
      margin-bottom: 0.5rem !important;
    }
  }

  @media (min-width: 576px) and (max-width: 768px) {
    & div {
      margin-bottom: 0.5rem !important;
    }
  }

  @media (min-width: 768px) and (max-width: 992px) {
    & div {
      margin-bottom: 0.5rem !important;
    }
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    & div {
      margin-bottom: 0.5rem !important;
    }
  }
`;

const TurnstileContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TurnstileTest = styled.div``;

function ContactForm() {
  const navigate = useNavigate();
  const [turnstileToken, setTurnstileToken] = useState("");
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (window.turnstile) {
      window.turnstile.render(".cf-turnstile", {
        sitekey: "0x4AAAAAAA8RURF0seaJgE_b",
        callback: (token) => {
          setTurnstileToken(token);
          setValue("turnstile", token);
          clearErrors("turnstile");
        },
      });
    }
  }, [setValue, clearErrors]);

  const onSubmit = async (formData) => {
    if (!turnstileToken) {
      setError("turnstile", {
        type: "manual",
        message: "Completați verificarea Turnstile!",
      });
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
      // toast.error("Eroare la trimiterea mesajului.");
    }
  };

  return (
    <ContactFormContainer>
      <Logo />
      <h4 className="text-center mb-3 mt-3">Formular de Contact</h4>
      <StyledContactForm onSubmit={handleSubmit(onSubmit)} className="py-2">
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
        {/* Hidden input for Captcha validation */}
        <input
          type="hidden"
          {...register("turnstile", {
            required: "Vă rugăm să finalizați verificarea Turnstile.",
          })}
        />
        {/* Turnstile Widget */}
        <TurnstileContainer className="text-center">
          <TurnstileTest
            className="cf-turnstile"
            data-sitekey="0x4AAAAAAA8RURF0seaJgE_b"
          ></TurnstileTest>
          {errors.turnstile && (
            <p className="contact-form-error-message">
              {errors.turnstile.message}
            </p>
          )}
          <button className="btn btn-primary">Trimite</button>
        </TurnstileContainer>
      </StyledContactForm>
    </ContactFormContainer>
  );
}

export default ContactForm;
