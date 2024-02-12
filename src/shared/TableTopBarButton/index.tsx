import React from "react";
import { IconImage, Text, Wrapper } from "./style";

type Props = {
 iconSrc: string;
 buttonText: string;
};

function TableTopBarButton({ iconSrc, buttonText }: Props) {
 return (
  <Wrapper tabIndex={1}>
   <IconImage src={iconSrc} />
   <Text>{buttonText}</Text>
  </Wrapper>
 );
}

export default TableTopBarButton;
