import React from "react";
import { ContainerGrid } from "../../components/Grid/styles";
import { LayoutLogo, ContainerImg, LogoImg, LayoutForm } from "./styles";
import Logo from "../../img/Logo.png";
import LoginForm from "../../components/Forms/Login/Index";

const Login: React.FunctionComponent = () => {
  return (
    <ContainerGrid>
      <LayoutLogo>
        <ContainerImg>
          <LogoImg src={Logo} alt="Logotipo One Blue" />
        </ContainerImg>
      </LayoutLogo>
      <LayoutForm>
        <LoginForm />
      </LayoutForm>
    </ContainerGrid>
  );
};

export default Login;
