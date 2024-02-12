import React from "react";
import TableTopBarButton from "../../shared/TableTopBarButton";
import { useAppDispatch } from "../../redux/store/store";
import { removeActiveCompanies } from "../../redux/reducers/CompaniesSlice";
import DeleteIcon from "../../assets/delete.png";
import { Wrapper } from "./style";
type Props = {};

function RemoveFewCompanies({}: Props) {
 const dispatch = useAppDispatch();
 function remove() {
  dispatch(removeActiveCompanies());
 }
 return (
  <Wrapper onClick={() => remove()}>
   <TableTopBarButton buttonText="Delete" iconSrc={DeleteIcon}></TableTopBarButton>
  </Wrapper>
 );
}

export default RemoveFewCompanies;
