import React from "react";
import { Formik, ErrorMessage } from "formik";
import {
  ButtonForm,
  ContainerButtonForm,
  ContainerForm,
  FieldForm,
  FieldFormContainer,
  MessageErrorForm,
  LoginButtonLink,
} from "./styles";
import shemaRegister from "./shemaRegister";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface IMyFormValues {
  name: string;
  password: string;
}

const RegisterForm: React.FunctionComponent = () => {
  const initialValues: IMyFormValues = { name: "", password: "" };
  const URL = "http://localhost:4000";
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, actions) => {
        console.log(values, actions);
        await axios
          .post(`${URL}/user/cadaster`, {
            name: values.name,
            password: values.password,
          })
          .then(function (response) {
            navigate("/login");
          })
          .catch(function (error) {
            actions.setFieldError("password", error.response.data.why);
          });
      }}
      validationSchema={shemaRegister}
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
              <span>Register</span>
              <BsArrowRight />
            </ButtonForm>
            <LoginButtonLink to="/">
              <strong>Login</strong>
            </LoginButtonLink>
          </ContainerButtonForm>
        </ContainerForm>
      )}
    </Formik>
  );
};

export default RegisterForm;
