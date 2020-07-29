import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { GetCategoryRequest } from "../../store/modules/category/actions";

const Category = () => {
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
              <ul>
                {data.map((item: string) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      ) : (
        <p>Error</p>
      )}
    </>
  );
};

export default Category;
