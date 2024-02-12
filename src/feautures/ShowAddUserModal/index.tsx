import React from "react";
import { useAppDispatch } from "../../redux/store/store";
import TableIcon from "../../shared/TableIcons";
import AddUserIcon from "../../assets/add-user.png";
import { toggleAddMemberModal } from "../../redux/reducers/ModalSlice";
type Props = {
 id: number;
 name: string;
};

function ShowAddUserModal({ id, name }: Props) {
 const dispatch = useAppDispatch();
 function handler() {
  dispatch(toggleAddMemberModal({ companyId: id, companyName: name }));
 }
 return (
  <span onClick={() => handler()}>
   <TableIcon imageSrc={AddUserIcon} />
  </span>
 );
}

export default ShowAddUserModal;
