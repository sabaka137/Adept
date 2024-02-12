import styled from "styled-components";

export const Table = styled.table`
 width: 100%;
 outline: 2px solid #e4e7ec;
 border-radius: 0px 0px 10px;
 overflow: hidden;
 border-collapse: collapse;
 @media (max-width: 800px) {
  outline: none;
  background: transparent;
 }
`;

export const Tr = styled.tr<{ $isActive?: boolean }>`
 text-align: left;
 height: 72px;
 width: 100%;
 background: ${(props) => (props.$isActive ? "#f0f3f8" : "transparent")};
 border-bottom: 1px solid #dbdbdb;
 @media (max-width: 800px) {
  padding: 5px 0px;
  min-height: 50px;
  height: auto;
  display: flex;
  align-items: center;
  &:last-child {
   border-bottom: none;
  }
 }
`;

export const TBody = styled.div`
 width: 100%;

 @media (max-width: 800px) {
  border: 2px solid #e4e7ec;
  border-radius: 15px;
  box-sizing: border-box;
  margin: 30px 0px;
 }
`;

export const TrHeader = styled(Tr)`
 background: #ebecef;
 @media (max-width: 800px) {
  display: none;
 }
`;

export const Th = styled.th<{ $widthPercent?: number }>`
 font-weight: 500;
 font-family: Roboto;
 width: ${(props) => props.$widthPercent}%;
 color: #333333;
 &:first-child {
  padding: 0px 30px;
 }
 @media (max-width: 800px) {
  min-width: 55px;
 }
`;

export const Td = styled.td<{ $widthPercent?: number }>`
 font-family: Inter;
 width: ${(props) => props.$widthPercent}%;
 padding: 10px 0px;
 word-break: break-word;
 font-weight: 400;
 color: #22272a;
 &:first-child {
  padding: 0px 30px;
 }
 &:last-child {
  padding: 0px 10px 0px 0px;
 }
 @media (max-width: 800px) {
  width: 100%;
  padding: 0px;
 }
`;

export const ActionsContainer = styled.div`
 display: flex;
 gap: 20px;
`;
export const TableTopBarContainer = styled.div`
 height: 70px;
 display: flex;
 justify-content: space-between;
 outline: 2px solid #e4e7ec;
 align-items: center;
 padding: 0px 15px;
 background: #f9fafb;

 @media (max-width: 800px) {
  width: 100%;
  flex-direction: column;
  height: auto;
  outline: none;
  padding: 0px;
  gap: 10px;
 }
 @media (max-width: 767px) {
  box-sizing: border-box;
 }
`;
export const SearchItem = styled.div`
 @media (max-width: 800px) {
  width: 100%;
  display: flex;
  justify-content: center;
  order: 2;
 }
`;
export const CompanyItem = styled.div`
 @media (max-width: 900px) {
  display: none;
 }
 @media (max-width: 800px) {
  display: block;
  order: 1;
 }
`;
export const ActionsItem = styled.div`
 display: flex;
 gap: 20px;
 @media (max-width: 800px) {
  width: 100%;
  justify-content: space-between;
  order: 3;
 }
 @media (max-width: 767px) {
  width: 100%;
 }
`;
