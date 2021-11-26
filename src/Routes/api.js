import axios from "axios";
//we can write a prdct and develpmnt url
const localBaseUrl = "http://localhost:3001";
const baseUrl = "";

export default axios.create({
  baseUrl: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getConfig = (method, url) => {
  return {
    method,
    url,
    headers: {
      "Content-Type": "application/json",
    },
  };
};

export const getConfigWithBody = (method, url, data) => {
  return {
    method,
    url,
    data,
    headers: {
      "Content-Type": "application/json",
    },
  };
};

export const API_CONFIG = {
  PRODUCTS: {
    LOCAL: `${localBaseUrl}/api/product`,
    SERVER: `${baseUrl}/api/product`,
  },
  BANNERS: {
    LOCAL: `${localBaseUrl}/api/banner`,
    SERVER: `${baseUrl}/api/banner`,
  },
  CATEGORYLIST: {
    LOCAL: `${localBaseUrl}/api/category`,
    SERVER: `${baseUrl}/api/category`,
  },
  ADDPRODUCTCART: {
    LOCAL: `${localBaseUrl}/api/cart/addToCart`,
    SERVER: `${baseUrl}/api/category`,
  },
  UPDATEPRODUCTCART: {
    LOCAL: `${localBaseUrl}/api/cart/updateCart`,
    SERVER: `${baseUrl}/api/cart/updateCart`,
  },
};
