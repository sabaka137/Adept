import React from "react";
import { useAppDispatch } from "../../redux/store/store";
import TableCheckBox from "../../shared/TableCheckBox";
import { toggleMember } from "../../redux/reducers/CompaniesSlice";

type Props = {
 id: number;
 companyId: number;
 checked: boolean;
};

function ToggleActiveMember({ id, companyId, checked }: Props) {
 const dispatch = useAppDispatch();
 function ToggleCompany() {
  dispatch(toggleMember({ companyId, memberId: id }));
 }
 return (
  <div style={{ width: 15 }} onClick={() => ToggleCompany()}>
   <TableCheckBox checked={checked} />
  </div>
 );
}

export default ToggleActiveMember;
