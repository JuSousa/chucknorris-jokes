import React from "react";
import { Link } from "react-router-dom";

import { ROUTE_HOME } from "../../configs/routes";

import Button from "../../components/Button";
import Content from "../../components/Content";
import Text from "../../components/Text";

interface IError {
  message?: string;
  handleButton?: () => void;
}

const Error = ({ message, handleButton }: IError) => {
  return (
    <Content full>
      <Text marginBottom={40}>
        It sounds like a joke,
        <br />
        but {message ? message : "this page does not exist."}
      </Text>
      {handleButton ? (
        <Button outline onClick={handleButton}>
          Try again
        </Button>
      ) : (
        <Link to={ROUTE_HOME}>
          <Button outline>Go Home</Button>
        </Link>
      )}
    </Content>
  );
};

export default Error;
