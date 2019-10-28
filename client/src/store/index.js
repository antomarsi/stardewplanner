import { compose, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import createRootReducer from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga";

const initialState = {};

const configureStore = (preloadedState = initialState) => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const store = createStore(
    createRootReducer(),
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
