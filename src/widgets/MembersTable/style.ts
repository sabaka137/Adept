import styled from "styled-components";

export const Wrapper = styled.div`
 position: fixed;
 top: 0;
 left: 0;
 bottom: 0;
 right: 0;
 background: rgba(0, 0, 0, 0.3);
`;
export const Content = styled.div`
 width: 100%;
 height: 100vh;
`;

export const CompanyInfoContainer = styled.div`
 display: flex;
 align-items: center;
 flex-direction: column;
`;
export const CompanyName = styled.div`
 font-family: Inter;
 font-weight: 500;
 font-size: 24px;
 max-width: 200px;
 overflow: hidden;
 text-overflow: ellipsis;
 white-space: nowrap;
 @media (max-width: 800px) {
  max-width: 100%;
 }
`;

export const CompanyMemberCount = styled.div`
 font-family: Inter;
 font-weight: 500;
 font-size: 15px;
 color: #45474b;
`;
