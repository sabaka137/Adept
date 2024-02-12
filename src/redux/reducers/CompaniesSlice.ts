import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { COMPANIES } from "../../constants/data";
import { ICompany, IMember } from "../../types";

type CompaniesState = {
 companies: ICompany[];
 currentCompany: ICompany | null;
 previousActiveStatus: boolean;
 previousMemberStatus: boolean;
};
const initialState: CompaniesState = {
 companies: COMPANIES,
 currentCompany: null,
 previousActiveStatus: true,
 previousMemberStatus: true,
};

// Maybe it will be better if I moved "Member" reducers to another Member Slice but i'm not sure, appreciate if u answer to this question
const CompaniesSlice = createSlice({
 name: "companies",
 initialState,
 reducers: {
  removeSingleCompany(state, action: PayloadAction<number>) {
   state.companies = state.companies.filter((company) => company.id !== action.payload);
  },
  removeActiveCompanies(state) {
   state.companies = state.companies.filter((company) => !company.isActive);
  },
  toggleCompany(state, action: PayloadAction<number>) {
   state.companies = state.companies.map((company) => ({
    ...company,
    isActive: company.id === action.payload ? !company.isActive : company.isActive,
   }));
  },
  showChoosenCompany(state, action: PayloadAction<number>) {
   state.currentCompany = state.companies.filter((company) => company.id === action.payload)[0];
  },
  closeChoosenCompany(state) {
   state.currentCompany = null;
  },
  addMembersToCompany(state, action: PayloadAction<{ id: number; members: IMember[] }>) {
   state.companies = state.companies.map((company) =>
    company.id === action.payload.id
     ? { ...company, members: [...company.members, ...action.payload.members] }
     : { ...company }
   );
   if (state.currentCompany !== null) {
    state.currentCompany = state.companies.filter((company) => company.id === action.payload.id)[0];
   }
  },
  setAllCompaniesActive(state) {
   state.companies = state.companies.map((company) => ({
    ...company,
    isActive: state.previousActiveStatus,
   }));
   // I create this helper variable, cuz if user choose 1 company and then he choose all companies, it toggles and company that user choose before will incorrect
   state.previousActiveStatus = !state.previousActiveStatus;
  },
  addCompany(state, action: PayloadAction<ICompany>) {
   state.companies.push(action.payload);
  },
  changeCompanyInfo(state, action: PayloadAction<{ id: number; name: string; address: string }>) {
   state.companies = state.companies.map((company) =>
    company.id === action.payload.id
     ? {
        ...company,
        name: action.payload.name,
        address: action.payload.address,
        members: company.members,
       }
     : { ...company }
   );
  },

  removeSingleMember(state, action: PayloadAction<{ memberId: number; companyId: number }>) {
   console.log(action.payload);
   state.companies = state.companies.map((company) =>
    company.id === action.payload.companyId
     ? {
        ...company,
        members: company.members.filter((member) => member.id !== action.payload.memberId),
       }
     : { ...company }
   );
   state.currentCompany = state.companies.filter(
    (company) => company.id === action.payload.companyId
   )[0];
  },
  changeSignleMember(
   state,
   action: PayloadAction<{ memberId: number; companyId: number; updatedMember: IMember }>
  ) {
   state.companies = state.companies.map((company) =>
    company.id === action.payload.companyId
     ? {
        ...company,
        members: company.members.map((member) =>
         member.id === action.payload.memberId ? { ...action.payload.updatedMember } : { ...member }
        ),
       }
     : { ...company }
   );
   state.currentCompany = state.companies.filter(
    (company) => company.id === action.payload.companyId
   )[0];
  },

  toggleMember(state, action: PayloadAction<{ memberId: number; companyId: number }>) {
   state.companies = state.companies.map((company) =>
    company.id === action.payload.companyId
     ? {
        ...company,
        members: company.members.map((member) =>
         member.id === action.payload.memberId
          ? { ...member, isActive: !member.isActive }
          : { ...member }
        ),
       }
     : { ...company }
   );
   state.currentCompany = state.companies.filter(
    (company) => company.id === action.payload.companyId
   )[0];
  },
  setAllMembersActive(state, action: PayloadAction<{ companyId: number }>) {
   state.companies = state.companies.map((company) =>
    company.id === action.payload.companyId
     ? {
        ...company,
        members: company.members.map((member) => ({
         ...member,
         isActive: state.previousMemberStatus,
        })),
       }
     : { ...company }
   );
   state.previousMemberStatus = !state.previousMemberStatus;
   state.currentCompany = state.companies.filter(
    (company) => company.id === action.payload.companyId
   )[0];
  },
  removeFewMembers(state, action: PayloadAction<{ companyId: number }>) {
   state.companies = state.companies.map((company) =>
    company.id === action.payload.companyId
     ? { ...company, members: company.members.filter((member) => !member.isActive) }
     : { ...company }
   );
   state.currentCompany = state.companies.filter(
    (company) => company.id === action.payload.companyId
   )[0];
  },
 },
 extraReducers: (builder) => {},
});

export const {
 setAllCompaniesActive,
 removeActiveCompanies,
 removeSingleCompany,
 addCompany,
 setAllMembersActive,
 changeSignleMember,
 toggleMember,
 removeFewMembers,
 changeCompanyInfo,
 addMembersToCompany,
 removeSingleMember,
 toggleCompany,
 closeChoosenCompany,
 showChoosenCompany,
} = CompaniesSlice.actions;

export default CompaniesSlice.reducer;
