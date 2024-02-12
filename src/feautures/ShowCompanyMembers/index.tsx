import React from "react";
import TableIcon from "../../shared/TableIcons";
import CVIcon from "../../assets/cv.png";
import { useAppDispatch } from "../../redux/store/store";
import { showChoosenCompany } from "../../redux/reducers/CompaniesSlice";
type Props = {
 id: number;
};

function ShowCompanyMembers({ id }: Props) {
 const dispatch = useAppDispatch();
 function setChoosenCompany() {
  dispatch(showChoosenCompany(id));
 }
 return (
  <span onClick={() => setChoosenCompany()}>
   <TableIcon imageSrc={CVIcon} />
  </span>
 );
}

export default ShowCompanyMembers;
