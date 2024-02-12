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
`;
export const ContentContainer = styled.div`
 width: 500px;
 background: white;
 border-radius: 15px;
`;

export const MainContainer = styled.div`
 max-height: 700px;

 overflow-y: auto;
`;
export const PersonItem = styled.div`
 display: flex;
 flex-direction: column;
 box-sizing: border-box;
 padding: 25px 30px 20px;
 position: relative;
 gap: 20px;
 border-bottom: 1px solid #dbdbdb;
 &:last-child {
  border-bottom: none;
 }
`;
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
 }
`;
export const InputLabel = styled.label`
 min-width: 15%;
 font-family: Inter;
 font-weight: 500;
 font-size: 15px;
 color: #0f0f0f;
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
`;
export const TopBar = styled.div`
 padding: 25px;
 font-family: Inter;
 font-weight: 600;
 font-size: 24px;
 border-bottom: 2px solid #dbdbdb;
`;
export const InputContainer = styled.div`
 display: flex;
 align-items: center;
 gap: 30px;
`;

export const BottomBar = styled.div`
 height: 70px;
 background: #f3f5f7;
 box-sizing: border-box;
 padding: 0px 20px;
 margin-top: 5px;
 border-radius: 0px 0px 20px 20px;
 display: flex;
 align-items: center;
 justify-content: space-between;
`;
