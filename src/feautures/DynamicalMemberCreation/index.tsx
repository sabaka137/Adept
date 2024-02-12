import React, { SetStateAction } from "react";
import { CloseButton, InputContainer, InputLabel, PersonItem } from "./style";
import { Input } from "../../shared/DefaultInput/style";
import DeleteIcon from "../../assets/delete.png";
import { IDynamicMember } from "../../types";
type Props = {
 membersArray: IDynamicMember[];
 setMembersArray: React.Dispatch<SetStateAction<IDynamicMember[]>>;
 addInputToRef: any;
};

function DynymicalMemberCreation({ membersArray, setMembersArray, addInputToRef }: Props) {
 function removeMember(id: number) {
  setMembersArray(membersArray.filter((member) => member.id !== id));
 }
 function setInputValue(id: number, value: string, type: "name" | "surname" | "position") {
  setMembersArray(
   membersArray.map((member) =>
    member.id === id
     ? {
        id: member.id,
        name: type === "name" ? { value, isDirty: member.name.isDirty } : { ...member.name },
        surname: type === "surname" ? { value, isDirty: member.name.isDirty } : member.surname,
        position: type === "position" ? { value, isDirty: member.name.isDirty } : member.position,
       }
     : { ...member }
   )
  );
 }
 function setDirty(id: number, type: "name" | "surname" | "position") {
  setMembersArray(
   membersArray.map((member) =>
    member.id === id
     ? {
        id: id,
        name: { value: member.name.value, isDirty: type === "name" ? true : member.name.isDirty },
        surname: {
         value: member.surname.value,
         isDirty: type === "surname" ? true : member.surname.isDirty,
        },
        position: {
         value: member.position.value,
         isDirty: type === "position" ? true : member.position.isDirty,
        },
       }
     : { ...member }
   )
  );
 }
 return (
  <>
   {membersArray.map((member, index: number) => (
    <PersonItem key={member.id} ref={addInputToRef}>
     <CloseButton isVisible={index === 0} onClick={() => removeMember(member.id)}>
      <img alt="delete" src={DeleteIcon} />
     </CloseButton>
     <InputContainer>
      <InputLabel>Name</InputLabel>
      <Input
       onBlur={() => setDirty(member.id, "name")}
       error={member.name.isDirty && member.name.value === ""}
       value={member.name.value}
       onChange={(e) => setInputValue(member.id, e.target.value, "name")}
      />
     </InputContainer>
     <InputContainer>
      <InputLabel>Surname</InputLabel>
      <Input
       onBlur={() => setDirty(member.id, "surname")}
       error={member.surname.isDirty && member.surname.value === ""}
       value={member.surname.value}
       onChange={(e) => setInputValue(member.id, e.target.value, "surname")}
      />
     </InputContainer>
     <InputContainer>
      <InputLabel>Position</InputLabel>
      <Input
       onBlur={() => setDirty(member.id, "position")}
       error={member.position.isDirty && member.position.value === ""}
       value={member.position.value}
       onChange={(e) => setInputValue(member.id, e.target.value, "position")}
      />
     </InputContainer>
    </PersonItem>
   ))}
  </>
 );
}

export default DynymicalMemberCreation;
