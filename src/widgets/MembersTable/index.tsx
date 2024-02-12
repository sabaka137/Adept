import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store/store";

import TableTopBarButton from "../../shared/TableTopBarButton";

import PlusSign from "../../assets/plus.png";

import { CompanyInfoContainer, CompanyMemberCount, CompanyName, Content } from "./style";

import SearhInput from "../../shared/SearchInput";

import RemoveSignleMember from "../../feautures/RemoveSigleMember";
import ShowMemberChangeModal from "../../feautures/ShowMemberChangeModal";
import {
 ActionsContainer,
 ActionsItem,
 CompanyItem,
 SearchItem,
 TBody,
 Table,
 TableTopBarContainer,
 Td,
 Th,
 Tr,
 TrHeader,
} from "../../shared/TableStyle/style";
import ToggleActiveMember from "../../feautures/ToggleActiveMember";
import ToggleAllMembers from "../../feautures/ToggleAllMembers";
import RemoveFewMembers from "../../feautures/RemoveFewMembers";
import { toggleAddMemberModal } from "../../redux/reducers/ModalSlice";
import ScrollTopButton from "../../feautures/ScrollTopButton";
//Add company types

function MembersTable() {
 const [value, setValue] = useState("");
 const [page, setPage] = useState(1);
 const [isScrollButtonVisible, setScrollButtonVisible] = useState(false);
 const [isMobileView, setMobileView] = useState(window.innerWidth >= 801 ? false : true);
 const dispatch = useAppDispatch();
 const currentCompany = useAppSelector((state) => state.Companies.currentCompany);

 useEffect(() => {
  function scrollHandler() {
   if (document.documentElement.scrollHeight - (window.scrollY + window.innerHeight) < 100) {
    setPage((prev) => prev + 1);
   }
   if (window.scrollY < window.innerHeight * 2) {
    setScrollButtonVisible(false);
   } else {
    setScrollButtonVisible(true);
   }
  }
  document.addEventListener("scroll", scrollHandler);
  return () => {
   document.removeEventListener("scroll", scrollHandler);
  };
 }, []);
 useEffect(() => {
  function handler() {
   if (window.innerWidth <= 801) {
    setMobileView(true);
   }
   if (window.innerWidth >= 801) {
    setMobileView(false);
   }
  }
  window.addEventListener("resize", handler);
  return () => window.removeEventListener("resize", handler);
 });
 function showAddCompanyModal() {
  dispatch(
   toggleAddMemberModal({
    companyId: currentCompany?.id,
    companyName: currentCompany?.name,
   })
  );
 }
 return (
  <Content onClick={(e) => e.stopPropagation()}>
   <div>
    {isScrollButtonVisible && <ScrollTopButton />}
    <TableTopBarContainer>
     <ActionsItem>
      <RemoveFewMembers companyId={currentCompany!.id} />
      <span onClick={() => showAddCompanyModal()}>
       <TableTopBarButton buttonText="Add" iconSrc={PlusSign}></TableTopBarButton>
      </span>
     </ActionsItem>
     <CompanyItem>
      <CompanyInfoContainer>
       <CompanyName>{currentCompany?.name}</CompanyName>
       <CompanyMemberCount>Total members: {currentCompany?.members.length}</CompanyMemberCount>
      </CompanyInfoContainer>
     </CompanyItem>
     <SearchItem>
      <SearhInput setValue={setValue} />
     </SearchItem>
    </TableTopBarContainer>
    <Table>
     <thead>
      <TrHeader>
       <Th $widthPercent={5}>
        <ToggleAllMembers companyId={currentCompany!.id} />
       </Th>
       <Th $widthPercent={27}>Name</Th>
       <Th $widthPercent={27}>Surname</Th>
       <Th $widthPercent={27}>Position</Th>
       <Th $widthPercent={10}>Изменить</Th>
      </TrHeader>
     </thead>
     {currentCompany?.members
      .filter((member) => {
       return value.toLowerCase() === ""
        ? member
        : member.name.toLowerCase().includes(value.toLowerCase()) ||
           member.surname.toLowerCase().includes(value.toLowerCase()) ||
           member.position.toLowerCase().includes(value.toLowerCase());
      })
      .slice(0, 25 * page)
      .map((member) =>
       !isMobileView ? (
        <tbody key={member.id}>
         <Tr>
          <Td $widthPercent={5}>
           <ToggleActiveMember
            companyId={currentCompany.id}
            id={member.id}
            checked={member.isActive}
           />
          </Td>
          <Td $widthPercent={27}>{member.name}</Td>
          <Td $widthPercent={27}>{member.surname}</Td>
          <Td $widthPercent={27}>{member.position}</Td>
          <Td $widthPercent={10}>
           <div style={{ display: "flex", gap: "20px" }}>
            <ShowMemberChangeModal
             member={member}
             companyId={currentCompany.id}
             companyName={currentCompany.name}
            />
            <RemoveSignleMember memberId={member.id} companyId={currentCompany.id} />
           </div>
          </Td>
         </Tr>
        </tbody>
       ) : (
        <TBody>
         <Tr>
          <Th>Name</Th>
          <Td $widthPercent={27}>{member.name}</Td>
         </Tr>
         <Tr>
          <Th>Surname</Th>
          <Td $widthPercent={27}>{member.surname}</Td>
         </Tr>
         <Tr>
          <Th>Position</Th> <Td $widthPercent={27}>{member.position}</Td>
         </Tr>
         <Tr>
          <Th>Acions</Th>
          <ActionsContainer>
           <ShowMemberChangeModal
            member={member}
            companyId={currentCompany.id}
            companyName={currentCompany.name}
           />
           <RemoveSignleMember memberId={member.id} companyId={currentCompany.id} />
          </ActionsContainer>
         </Tr>
        </TBody>
       )
      )}
    </Table>
   </div>
  </Content>
 );
}

export default MembersTable;
