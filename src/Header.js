import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-image: linear-gradient(rgb(19, 19, 83), rgb(19, 19, 83), black);
  height: 120px;
  width: 100%;
  color: white;
  line-height: 40px;
  border-top: 1px solid rgb(19, 19, 83);
`;

function Header() {
  return (
    <StyledHeader>
      <h1>NASA Astronomy Photo of the Day</h1>
    </StyledHeader>
  );
}

export default Header;
