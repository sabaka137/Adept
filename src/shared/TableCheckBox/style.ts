import styled from "styled-components";

export const Wrapper = styled.div`
 cursor: pointer;
 user-select: none;
 input {
  &:focus {
   & + div {
    border: 2px solid #525ceb;
   }
  }
 }
`;

export const CheckBox = styled.input`
 opacity: 0;
 position: absolute;
 border: none;
 cursor: pointer;
`;
export const CustomCheckBox = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 width: 15px;
 height: 15px;
 border: 2px solid #6a6a6a;
 border-radius: 4px;
 img {
  margin-top: 2px;
  width: 65%;
 }
`;
