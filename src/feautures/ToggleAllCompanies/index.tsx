import React, { useState } from "react";
import TableCheckBox from "../../shared/TableCheckBox";
import { useAppDispatch } from "../../redux/store/store";
import { setAllCompaniesActive } from "../../redux/reducers/CompaniesSlice";

type Props = {};

function ToggleAllCompanies({}: Props) {
 const [defaultChecked, setDefault] = useState(false);
 const dispatch = useAppDispatch();
 function toggle() {
  dispatch(setAllCompaniesActive());
  setDefault(!defaultChecked);
 }
 return (
  <div style={{ width: 15 }} onClick={() => toggle()}>
   <TableCheckBox checked={defaultChecked} />
  </div>
 );
}

export default ToggleAllCompanies;
