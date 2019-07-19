import React from "react";
import styled from "styled-components";
// import { Button, Icon } from "semantic-ui-react";

// function ButtonAnimated() {
//   return (
//     <Button animated>
//       <Button.Content visible>New Image</Button.Content>
//       <Button.Content hidden>
//         <Icon name="arrow right" />
//       </Button.Content>
//     </Button>
//   );
// }

// export default ButtonAnimated;

export const Button = styled.button`
  margin: 20px 20px 20px 20px;
  background: rgb(61, 61, 61);
  color: white;
  border: none;
  border-radius: 5px;
  width: 200px;
  height: 40px;
  box-shadow: 0px 2px 2px rgb(197, 197, 197);
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    border: 1px solid white;
  }
`;
