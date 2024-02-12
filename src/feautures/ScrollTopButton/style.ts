import styled from "styled-components";

export const Button = styled.div`
 width: 35px;
 height: 35px;
 position: fixed;
 bottom: 30px;
 right: 30px;
 border: 2px solid grey;
 border-radius: 50%;
 display: flex;
 cursor: pointer;
 justify-content: center;
 align-items: center;
 &:hover {
  border: 2px solid #b6c4b6;
 }
 img {
  width: 60%;
  transform: rotate(90deg);
 }
`;
