import styled from "styled-components";

interface ButtonProps {
  children: React.ReactNode;
}

export const Button = styled.button<ButtonProps>`
  width: fit-content;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: #0b4775;
  color: white;
`;
