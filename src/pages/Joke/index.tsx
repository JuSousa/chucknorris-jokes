import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { GetJokeRequest } from "../../store/modules/joke/actions";

interface IProps {
  match: {
    params: {
      id: string;
    };
  };
}

const Joke: React.FC<IProps> = ({ match }) => {
  const { isLoading, isSuccess, isError, data } = useSelector<any, any>(
    (state) => state.joke
  );
  const dispatch = useDispatch();

  const category = match?.params?.id;

  const handleCategoryequest = useCallback(
    () => dispatch(GetJokeRequest(category)),
    [dispatch, category]
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
              <img src={data.icon_url} alt={data.value} />
              <p>{data.value}</p>
            </>
          )}
        </div>
      ) : (
        <p>Error</p>
      )}
    </>
  );
};

export default Joke;
