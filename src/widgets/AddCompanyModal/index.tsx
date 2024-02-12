import React, { useEffect, useState } from "react";
import { Input } from "../../shared/DefaultInput/style";
import PlusSign from "../../assets/plus.png";
import ConfirmButton from "../../shared/ConfirmButton";
import { useAppDispatch, useAppSelector } from "../../redux/store/store";
import { addCompany } from "../../redux/reducers/CompaniesSlice";
import { toggleAddCompanyModal, toggleSuccessfullyAction } from "../../redux/reducers/ModalSlice";

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

function AddCompanyModal() {
 const [name, setName] = useState({ value: "", isDirty: false });
 const [address, setAddress] = useState({ value: "", isDirty: false });
 const totalCompanies = useAppSelector((state) => state.Companies.companies).length;
 const dispatch = useAppDispatch();

 function sumbitHandler() {
  if (name.value !== "" && address.value !== "") {
   dispatch(
    addCompany({
     id: totalCompanies + 1,
     name: name.value,
     isActive: false,
     address: address.value,
     members: [],
    })
   );
   dispatch(toggleSuccessfullyAction({ id: totalCompanies + 1, text: "Company added" }));
   closeModal();
  } else {
   setName({ value: name.value, isDirty: name.value === "" ? true : false });
   setAddress({ value: address.value, isDirty: address.value === "" ? true : false });
  }
 }
 function closeModal() {
  dispatch(toggleAddCompanyModal());
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
     Create company
     <CloseButton onClick={() => closeModal()}>
      <img alt="plus" src={PlusSign} />
     </CloseButton>
    </TopBar>

    <MainContainer>
     <PersonItem>
      <InputContainer>
       <InputLabel>Name</InputLabel>
       <Input
        onBlur={() => setName({ value: name.value, isDirty: true })}
        error={name.isDirty && name.value === ""}
        value={name.value}
        onChange={(e) => setName({ value: e.target.value, isDirty: name.isDirty })}
       />
      </InputContainer>
      <InputContainer>
       <InputLabel>Adress</InputLabel>
       <Input
        onBlur={() => setAddress({ value: address.value, isDirty: true })}
        error={address.isDirty && address.value === ""}
        value={address.value}
        onChange={(e) => setAddress({ value: e.target.value, isDirty: address.isDirty })}
       />
      </InputContainer>
     </PersonItem>
    </MainContainer>
    <BottomBar singleElement>
     <span onClick={() => sumbitHandler()}>
      <ConfirmButton />
     </span>
    </BottomBar>
   </ContentContainer>
  </Wrapper>
 );
}

export default AddCompanyModal;
