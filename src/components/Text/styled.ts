import styled from "styled-components";
import { fontTypes, colors } from "../../configs/theme";

interface IText {
  color: keyof typeof colors;
  type: keyof typeof fontTypes;
  marginBottom?: number;
  maxWidth?: number;
}

export const Text = styled.p<IText>`
${(props) => props.theme.fontTypes[props.type]}
  color: ${(props) => props.theme.colors[props.color]};
  margin-bottom: ${(props) =>
    props.marginBottom ? `${props.marginBottom}px` : "0"};
  max-width: ${(props) => (props.maxWidth ? `${props.maxWidth}px` : "inherit")};
  text-align: center;
`;
