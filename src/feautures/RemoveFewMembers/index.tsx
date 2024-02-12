import React from "react";
import { useAppDispatch } from "../../redux/store/store";
import TableTopBarButton from "../../shared/TableTopBarButton";
import DeleteIcon from "../../assets/delete.png";
import { removeFewMembers } from "../../redux/reducers/CompaniesSlice";
import { Wrapper } from "./style";
type Props = { companyId: number };

const RemoveFewMembers = (companyId: Props) => {
 const dispatch = useAppDispatch();
 function remove() {
  dispatch(removeFewMembers(companyId));
 }
 return (
  <Wrapper onClick={() => remove()}>
   <TableTopBarButton buttonText="Delete" iconSrc={DeleteIcon}></TableTopBarButton>
  </Wrapper>
 );
};

export default RemoveFewMembers;
