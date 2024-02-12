import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { COMPANIES } from "../../constants/data";

type ModalState = {
 addMemberModalData: null | any;
 addCompanyModalData: boolean;
 changeCompanyModalData: null | any;
 changeMemberModalData: null | any;
 successfullyActionModalData: null | { text: string; id: number };
};
const initialState: ModalState = {
 addMemberModalData: null,
 addCompanyModalData: false,
 changeCompanyModalData: null,
 changeMemberModalData: null,
 successfullyActionModalData: null,
};

const ModalSlice = createSlice({
 name: "companies",
 initialState,
 reducers: {
  toggleAddMemberModal(state, action) {
   state.addMemberModalData = action.payload;
  },
  toggleAddCompanyModal(state) {
   state.addCompanyModalData = !state.addCompanyModalData;
  },
  toggleChangeCompanyModal(state, action) {
   state.changeCompanyModalData = action.payload;
  },
  toggleChangeMemberModal(state, action) {
   state.changeMemberModalData = action.payload;
  },
  toggleSuccessfullyAction(state, action) {
   state.successfullyActionModalData = action.payload;
  },
 },
 extraReducers: (builder) => {},
});

export const {
 toggleAddMemberModal,
 toggleChangeMemberModal,
 toggleAddCompanyModal,
 toggleSuccessfullyAction,
 toggleChangeCompanyModal,
} = ModalSlice.actions;

export default ModalSlice.reducer;
