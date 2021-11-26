import { CARTTOGGLE, DECREMENT } from "./cart.types";
export const increaseCounter = () => {
  return {
    type: CARTTOGGLE,
  };
};

export const decreaseCounter = () => {
  return {
    type: DECREMENT,
  };
};
