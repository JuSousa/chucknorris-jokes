import { Types } from "./types";

export function GetJokeRequest(category: string) {
  return {
    type: Types.GET_JOKE_REQUEST,
    category,
  };
}

export function GetJokeSuccess(payload: {}) {
  return {
    type: Types.GET_JOKE_SUCCESS,
    payload,
  };
}

export function GetJokeFailure(error: {}) {
  return {
    type: Types.GET_JOKE_FAILURE,
    payload: error,
  };
}
