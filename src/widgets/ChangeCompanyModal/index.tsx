import React, { useEffect, useState } from "react";

import { useAppDispatch } from "../../redux/store/store";
import { toggleChangeCompanyModal } from "../../redux/reducers/ModalSlice";
import { changeCompanyInfo } from "../../redux/reducers/CompaniesSlice";

import ConfirmButton from "../../shared/ConfirmButton";
import { Input } from "../../shared/DefaultInput/style";
import PlusSign from "../../assets/plus.png";
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
import { ICompany } from "../../types";
type Props = {
 company: ICompany;
};

function ChangeCompanyModal({ company }: Props) {
 const [name, setName] = useState(company.name);
 const [address, setAddress] = useState(company.address);
 const dispatch = useAppDispatch();
 function closeModal() {
  dispatch(toggleChangeCompanyModal(null));
 }
 function submitHandler() {
  if (name !== "" && address !== "") {
   dispatch(changeCompanyInfo({ id: company.id, name, address }));
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
     {company.name}
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
       <InputLabel>Adress</InputLabel>
       <Input error={address === ""} value={address} onChange={(e) => setAddress(e.target.value)} />
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

export default ChangeCompanyModal;
