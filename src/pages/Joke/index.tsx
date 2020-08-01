import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { ROUTE_HOME } from "../../configs/routes";
import { GetJokeRequest } from "../../store/modules/joke/actions";

import Button from "../../components/Button";
import Content from "../../components/Content";
import Error from "../../components/Error";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import Text from "../../components/Text";

import * as s from "./styled";

const Joke = () => {
  const { categoryName } = useParams();
  const {
    isLoading,
    isSuccess,
    isError,
    data: { value },
  } = useSelector<any, any>((state) => state.joke);
  const dispatch = useDispatch();

  const handleJoke = useCallback(() => dispatch(GetJokeRequest(categoryName)), [
    dispatch,
    categoryName,
  ]);

  useEffect(() => {
    handleJoke();
  }, [handleJoke]);

  return (
    <>
      <Header back={ROUTE_HOME} message={categoryName} />
      {!isError ? (
        <Content full>
          {isLoading && <Loading />}
          {!isLoading && isSuccess && (
            <>
              <Text maxWidth={760} marginBottom={40}>
                {value}
              </Text>
              <s.ContentButton>
                <Link to={ROUTE_HOME}>
                  <Button outline>Back</Button>
                </Link>
                <Button outline onClick={handleJoke}>
                  Another Joke
                </Button>
              </s.ContentButton>
            </>
          )}
        </Content>
      ) : (
        <Error message="the jokes really failed." handleButton={handleJoke} />
      )}
    </>
  );
};

export default Joke;
