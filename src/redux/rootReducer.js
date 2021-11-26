import { combineReducers } from "redux";

// import cartReducer from "../redux/Cart/cart.reducers";
import cartReducer from "../redux/reducers/cart";
import product from "../redux/reducers/product";
import banner from "../redux/reducers/banner";

const rootReducer = combineReducers({
  cart: cartReducer,
  product,
  banner,
});

export default rootReducer;
