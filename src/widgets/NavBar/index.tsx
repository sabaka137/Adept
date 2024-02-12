import React from "react";

import User from "./assets/user.png";
import Mail from "./assets/mail.png";
import Apps from "./assets/apps.png";
import Diagram from "./assets/circular-diagram.png";
import Logo from "./assets/Logo.png";
import { Container, Linkitem, LinksContainer } from "./style";

type Props = {
 width: number;
};

function NavBar({ width }: Props) {
 return (
  <Container width={width}>
   <img alt="logotype" src={Logo} />
   <LinksContainer>
    <Linkitem>
     <img alt="app" src={Apps} />
    </Linkitem>
    <Linkitem>
     <img alt="mail" src={Mail} />
    </Linkitem>
    <Linkitem>
     <img alt="user" src={User} />
    </Linkitem>
    <Linkitem>
     <img alt="diagram" src={Diagram} />
    </Linkitem>
   </LinksContainer>
  </Container>
 );
}

export default NavBar;
