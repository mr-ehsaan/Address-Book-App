import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer";
// import reduxImmutableStateINvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

export default function Store(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //add support for redux devtools
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}
