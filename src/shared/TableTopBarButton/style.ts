import styled from "styled-components";

export const Wrapper = styled.div`
 display: flex;
 border: 1px solid lightgrey;
 border-radius: 20px;
 padding: 5px 18px;
 align-items: center;
 gap: 7px;
 cursor: pointer;
 user-select: none;
 &:hover {
  background: #f5f5f5;
 }
`;
export const IconImage = styled.img`
 width: 16px;
`;

export const Text = styled.div`
 font-family: Inter;
 font-weight: 500;
 color: black;
 font-size: 15px;
`;
