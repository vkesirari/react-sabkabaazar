import { CARTTOGGLE, DECREMENT } from "./cart.types";

const INITIAL_STATE = {
  cart: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CARTTOGGLE:
      return {
        ...state,
        cart: state.cart + 1,
      };

    case DECREMENT:
      return {
        ...state,
        cart: state.cart - 1,
      };

    default:
      return state;
  }
};

export default reducer;
