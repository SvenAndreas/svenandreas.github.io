import React from "react";
import styled from "styled-components";

function Button({text}) {
  const StyledButton = styled.button`
    background-color:var(--primary-color);
    `;
  return (
    <StyledButton>{text}</StyledButton>
  )
}

export default Button