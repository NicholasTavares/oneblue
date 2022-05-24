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
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface IMyFormValues {
  name: string;
  password: string;
}

const LoginForm: React.FunctionComponent = () => {
  const initialValues: IMyFormValues = { name: "", password: "" };
  const year = new Date().getFullYear();
  const URL = "http://localhost:4000";
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, actions) => {
        await axios
          .post(`${URL}/login`, {
            name: values.name,
            password: values.password,
          })
          .then(function (response) {
            localStorage.setItem("@user", JSON.stringify(response.data));
            navigate("/home");
          })
          .catch(function (error) {
            actions.setFieldError("password", error.response.data.why);
          });
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
