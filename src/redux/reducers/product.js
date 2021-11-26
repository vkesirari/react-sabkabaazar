import {
  PRODUCT_LIST,
  ADD_PRODUCT_TO_CART,
  UPDATE_PRODUCT_TO_CART,
} from "../types/product";

const INITIAL_STATE = {
  isSuccess: false,
  isError: false,
  message: "",
  products: [],
  cartDat: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (action.type) {
    case PRODUCT_LIST:
      return {
        ...state,
        products: {
          isError: false,
          data: payload,
        },
      };
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        cartDat: {
          isError: false,
          data: payload,
        },
      };
    case UPDATE_PRODUCT_TO_CART:
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
