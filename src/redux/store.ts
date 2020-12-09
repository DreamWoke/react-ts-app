import { createStore } from "redux"
import reducer from "./reducer"

const initialState = {
  count: 2,
}
export default createStore(reducer, initialState)
