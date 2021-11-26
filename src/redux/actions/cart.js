import { CARTTOGGLE, DECREMENT, PRREVIEW_OUT } from "../types/cart";

export const handleCartModel = (item) => {
  // console.log("item--reducer", item);
  return {
    type: CARTTOGGLE,
    payload: item,
  };
};

export const decreaseCounter = () => {
  return {
    type: DECREMENT,
  };
};

export const previewOut = () => async (dispatch) => {
  try {
    dispatch({
      type: PRREVIEW_OUT,
    });
  } catch (error) {
    console.log(error);
  }
};
