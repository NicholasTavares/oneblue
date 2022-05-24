import React from "react";
import { ContainerGrid } from "../../components/Grid/styles";
import { LayoutLogo, ContainerImg, LogoImg, LayoutForm } from "./styles";
import Logo from "../../img/Logo.png";
import RegisterForm from "../../components/Forms/Register/Index";
import { useNavigate } from "react-router-dom";

const Register: React.FunctionComponent = () => {
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
        <RegisterForm />
      </LayoutForm>
    </ContainerGrid>
  );
};

export default Register;
