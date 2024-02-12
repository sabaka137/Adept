import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/store/store";

import { toggleChangeMemberModal } from "../../redux/reducers/ModalSlice";

import PlusSign from "../../assets/plus.png";
import { Input } from "../../shared/DefaultInput/style";
import ConfirmButton from "../../shared/ConfirmButton";
import { changeSignleMember } from "../../redux/reducers/CompaniesSlice";
import {
 BottomBar,
 CloseButton,
 ContentContainer,
 InputContainer,
 InputLabel,
 MainContainer,
 PersonItem,
 TopBar,
 Wrapper,
} from "../../shared/ModalStyle/style";

import { IMember } from "../../types";
type Props = {
 member: IMember;
 companyId: number;
 companyName: string;
};

function ChangeMemberModal({ member, companyName, companyId }: Props) {
 const [name, setName] = useState(member.name);
 const [surname, setSurname] = useState(member.surname);
 const [position, setPosition] = useState(member.position);
 const dispatch = useAppDispatch();

 function closeModal() {
  dispatch(toggleChangeMemberModal(null));
 }
 function submitHandler() {
  if (name !== "" && position !== "" && surname !== "") {
   dispatch(
    changeSignleMember({
     companyId,
     memberId: member.id,
     updatedMember: { id: member.id, name, surname, position, isActive: false },
    })
   );
   closeModal();
  }
 }
 useEffect(() => {
  function handler(e: any) {
   if (e.key === "Escape") {
    e.preventDefault();
    closeModal();
   }
  }
  window.addEventListener("keydown", handler);
  return () => window.removeEventListener("keydown", handler);
 }, []);
 return (
  <Wrapper onClick={() => closeModal()}>
   <ContentContainer onClick={(e) => e.stopPropagation()}>
    <TopBar>
     {companyName}
     <CloseButton onClick={() => closeModal()}>
      <img alt="plus" src={PlusSign} />
     </CloseButton>
    </TopBar>
    <MainContainer>
     <PersonItem>
      <InputContainer>
       <InputLabel>Name</InputLabel>

       <Input error={name === ""} value={name} onChange={(e) => setName(e.target.value)} />
      </InputContainer>
      <InputContainer>
       <InputLabel>Surname</InputLabel>
       <Input error={surname === ""} value={surname} onChange={(e) => setSurname(e.target.value)} />
      </InputContainer>
      <InputContainer>
       <InputLabel>Position</InputLabel>
       <Input
        error={position === ""}
        value={position}
        onChange={(e) => setPosition(e.target.value)}
       />
      </InputContainer>
     </PersonItem>
    </MainContainer>
    <BottomBar singleElement>
     <span onClick={() => submitHandler()}>
      <ConfirmButton />
     </span>
    </BottomBar>
   </ContentContainer>
  </Wrapper>
 );
}

export default ChangeMemberModal;
