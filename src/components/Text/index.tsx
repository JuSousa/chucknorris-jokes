import React from "react";
import * as s from "./styled";

interface IText {
  children: string | any;
  color?: "white" | "gray" | "orange" | "brown" | "unset";
  marginBottom?: number;
  maxWidth?: number;
  type?: "header" | "title" | "text" | "headerSmall" | "button";
}

const Text: React.FC<IText> = ({
  children,
  color = "brown",
  marginBottom,
  maxWidth,
  type = "text",
}) => (
  <s.Text
    type={type}
    color={color}
    marginBottom={marginBottom}
    maxWidth={maxWidth}
  >
    {children}
  </s.Text>
);

export default Text;
