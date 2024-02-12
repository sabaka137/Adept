import React from "react";
import TableCheckBox from "../../shared/TableCheckBox";
import { useAppDispatch } from "../../redux/store/store";
import { toggleCompany } from "../../redux/reducers/CompaniesSlice";

type Props = {
 id: number;
 checked: boolean;
};

function ToggleActiveCompany({ id, checked }: Props) {
 const dispatch = useAppDispatch();
 function ToggleCompany() {
  dispatch(toggleCompany(id));
 }
 return (
  <div style={{ width: 15 }} onClick={() => ToggleCompany()}>
   <TableCheckBox checked={checked} />
  </div>
 );
}

export default ToggleActiveCompany;
