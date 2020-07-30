import { Types } from "./types";

const INITIAL_STATE = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: null,
  data: [],
};

interface IPayload {
  value: string;
  icon_url: string;
}

interface JokeProps {
  type: keyof typeof Types;
  payload: IPayload;
}

export default function (state = INITIAL_STATE, action: JokeProps) {
  switch (action.type) {
    case Types.GET_JOKE_REQUEST:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
        error: null,
      };
    case Types.GET_JOKE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        data: action.payload,
      };
    case Types.GET_JOKE_FAILURE:
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
