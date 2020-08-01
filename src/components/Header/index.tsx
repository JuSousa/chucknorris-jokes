import React from "react";
import * as s from "./styled";

import Text from "../Text";

interface IHeader {
  back?: string;
  message?: string;
}

const Header: React.FC<IHeader> = ({ back, message }) => (
  <s.Wrapper align={back ? "space-between" : "center"}>
    {back && <s.GoBack to={back}>&lt; Back</s.GoBack>}
    <Text color="white" type="header">
      Chuck Norris Joke
    </Text>
    {message && (
      <Text color="white" type="headerSmall">
        {message}
      </Text>
    )}
  </s.Wrapper>
);

export default Header;
