import { Types } from "./types";

const INITIAL_STATE = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: null,
  data: [],
};

interface CategoryProps {
  type: keyof typeof Types;
  payload: Array<any>;
}

export default function (state = INITIAL_STATE, action: CategoryProps) {
  switch (action.type) {
    case Types.GET_CATEGORY_REQUEST:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
        error: null,
      };
    case Types.GET_CATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        data: action.payload,
      };
    case Types.GET_CATEGORY_FAILURE:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        error: action.payload,
        data: [],
      };
    default:
      return state;
  }
}
