import styled from "styled-components";

export const Position = styled.div`
  position: fixed;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  width: 80px;
  height: 80px;
`;

export const Spinner = styled.span`
  border: 10px solid #fff;
  border-top: 10px solid #efc46f;
  border-radius: 100%;
  width: 80px;
  height: 80px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
  display: block;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
