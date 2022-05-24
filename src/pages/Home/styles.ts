import styled, {keyframes} from "styled-components";

const animatedWall = keyframes`
  from { background: #0583F2; }
  to { background: #022E54; }
`

export const HomeContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: #0583F2;
  animation: ${animatedWall} 6s linear infinite alternate-reverse;
`

export const WelcomeTitle = styled.h1`
  color: grey;
  padding: 1em;
  background-color: white;
  border-radius: 1em;
  margin-bottom: 0.5em;
`

export const LogoImg = styled.img`
  width: 32em;
`

export const LogOutButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 10em;
  padding: 0.4em 1em;
  background-color: white;
  border-radius: 1em;
  margin-top: 4em;
  font-size: 2em;
`