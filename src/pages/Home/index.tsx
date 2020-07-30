import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

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
          {isLoading && <p>Loading</p>}
          {!isLoading && isSuccess && (
            <>
              {data.map((item: string) => (
                <Link to={`joke/${item}`} key={item}>
                  {item}
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
