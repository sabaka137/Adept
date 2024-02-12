import React from "react";
import Pen from "../../assets/pen.png";
import { useAppDispatch } from "../../redux/store/store";
import TableIcon from "../../shared/TableIcons";
import { toggleChangeMemberModal } from "../../redux/reducers/ModalSlice";
import { IMember } from "../../types";
type Props = {
 member: IMember;
 companyId: number;
 companyName: string;
};

function ShowMemberChangeModal({ member, companyId, companyName }: Props) {
 const dispatch = useAppDispatch();
 function handler() {
  dispatch(toggleChangeMemberModal({ member, companyId, companyName }));
 }
 return (
  <span onClick={() => handler()}>
   <TableIcon imageSrc={Pen} />
  </span>
 );
}

export default ShowMemberChangeModal;
