import React, { useEffect, useRef, useState } from "react";
import { AddMember } from "./style";
import ConfirmButton from "../../shared/ConfirmButton";
import AddPerson from "../../assets/add-user.png";
import PlusSign from "../../assets/plus.png";
import { useAppDispatch } from "../../redux/store/store";
import { addMembersToCompany } from "../../redux/reducers/CompaniesSlice";
import DynymicalMemberCreation from "../../feautures/DynamicalMemberCreation";
import { toggleAddMemberModal, toggleSuccessfullyAction } from "../../redux/reducers/ModalSlice";
import {
 BottomBar,
 CloseButton,
 ContentContainer,
 MainContainer,
 TopBar,
 Wrapper,
} from "../../shared/ModalStyle/style";
import { IDynamicMember, IMember } from "../../types";
type Props = {
 companyId: number;
 companyName: string;
};

function AddMemberModal({ companyId, companyName }: Props) {
 const [membersArray, setMembers] = useState<IDynamicMember[]>([
  {
   id: 1,
   name: { value: "", isDirty: false },
   surname: { value: "", isDirty: false },
   position: { value: "", isDirty: false },
  },
 ]);

 const dispatch = useAppDispatch();
 const ContainerRef = useRef<HTMLDivElement>();
 const InputsRef = useRef<HTMLInputElement[]>([]);
 const addInputToRef = (el: HTMLInputElement) => {
  if (el && !InputsRef.current.includes(el)) {
   InputsRef.current.push(el);
  }
 };
 function addMember() {
  setMembers((prev) => [
   ...prev,
   {
    id: membersArray.length + 1,
    name: { value: "", isDirty: false },
    surname: { value: "", isDirty: false },
    position: { value: "", isDirty: false },
   },
  ]);
 }

 function sumbitHandler() {
  //definitely not the best validation realization, but i tried to make it without libraries like react-hook-form
  let invalideIndex = 0;
  let isValide = true;
  membersArray.forEach((member, index) => {
   if (member.name.value === "" || member.surname.value === "" || member.position.value === "") {
    invalideIndex = index;
    isValide = false;
   }
  });
  setMembers(
   membersArray.map((member) => ({
    id: member.id,
    name: {
     value: member.name.value,
     isDirty: member.name.value === "" ? true : member.name.isDirty,
    },
    surname: {
     value: member.surname.value,
     isDirty: member.surname.value === "" ? true : member.surname.isDirty,
    },
    position: {
     value: member.position.value,
     isDirty: member.position.value === "" ? true : member.position.isDirty,
    },
   }))
  );
  if (isValide) {
   const resultArray: IMember[] = [];
   membersArray.forEach((member) =>
    resultArray.push({
     id: member.id,
     name: member.name.value,
     surname: member.surname.value,
     position: member.position.value,
     isActive: false,
    })
   );
   dispatch(addMembersToCompany({ id: companyId, members: resultArray }));
   dispatch(toggleSuccessfullyAction({ id: companyId, text: "Member added" }));
   closeModal();
  } else {
   InputsRef.current[invalideIndex].scrollIntoView();
  }
 }
 function closeModal() {
  dispatch(toggleAddMemberModal(null));
 }
 useEffect(() => {
  function handler(e: KeyboardEvent) {
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
    <MainContainer ref={ContainerRef}>
     <DynymicalMemberCreation
      addInputToRef={addInputToRef}
      membersArray={membersArray}
      setMembersArray={setMembers}
     />
    </MainContainer>

    <BottomBar>
     <AddMember onClick={() => addMember()}>
      <img alt="person" src={AddPerson} />
     </AddMember>

     <span onClick={() => sumbitHandler()}>
      <ConfirmButton />
     </span>
    </BottomBar>
   </ContentContainer>
  </Wrapper>
 );
}

export default AddMemberModal;
