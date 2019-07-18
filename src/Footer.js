import React from "react";
import { Button } from "./Button";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-image: linear-gradient(black, rgb(19, 19, 83), rgb(19, 19, 83));
  height: 120px;
  line-height: 140px;
  width: 100%;
`;

function Footer() {
  return (
    <StyledFooter>
      <a href="https://apod.nasa.gov/apod/astropix.html">
        {/* <button>NASA's APOD Page</button> */}
        <Button>NEW IMAGE</Button>
      </a>
      <a href="https://apod.nasa.gov/apod/ap_faq.html">
        {/* <button>APOD FAQ</button> */}
        <Button>APOD FAQ</Button>
      </a>
      <a href="https://apod.nasa.gov/apod/archivepix.html">
        {/* <button>APOD Archive</button> */}
        <Button>APOD Archive</Button>
      </a>
      <a href="https://apod.nasa.gov/apod/lib/aptree.html">
        {/* <button>APOD Index</button> */}
        <Button>APOD Index</Button>
      </a>
    </StyledFooter>
  );
}

export default Footer;
