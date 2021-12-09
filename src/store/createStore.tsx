import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk"
import { allTimeSlotsReducer } from "./allTimeSlots";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
  compose;

const combinedReducers = combineReducers({
    allTimeSlotsReducer,
  });

export const store = createStore(
  combinedReducers,
  compose(
    applyMiddleware(thunk),
    composeEnhancers()
  ),
);
