import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import CompaniesSlice from "../reducers/CompaniesSlice";
import ModalSlice from "../reducers/ModalSlice";

const store = configureStore({
 reducer: {
  Companies: CompaniesSlice,
  Modal: ModalSlice,
 },
});

export default store;

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
