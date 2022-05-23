import React from "react";
import { ContainerGrid } from "./styles";

interface IProps {
  children: React.ReactNode;
}

const Grid: React.FunctionComponent<IProps> = ({ children }) => {
  return <ContainerGrid>{children}</ContainerGrid>;
};

export default Grid;
