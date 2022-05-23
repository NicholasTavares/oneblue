import { Field, Form } from "formik";
import { Link } from "react-router-dom";
import styled, {css, keyframes} from "styled-components";

interface IButtonProps {
  isValid: boolean
}

const msgAlert = keyframes`
  from {
    color: #333;
  }

  to {
    color: #FF0D0D;
  }
`;

export const ContainerForm = styled(Form)`
  display: flex;
  flex-direction: column;
`

export const FieldFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5em;
`  

export const FieldForm = styled(Field)`
  width: 20em;
  height: 2.5em;
  outline: none;
  border-radius: 1em;
  border: 1px solid #ececec;
  padding: 0.4em 0.5rem;
  box-shadow: 2px 2px 10px 4px rgba(0, 0, 0, 0.06);
  transition: 500ms;
  margin-bottom: 0.3em;

  &:focus {
    border: 1px solid #0583F2;
  }
`

export const MessageErrorForm = styled.div`
  padding-left: 0.4em;
  font-size: 0.8em;
  animation: ${msgAlert} 1.5s linear infinite alternate-reverse;
`

export const ContainerButtonForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ButtonForm = styled.button<IButtonProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 10em;
  height: 2.5em;
  outline: none;
  border-radius: 1em;
  border: 1px solid #ececec;
  padding: 0.4em 0.8rem;
  transition: 500ms;
  color: white;
  text-transform: uppercase;

  ${(props) => props.isValid ? css`
  cursor: pointer;
  border-color: #8CC911;
  box-shadow: inset 10em 0 0 #8CC911;
  ` :
  css`
  border: 1px solid #41d9d956;
  background-color: #41d9d956;
  `}
`

export const RegisterButtonLink = styled(Link)`
  text-decoration: none;
  color: #0583F2;
  font-size: 0.9em;
`

export const Year = styled.div`
  margin-top: 4em;
  text-align: left;
  font-size: 0.75em;
`