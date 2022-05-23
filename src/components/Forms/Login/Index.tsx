import React from "react";
import { Formik, ErrorMessage } from "formik";
import {
  ButtonForm,
  ContainerButtonForm,
  ContainerForm,
  FieldForm,
  FieldFormContainer,
  MessageErrorForm,
  RegisterButtonLink,
  Year,
} from "./styles";
import shemaLogin from "./shemaLogin";
import { BsArrowRight } from "react-icons/bs";

interface IMyFormValues {
  name: string;
  password: string;
}

const LoginForm: React.FunctionComponent = () => {
  const initialValues: IMyFormValues = { name: "", password: "" };
  const year = new Date().getFullYear();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        console.log({ values, actions });
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
      validationSchema={shemaLogin}
      validateOnMount
    >
      {({ isValid }) => (
        <ContainerForm>
          <FieldFormContainer>
            <FieldForm id="name" name="name" placeholder="Paulo" />
            <MessageErrorForm>
              <ErrorMessage name="name" />
            </MessageErrorForm>
          </FieldFormContainer>

          <FieldFormContainer>
            <FieldForm
              type="password"
              id="password"
              name="password"
              placeholder="Senha"
            />
            <MessageErrorForm>
              <ErrorMessage name="password" />
            </MessageErrorForm>
          </FieldFormContainer>

          <ContainerButtonForm>
            <ButtonForm type="submit" disabled={!isValid} isValid={isValid}>
              <span>LOGIN</span>
              <BsArrowRight />
            </ButtonForm>
            <RegisterButtonLink to="/register">
              <strong>Cadastre-se</strong>
            </RegisterButtonLink>
          </ContainerButtonForm>

          <Year>
            One Blue &#9400; <strong>{year}</strong>
          </Year>
        </ContainerForm>
      )}
    </Formik>
  );
};

export default LoginForm;
