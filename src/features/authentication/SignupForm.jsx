// Email regex: /\S+@\S+\.\S+/

import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import { useSignup } from "./useSignup";
import { ModalContext } from "../../ui/Modal";
import { useContext } from "react";
import styled from "styled-components";

const Form = styled.form`
  max-width: 450px;
`;

const ActionContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

function SignupForm() {
  const { signup, isLoading } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const { close } = useContext(ModalContext);

  function onSubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        onSettled: () => {
          reset();
          close();
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Nume" error={errors?.fullName?.message}>
        <input
          type="text"
          id="fullName"
          disabled={isLoading}
          className="form-control"
          {...register("fullName", {
            required: "Câmpul nume este obligatoriu!",
          })}
        />
      </FormRow>

      <FormRow label="Adresă de email" error={errors?.email?.message}>
        <input
          type="email"
          id="email"
          disabled={isLoading}
          className="form-control"
          {...register("email", {
            required: "Câmpul email este obligatoriu!",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Vă rugăm introduceți o adresă de email validă!",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Parolă (minimum 8 caractere)"
        error={errors?.password?.message}
      >
        <input
          type="password"
          id="password"
          disabled={isLoading}
          className="form-control"
          {...register("password", {
            required: "Acest câmp este obligatoriu!",
            minLength: {
              value: 8,
              message: "Parola trebuie sa fie de minimum 8 caractere!",
            },
          })}
        />
      </FormRow>

      <FormRow label="Repetă parola" error={errors?.confirmPassword?.message}>
        <input
          type="password"
          id="confirmPassword"
          disabled={isLoading}
          className="form-control"
          {...register("confirmPassword", {
            required: "Acest câmp este obligatoriu!",
            validate: (value) =>
              value === getValues().password || "Parolele trebuie să coincidă!",
          })}
        />
      </FormRow>

      <ActionContainer>
        {/* type is an HTML attribute! */}
        <button
          variation="secondary"
          className="btn btn-danger"
          type="reset"
          disabled={isLoading}
        >
          Anulează
        </button>
        <button className="btn btn-success" disabled={isLoading}>
          Creează utilizator nou
        </button>
      </ActionContainer>
    </Form>
  );
}

export default SignupForm;
