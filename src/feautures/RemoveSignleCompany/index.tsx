import React from "react";
import TableIcon from "../../shared/TableIcons";
import DeleteIcon from "../../assets/delete.png";
import { useAppDispatch } from "../../redux/store/store";
import { removeSingleCompany } from "../../redux/reducers/CompaniesSlice";
type Props = {
 id: number;
};

function RemoveSingleCompany({ id }: Props) {
 const dispatch = useAppDispatch();
 function Remove() {
  dispatch(removeSingleCompany(id));
 }
 return (
  <span onClick={() => Remove()}>
   <TableIcon imageSrc={DeleteIcon} />
  </span>
 );
}

export default RemoveSingleCompany;
