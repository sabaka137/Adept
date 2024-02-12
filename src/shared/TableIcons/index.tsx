import React from "react";
import { Wrapper } from "./style";

type Props = {
 imageSrc: string;
};
//I find it better to use font icons to highlight the image on hover, but for now pictures
function TableIcon({ imageSrc }: Props) {
 return (
  <>
   <Wrapper>
    <img alt="ainw" src={imageSrc} />
   </Wrapper>
  </>
 );
}

export default TableIcon;
