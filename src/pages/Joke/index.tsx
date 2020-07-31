import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import Loading from "../../components/Loading";

import { GetJokeRequest } from "../../store/modules/joke/actions";

const Joke = () => {
  const { categoryName } = useParams();
  const {
    isLoading,
    isSuccess,
    isError,
    data: { value, icon_url },
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
      {!isError ? (
        <div>
          {isLoading && <Loading />}
          {!isLoading && isSuccess && (
            <>
              <img src={icon_url} alt={value} />
              <p>{value}</p>
              <button onClick={handleJoke}>another</button>
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
