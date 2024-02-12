import styled from "styled-components";

export const PageContainer = styled.div`
 min-height: 100vh;
 background: #f9fafb;
 padding: 40px 30px;
 @media (max-width: 756px) {
  padding: 40px 15px;
 }
`;

export const PageTitleContainer = styled.div`
 display: flex;
 align-items: center;
 gap: 20px;
 margin-bottom: 30px;
`;
export const Title = styled.div`
 font-family: Inter;
 font-size: 34px;
 font-weight: 500;
`;

export const BackButton = styled.div<{ $visible: boolean }>`
 width: 30px;
 height: 30px;
 border: 1px solid #3d3b40;
 border-radius: 50%;
 display: ${(props) => (props.$visible ? "flex" : "none")};
 justify-content: center;
 align-items: center;
 cursor: pointer;
 img {
  width: 60%;
 }
`;
