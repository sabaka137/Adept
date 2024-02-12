import styled from "styled-components";

export const CloseButton = styled.div<{ isVisible: boolean }>`
 display: ${(props) => (props.isVisible ? "none" : "block")};
 position: absolute;
 top: 5px;
 right: 10px;
 font-size: 18px;
 font-family: Inter;
 cursor: pointer;
 img {
  width: 15px;
  transform: rotate(45deg);
 }
`;

export const InfoBar = styled.div`
 padding: 0px 30px;
`;
export const AddMember = styled.div`
 width: 30px;
 height: 30px;
 border: 1px solid grey;
 border-radius: 30px;
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 img {
  width: 16px;
 }
`;
