import { ActionsContainer } from "./style";
import SearhInput from "../../shared/SearchInput";

import RemoveSingleCompany from "../../feautures/RemoveSignleCompany";
import { useAppDispatch, useAppSelector } from "../../redux/store/store";
import ToggleActiveCompany from "../../feautures/ToggleActiveCompany";
import ShowCompanyMembers from "../../feautures/ShowCompanyMembers";
import React, { useEffect, useState } from "react";
import ToggleAllCompanies from "../../feautures/ToggleAllCompanies";
import TableTopBarButton from "../../shared/TableTopBarButton";
import RemoveFewCompanies from "../../feautures/RemoveFewCompanies";
import PlusSign from "../../assets/plus.png";

import { toggleAddCompanyModal } from "../../redux/reducers/ModalSlice";
import ShowChangeCompanyModal from "../../feautures/ShowChangeCompanyModal";
import ShowAddUserModal from "../../feautures/ShowAddUserModal";
import {
 ActionsItem,
 SearchItem,
 TBody,
 Table,
 TableTopBarContainer,
 Td,
 Th,
 Tr,
 TrHeader,
} from "../../shared/TableStyle/style";
import ScrollTopButton from "../../feautures/ScrollTopButton";

function CompanyTable() {
 const companies = useAppSelector((state) => state.Companies.companies);
 const [search, setSearch] = useState("");
 const [page, setPage] = useState(1);
 const [isScrollButtonVisible, setScrollButtonVisible] = useState(false);
 const [isMobileView, setMobileView] = useState(window.innerWidth >= 801 ? false : true);
 const dispatch = useAppDispatch();

 function scrollHandler() {
  if (document.documentElement.scrollHeight - (window.scrollY + window.innerHeight) < 100) {
   setPage((prev) => prev + 1);
  }
  if (window.scrollY < window.innerHeight * 1.5) {
   setScrollButtonVisible(false);
  } else {
   setScrollButtonVisible(true);
  }
 }

 useEffect(() => {
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
 }, []);
 function showAddCompanyModal() {
  dispatch(toggleAddCompanyModal());
 }

 return (
  <div>
   {isScrollButtonVisible && <ScrollTopButton />}
   <TableTopBarContainer>
    <ActionsItem>
     <RemoveFewCompanies />
     <span onClick={() => showAddCompanyModal()}>
      <TableTopBarButton buttonText="Create" iconSrc={PlusSign}></TableTopBarButton>
     </span>
    </ActionsItem>
    <SearchItem>
     <SearhInput setValue={setSearch} />
    </SearchItem>
   </TableTopBarContainer>
   <div>
    <Table>
     <TrHeader>
      <Th $widthPercent={5}>
       <ToggleAllCompanies />
      </Th>
      <Th $widthPercent={15}>Name</Th>
      <Th $widthPercent={15}>Count</Th>
      <Th $widthPercent={50}>Adress</Th>
      <Th $widthPercent={15}>Action</Th>
     </TrHeader>
     {companies
      .filter((company) => {
       return search.toLowerCase() === ""
        ? company
        : company.name.toLowerCase().includes(search.toLowerCase()) ||
           company.address.toLowerCase().includes(search.toLowerCase());
      })
      .slice(0, 25 * page)
      .map((company) =>
       !isMobileView ? (
        <tbody key={company.id}>
         <Tr $isActive={company.isActive}>
          <Td $widthPercent={5}>
           <ToggleActiveCompany id={company.id} checked={company.isActive} />
          </Td>
          <Td $widthPercent={15}>{company.name}</Td>
          <Td $widthPercent={15}>{company.members.length}</Td>
          <Td $widthPercent={50}>{company.address}</Td>
          <Td $widthPercent={15}>
           <ActionsContainer>
            <ShowCompanyMembers id={company.id} />
            <RemoveSingleCompany id={company.id} />
            <ShowChangeCompanyModal id={company.id} name={company.name} address={company.address} />
            <ShowAddUserModal name={company.name} id={company.id} />
           </ActionsContainer>
          </Td>
         </Tr>
        </tbody>
       ) : (
        <TBody key={company.id}>
         <Tr $isActive={company.isActive}>
          <Th>Name</Th>
          <Td $widthPercent={15}>{company.name}</Td>
         </Tr>
         <Tr key={company.id} $isActive={company.isActive}>
          <Th>Count</Th>
          <Td $widthPercent={15}>{company.members.length}</Td>
         </Tr>
         <Tr key={company.id} $isActive={company.isActive}>
          <Th>Address</Th>
          <Td $widthPercent={50}>{company.address}</Td>
         </Tr>
         <Tr key={company.id} $isActive={company.isActive}>
          <Th>Actions</Th>
          <ActionsContainer>
           <ShowCompanyMembers id={company.id} />
           <RemoveSingleCompany id={company.id} />
           <ShowChangeCompanyModal id={company.id} name={company.name} address={company.address} />
           <ShowAddUserModal name={company.name} id={company.id} />
          </ActionsContainer>
         </Tr>
        </TBody>
       )
      )}
    </Table>
   </div>
  </div>
 );
}

export default React.memo(CompanyTable);
