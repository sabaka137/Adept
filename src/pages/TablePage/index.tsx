import React, { useEffect, useState } from "react";
import CompanyTable from "../../widgets/CompanyTable";
import MembersTable from "../../widgets/MembersTable";
import NavBar from "../../widgets/NavBar";
import { NAVIGATION_BAR_WIDTH } from "./constants";
import { useAppDispatch, useAppSelector } from "../../redux/store/store";
import { createPortal } from "react-dom";
import AddMemberModal from "../../widgets/AddMemberModal";
import AddCompanyModal from "../../widgets/AddCompanyModal";
import ChangeCompanyModa from "../../widgets/ChangeCompanyModal";
import { closeChoosenCompany } from "../../redux/reducers/CompaniesSlice";
import BackIcon from "../../assets/back.png";
import { BackButton, PageContainer, PageTitleContainer, Title } from "./style";
import ChangeMemberModal from "../../widgets/ChangeMemberModal";
import UserAddedSuccesfullyModal from "../../widgets/UserAddedSuccessfully";

function TablesPage() {
 const [tableType, setType] = useState<"company" | "member">("company");
 const dispatch = useAppDispatch();
 const {
  addMemberModalData,
  addCompanyModalData,
  successfullyActionModalData,
  changeCompanyModalData,
  changeMemberModalData,
 } = useAppSelector((state) => state.Modal);
 const currentCompany = useAppSelector((state) => state.Companies.currentCompany);

 useEffect(() => {
  setType(currentCompany === null ? "company" : "member");
 }, [currentCompany]);
 return (
  <div>
   <PageContainer>
    <PageTitleContainer>
     <Title>{tableType === "company" ? "Companies" : "Members"}</Title>
     <BackButton
      onClick={() => (setType("company"), dispatch(closeChoosenCompany()))}
      $visible={tableType === "member"}
     >
      <img alt="back-arrow" src={BackIcon} />
     </BackButton>
    </PageTitleContainer>

    {tableType === "company" ? <CompanyTable /> : <MembersTable />}
   </PageContainer>

   {successfullyActionModalData && (
    <UserAddedSuccesfullyModal
     title={successfullyActionModalData.text}
     companyId={successfullyActionModalData.id}
    />
   )}

   {addMemberModalData &&
    createPortal(
     <AddMemberModal
      companyId={addMemberModalData.companyId}
      companyName={addMemberModalData.companyName}
     />,
     document.body
    )}
   {addCompanyModalData && createPortal(<AddCompanyModal />, document.body)}
   {changeCompanyModalData &&
    createPortal(<ChangeCompanyModa company={changeCompanyModalData} />, document.body)}
   {changeMemberModalData &&
    createPortal(
     <ChangeMemberModal
      member={changeMemberModalData.member}
      companyId={changeMemberModalData.companyId}
      companyName={changeMemberModalData.companyName}
     />,
     document.body
    )}
  </div>
 );
}

export default TablesPage;
