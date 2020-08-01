import styled from "styled-components";
import { Link } from "react-router-dom";

interface IWrapper {
  align: string;
}

export const Wrapper = styled.header<IWrapper>`
  align-items: center;
  background-color: ${(props) => props.theme.colors.orange};
  display: flex;
  justify-content: ${(props) => props.align};
  padding: 1rem;
`;

export const GoBack = styled(Link)`
  ${(props) => props.theme.fontTypes.headerSmall};
`;
