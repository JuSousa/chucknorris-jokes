import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";

import { GetCategoryRequest } from "../../store/modules/home/actions";

const Home = () => {
  const { isLoading, isSuccess, isError, data } = useSelector<any, any>(
    (state) => state.category
  );
  const dispatch = useDispatch();

  const handleCategoryequest = useCallback(
    () => dispatch(GetCategoryRequest()),
    [dispatch]
  );

  useEffect(() => {
    handleCategoryequest();
  }, [handleCategoryequest]);

  return (
    <>
      {!isError ? (
        <div>
          {isLoading && <Loading />}
          {!isLoading && isSuccess && (
            <>
              <Loading />
              {data.map((category: string) => (
                <Link to={`/category/${category}`} key={category}>
                  {category}
                </Link>
              ))}
            </>
          )}
        </div>
      ) : (
        <p>Error</p>
      )}
    </>
  );
};

export default Home;
