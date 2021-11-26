import { createStore, compose, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
const enchane = composeWithDevTools || compose;
const store = createStore(rootReducer, enchane(applyMiddleware(thunk)));

export default store;
