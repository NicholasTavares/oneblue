import React from "react";
import { ContainerGrid } from "../../components/Grid/styles";
import { LayoutLogo, ContainerImg, LogoImg, LayoutForm } from "./styles";
import Logo from "../../img/Logo.png";
import LoginForm from "../../components/Forms/Login/Index";
import { useNavigate } from "react-router-dom";

const Login: React.FunctionComponent = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    if (localStorage.getItem("@user")) {
      navigate("/home");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
