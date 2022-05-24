import React from "react";
import { HomeContainer, LogoImg, LogOutButton, WelcomeTitle } from "./styles";
import Logo from "../../img/Logo.png";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Home: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <HomeContainer>
      <WelcomeTitle>Você está logado!</WelcomeTitle>
      <LogoImg src={Logo} alt="Logotipo One Blue" />
      <LogOutButton onClick={logOut}>
        <span>Sair</span>
        <FiLogOut />
      </LogOutButton>
    </HomeContainer>
  );
};

export default Home;
