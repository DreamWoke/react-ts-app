import { actionTypes } from "../action"

export default (state: any, action: any) => {
  switch (action.type) {
    case actionTypes.SAVEUSERINFO:
      return { ...state, userInfo: action.payload }
    case actionTypes.REMOVEUSERINFO:
      return { ...state, userInfo: "" }
    default:
      return state
  }
}
