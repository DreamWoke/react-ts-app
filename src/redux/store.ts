import { createStore, applyMiddleware, compose } from "redux"
import createSagaMiddleware from "redux-saga"
import appSaga from "./sagas"
import reducer from "./reducer"

const sagaMiddleware = createSagaMiddleware()

const initialState = {
  userInfo: "",
}

console.log(process.env.NODE_ENV)
const storeEnhancers =
  process.env.NODE_ENV === "development" // 仅在development环境开启
    ? compose(
        applyMiddleware(sagaMiddleware),
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window?.devToolsExtension ? window.devToolsExtension() : (f) => f // redux-tools开启
      )
    : applyMiddleware(sagaMiddleware)
const store = createStore(
  reducer,
  initialState,
  storeEnhancers
  // applyMiddleware(sagaMiddleware),
)

sagaMiddleware.run(appSaga)

export default store
