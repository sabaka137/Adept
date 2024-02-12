import styled from "styled-components";
export const ModalItem = styled.div`
 position: fixed;
 bottom: 20px;
 right: 20px;
 display: flex;
 align-items: center;
 justify-content: space-between;
 background: white;
 border-left: 4px solid #58db69;
 box-shadow: 0 0.225rem 0.25rem #00000014;
 width: 365px;
 height: 55px;
 box-sizing: border-box;
 z-index: 40;
 padding: 0px 15px 0px 10px;
 @media (max-width: 440px) {
  width: 250px;
 }
`;
export const TextLink = styled.div`
 color: #0766ad;
 font-size: 14px;
 text-decoration: none;
`;

export const Title = styled.div`
 font-family: Inter;
 font-weight: 400;
 color: #36e873;
 font-size: 16px;
`;

export const Description = styled.div`
 font-family: Inter;
 font-weight: 500;
 opacity: 0.65;
 font-size: 14px;
`;

export const Subject = styled.span`
 color: #0766ad;
 font-size: 14px;
 text-decoration: none;
 cursor: pointer;
`;
export const Close = styled.span`
 img {
  width: 20px;
  transform: rotate(45deg);
 }
`;
