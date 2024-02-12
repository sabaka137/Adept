import styled from "styled-components";

export const Input = styled.input<{ error?: boolean }>`
 width: 100%;
 border: ${(props) => (props.error ? "2px solid #FA7070" : "2px solid #f0f0f0")};
 border-radius: 10px;
 padding: 10px 20px;
 font-size: 16px;
 font-family: Inter;
 font-weight: 300;
 color: grey;
 &:focus {
  border: 2px solid #d8d8d8;
  outline: none;
 }
`;
