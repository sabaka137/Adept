import React from "react";
import Pen from "../../assets/pen.png";
import { useAppDispatch } from "../../redux/store/store";
import TableIcon from "../../shared/TableIcons";
import { toggleChangeCompanyModal } from "../../redux/reducers/ModalSlice";

type Props = {
 id: number;
 name: string;
 address: string;
};

function ShowChangeCompanyModal({ id, name, address }: Props) {
 const dispatch = useAppDispatch();
 function handler() {
  dispatch(toggleChangeCompanyModal({ id, name, address }));
 }
 return (
  <span onClick={() => handler()}>
   <TableIcon imageSrc={Pen} />
  </span>
 );
}

export default ShowChangeCompanyModal;
