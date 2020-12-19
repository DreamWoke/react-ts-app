import actionTypes from "../action/actionTypes"

export default (state: any, action: any) => {
  switch (action.type) {
    case actionTypes.SAVEUSERINFO:
      return { ...state, userInfo: action.payload }
    case "reduceCount":
      return { ...state, count: action.count - 1 }
    default:
      return state
  }
}
