export default (state: any, action: any) => {
  console.log("aqwe", action)
  switch (action.type) {
    case "addCount":
      return { ...state, count: action.count + state.count }
    case "reduceCount":
      return { ...state, count: action.count - 1 }
    default:
      return state
  }
}
