import {
  PRODUCT_LIST,
  ADD_PRODUCT_TO_CART,
  UPDATE_PRODUCT_TO_CART,
} from "../types/product";
import axios from "axios";
import { API_CONFIG, getConfig, getConfigWithBody } from "../../Routes/api";
export const productList = () => async (dispatch, getState) => {
  const state = getState();
  let url = API_CONFIG.PRODUCTS.LOCAL;
  let config = getConfig("GET", url, state);
  console.log("config", config);
  try {
    const res = await axios(config);
    // console.log("res", res.data);
    // let message = "Product list Fetch Successfully";
    dispatch({
      type: PRODUCT_LIST,
      payload: res.data.data,
    });
  } catch (err) {
    console.log("request fail");
  }
};

export const cartProductSelected = (item) => async (dispatch, getState) => {
  const state = getState();
  let url = API_CONFIG.ADDPRODUCTCART.LOCAL + "/" + item.id;
  let config = getConfigWithBody("POST", url, item, state);
  console.log("config", config);
  try {
    const res = await axios(config);
    console.log("res", res);
    // let message = "Product list Fetch Successfully";
    dispatch({
      type: ADD_PRODUCT_TO_CART,
      payload: res.data,
    });
  } catch (err) {
    console.log("request fail");
  }
};
export const cartProductUpdated = (item) => async (dispatch, getState) => {
  const state = getState();
  let url = API_CONFIG.UPDATEPRODUCTCART.LOCAL + "/" + item.id;
  let config = getConfigWithBody("POST", url, item, state);
  console.log("config", config);
  try {
    const res = await axios(config);
    console.log("res", res);
    // let message = "Product list Fetch Successfully";
    dispatch({
      type: UPDATE_PRODUCT_TO_CART,
      payload: res.data,
    });
  } catch (err) {
    console.log("request fail");
  }
};
