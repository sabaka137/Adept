import React from "react";
import { useAppDispatch } from "../../redux/store/store";
import TableIcon from "../../shared/TableIcons";
import DeleteIcon from "../../assets/delete.png";
import { removeSingleMember } from "../../redux/reducers/CompaniesSlice";

type Props = {
 companyId: number;
 memberId: number;
};

function RemoveSignleMember({ companyId, memberId }: Props) {
 const dispatch = useAppDispatch();
 function Remove() {
  dispatch(removeSingleMember({ companyId, memberId }));
 }
 return (
  <span onClick={() => Remove()}>
   <TableIcon imageSrc={DeleteIcon} />
  </span>
 );
}

export default RemoveSignleMember;
