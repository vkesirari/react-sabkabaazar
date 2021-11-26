import {
  BANNER_LIST,
  CATEGORY_LIST,
  CATEGORY_LIST_SELECTED,
} from "../types/banner";
import axios from "axios";
import { API_CONFIG, getConfig } from "../../Routes/api";
export const bannerList = () => async (dispatch, getState) => {
  const state = getState();
  let url = API_CONFIG.BANNERS.LOCAL;
  let config = getConfig("GET", url, state);
  console.log("config", config);
  try {
    const res = await axios(config);
    dispatch({
      type: BANNER_LIST,
      payload: res.data.data,
    });
  } catch (err) {
    console.log("request fail");
  }
};

export const categoryList = () => async (dispatch, getState) => {
  const state = getState();
  let url = API_CONFIG.CATEGORYLIST.LOCAL;
  let config = getConfig("GET", url, state);
  console.log("config", config);
  try {
    const res = await axios(config);
    console.log("config--res", res);

    dispatch({
      type: CATEGORY_LIST,
      payload: res.data.data,
    });
  } catch (err) {
    console.log("request fail");
  }
};

export const categoryListSelected = (id) => async (dispatch, getState) => {
  const state = getState();
  let url = API_CONFIG.CATEGORYLIST.LOCAL + "/" + id;
  let config = getConfig("PUT", url, state);
  try {
    const res = await axios(config);
    console.log("config--category", res);

    dispatch({
      type: CATEGORY_LIST_SELECTED,
      payload: res.data,
    });
  } catch (err) {
    console.log("request fail");
  }
};
