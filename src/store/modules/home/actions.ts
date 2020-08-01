import { Types } from "./types";

export function GetCategoryRequest() {
  return {
    type: Types.GET_CATEGORY_REQUEST,
  };
}

export function GetCategorySuccess(payload: []) {
  return {
    type: Types.GET_CATEGORY_SUCCESS,
    payload,
  };
}

export function GetCategoryFailure(error: {}) {
  return {
    type: Types.GET_CATEGORY_FAILURE,
    payload: error,
  };
}
