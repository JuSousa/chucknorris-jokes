import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { GetCategoryRequest } from "../../store/modules/home/actions";

import Button from "../../components/Button";
import Content from "../../components/Content";
import Error from "../../components/Error";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import Text from "../../components/Text";

import * as s from "./styled";

const Home = () => {
  const { isLoading, isSuccess, isError, data } = useSelector<any, any>(
    (state) => state.category
  );

  const dispatch = useDispatch();

  const handleCategory = useCallback(() => dispatch(GetCategoryRequest()), [
    dispatch,
  ]);

  useEffect(() => {
    handleCategory();
  }, [handleCategory]);

  return (
    <>
      <Header />
      {!isError ? (
        <Content>
          {isLoading && <Loading />}
          {!isLoading && isSuccess && (
            <>
              <s.Introduction>
                <s.ImageChuckNorris />
                <s.Wrapper>
                  <Text type="title" color="orange">
                    Categories
                  </Text>
                  <Text>
                    This is not a joke.
                    <br />
                    Select a category to be:
                  </Text>
                </s.Wrapper>
              </s.Introduction>

              <s.CategoryList>
                {data.map((category: string) => (
                  <Link to={`/category/${category}`} key={category}>
                    <Button outline>{category}</Button>
                  </Link>
                ))}
              </s.CategoryList>
            </>
          )}
        </Content>
      ) : (
        <Error message="the categories failed." handleButton={handleCategory} />
      )}
    </>
  );
};

export default Home;
