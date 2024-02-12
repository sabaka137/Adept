import React, { useState } from "react";
import { useAppDispatch } from "../../redux/store/store";
import TableCheckBox from "../../shared/TableCheckBox";
import { setAllMembersActive } from "../../redux/reducers/CompaniesSlice";

type Props = {
    companyId:number
};

function ToggleAllMembers({companyId}: Props) {
 const [defaultChecked, setDefault] = useState(false);
 const dispatch = useAppDispatch();
 function toggle() {
  dispatch(setAllMembersActive({companyId}));
  setDefault(!defaultChecked);
 }
 return (
  <div style={{ width: 15 }} onClick={() => toggle()}>
   <TableCheckBox checked={defaultChecked} />
  </div>
 );
}

export default ToggleAllMembers;
