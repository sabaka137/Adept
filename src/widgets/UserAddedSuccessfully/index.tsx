import React, { useEffect } from "react";
import { Close, Description, ModalItem, Subject, Title } from "./style";
import PlusIcon from "../../assets/plus.png";
import { useAppDispatch } from "../../redux/store/store";
import { toggleSuccessfullyAction } from "../../redux/reducers/ModalSlice";
import { showChoosenCompany } from "../../redux/reducers/CompaniesSlice";
type Props = {
 companyId: number;
 title: string;
};

function UserAddedSuccesfullyModal({ companyId, title }: Props) {
 const dispatch = useAppDispatch();
 useEffect(() => {
  setTimeout(() => {
   handleClose();
  }, 4000);
 }, []);
 const handleClose = () => {
  dispatch(toggleSuccessfullyAction(null));
 };
 function redirect() {
  dispatch(showChoosenCompany(companyId));
  handleClose();
 }
 return (
  <ModalItem>
   <div>
    <Title>{title}</Title>
    <Description>
     You can see it right <Subject onClick={() => redirect()}>here</Subject>
    </Description>
   </div>
   <Close onClick={() => handleClose()}>
    <img alt="close" src={PlusIcon} />
   </Close>
  </ModalItem>
 );
}

export default UserAddedSuccesfullyModal;
