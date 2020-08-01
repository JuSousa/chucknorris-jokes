import styled from "styled-components";

interface IContent {
  full?: boolean | undefined;
}

export default styled.main<IContent>`
  align-items: center;
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding: ${(props) => (props.full ? "0 1rem" : "1.5rem")};
  height: ${(props) => (props.full ? "calc(100vh - 58px)" : "auto")};
`;
