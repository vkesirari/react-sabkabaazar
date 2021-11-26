import { CARTTOGGLE, DECREMENT, PRREVIEW_OUT } from "../types/cart";
const INITIAL_STATE = {
  cart: false,
  previewStory: {
    isSuccess: false,
    isError: false,
    message: "",
    data: null,
  },
};

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CARTTOGGLE:
      return {
        ...state,
        cart: payload,
      };

    case DECREMENT:
      return {
        ...state,
        cart: state.cart - 1,
      };

    case PRREVIEW_OUT:
      return {
        ...state,
        previewStory: {
          isSuccess: false,
          isError: false,
          message: "",
          data: null,
        },
      };
    default:
      return state;
  }
};

export default reducer;
