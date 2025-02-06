// Email regex: /\S+@\S+\.\S+/

import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import { useSignup } from "./useSignup";
import { ModalContext } from "../../ui/Modal";
import { useContext } from "react";
import styled from "styled-components";
import AddUserCancelButton from "../../ui/AddUserCancelButton";

const Form = styled.form`
  max-width: 450px;

  @media (max-width: 576px) {
    width: 100%;
    overflow: hidden;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    overflow-x: hidden;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    overflow-x: hidden;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    overflow-x: hidden;
  }

  @media (min-width: 1200px) and (max-width: 1400px) {
    overflow-x: hidden;
  }

  @media (min-width: 1400px) {
    overflow-x: hidden;
  }
`;

const ActionContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;

  @media (max-width: 576px) {
    flex-direction: column;
    padding-top: 1rem;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    padding-top: 0.5rem;
    flex-direction: column;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    padding-top: 0.5rem;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    padding-top: 0.5rem;
  }

  @media (min-width: 1200px) and (max-width: 1400px) {
    padding-top: 0.5rem;
  }

  @media (min-width: 1400px) {
    padding-top: 0.5rem;
  }
`;

const CreateNewUserButton = styled.button`
  white-space: nowrap;
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
        <AddUserCancelButton isLoading={isLoading} />
        <CreateNewUserButton className="btn btn-success" disabled={isLoading}>
          Creează utilizator nou
        </CreateNewUserButton>
      </ActionContainer>
    </Form>
  );
}

export default SignupForm;
