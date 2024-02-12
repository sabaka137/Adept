import styled from "styled-components";

export const Wrapper = styled.div`
 position: fixed;
 top: 0;
 left: 0;
 bottom: 0;
 right: 0;
 background: rgba(0, 0, 0, 0.2);
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 0px 10px;
 box-sizing: border-box;
`;
export const ContentContainer = styled.div`
 width: 500px;
 background: white;
 border-radius: 15px;
 @media (max-width: 520px) {
  width: 100%;
 }
`;
export const CloseButton = styled.div`
 position: absolute;
 top: 5px;
 right: 15px;
 cursor: pointer;
 img {
  transform: rotate(45deg);
  width: 16px;
 }
`;

export const MainContainer = styled.div<{ ref?: any }>`
 max-height: 700px;

 overflow-y: auto;
`;
export const TopBar = styled.div`
 padding: 25px;
 position: relative;
 font-family: Inter;
 width: 100%;
 overflow: hidden;
 white-space: nowrap;
 text-overflow: ellipsis;
 color: #454545;
 font-weight: 600;
 font-size: 24px;
 box-sizing: border-box;
 border-bottom: 2px solid #dbdbdb;
`;
export const BottomBar = styled.div<{ singleElement?: boolean }>`
 height: 70px;
 background: #f3f5f7;
 box-sizing: border-box;

 padding: 0px 20px;
 margin-top: 5px;
 border-radius: 0px 0px 20px 20px;
 display: flex;
 align-items: center;
 justify-content: ${(props) => (props.singleElement ? "right" : "space-between")};
`;
export const PersonItem = styled.div`
 display: flex;
 flex-direction: column;
 box-sizing: border-box;
 padding: 25px 30px 20px;
 position: relative;
 gap: 20px;
 border-bottom: 2px solid #dbdbdb;
 &:last-child {
  border-bottom: none;
 }
 @media (max-width: 565px) {
  padding: 15px;
 }
`;
export const InputContainer = styled.div`
 display: flex;
 align-items: center;
 gap: 30px;
`;
export const InputLabel = styled.label`
 min-width: 15%;
 font-family: Inter;
 font-weight: 500;
 font-size: 15px;
 color: #0f0f0f;
`;
