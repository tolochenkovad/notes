import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/sagas";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import reducers from "../reducers/reducers";

export type AppState = ReturnType<typeof reducers>;

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "notes-redux",
  storage,
  blacklist: ["locale"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

persistStore(store);

sagaMiddleware.run(rootSaga);

export default store;
