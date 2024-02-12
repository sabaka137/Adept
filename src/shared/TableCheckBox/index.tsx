import { CheckBox, CustomCheckBox, Wrapper } from "./style";
import CheckIcon from "../../assets/check.png";
type Props = {
 checked: boolean;
};

function TableCheckBox({ checked }: Props) {
 return (
  <Wrapper>
   <CheckBox type="checkbox" tabIndex={1} />
   <CustomCheckBox>{checked && <img alt="check" src={CheckIcon} />}</CustomCheckBox>
  </Wrapper>
 );
}

export default TableCheckBox;
