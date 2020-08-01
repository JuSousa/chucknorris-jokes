import styled from "styled-components";

export const ContentButton = styled.div`
  display: grid;
  grid-gap: ${(props) => `${props.theme.spacing(3)}px`};
  grid-template-columns: repeat(2, 1fr);
  max-width: ${(props) => `${props.theme.spacing(38)}px`};
  width: 100%;
`;
