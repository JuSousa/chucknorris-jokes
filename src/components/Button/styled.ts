import styled from "styled-components";

interface IButton {
  outline?: boolean | undefined;
}

export default styled.button<IButton>`
  ${(props) => props.theme.fontTypes.button};
  align-items: center;
  border: none;
  border-radius: ${(props) => `${props.theme.spacing(1)}px`};
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  height: ${(props) => `${props.theme.spacing(7)}px`};
  min-width: ${(props) => `${props.theme.spacing(15)}px`};
  text-decoration: none;
  text-transform: capitalize;
  transition: all 0.5s ease;
  outline: none;
  width: 100%;

  background-color: ${({ outline, theme }) =>
    outline ? "transparent" : theme.colors.orange};
  border: 2px solid
    ${({ outline, theme }) => (outline ? theme.colors.orange : "transparent")};
  color: ${({ outline, theme }) =>
    outline ? theme.colors.orange : theme.colors.white};

  &:hover,
  &:focus {
    background-color: ${({ outline, theme }) =>
      outline ? theme.colors.orange : theme.colors.brown};
    color: ${({ outline, theme }) =>
      outline ? theme.colors.white : theme.colors.white};
  }

  @media ${(props) => props.theme.mediaQueries.mdUp} {
    max-width: ${(props) => `${props.theme.spacing(26)}px`};
  }
`;
