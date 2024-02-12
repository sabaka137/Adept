import React from "react";
import { Button } from "./style";
import Arrow from "../../assets/back.png";
type Props = {};

function ScrollTopButton({}: Props) {
 function handler() {
  window.scrollTo({ top: 0, behavior: "smooth" });
 }
 return (
  <Button onClick={() => handler()}>
   <img alt="arrow" src={Arrow} />
  </Button>
 );
}

export default ScrollTopButton;
