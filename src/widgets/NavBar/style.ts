import styled from "styled-components";

export const Container = styled.div<{ width: number }>`
 width: ${(props) => props.width}px;
 height: 100vh;
 position: fixed;
 background: white;
 box-shadow: 2px 0px 8px 0px rgba(34, 60, 80, 0.1);
 display: flex;
 padding: 30px 0px;
 box-sizing: border-box;
 flex-direction: column;
 align-items: center;
 top: 0;
 left: 0;
`;

export const LinksContainer = styled.div`
 margin-top: 100px;
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 30px;
`;
export const Linkitem = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
`;
