import {
  BANNER_LIST,
  CATEGORY_LIST,
  CATEGORY_LIST_SELECTED,
} from "../types/banner";

const INITIAL_STATE = {
  isSuccess: false,
  isError: false,
  message: "",
  banners: [],
  categorys: [],
  products: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (action.type) {
    case BANNER_LIST:
      return {
        ...state,
        banners: {
          isError: false,
          data: payload,
        },
      };

    case CATEGORY_LIST:
      return {
        ...state,
        categorys: {
          isError: false,
          data: payload,
        },
      };
    case CATEGORY_LIST_SELECTED:
      return {
        ...state,
        products: {
          isError: false,
          data: payload,
        },
      };

    default:
      return state;
  }
};

export default reducer;
