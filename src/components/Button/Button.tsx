import styled from "styled-components";
import React from "react";

interface ButtonProps {
  primary?: boolean;
  children: React.ReactNode;
}

const Button = styled.button<ButtonProps>`
  background-color: ${({ primary }) => (primary ? "blue" : "gray")};
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default Button;
