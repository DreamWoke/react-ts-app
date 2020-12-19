import actionTypes from "./actionTypes"

export const userInfo = () => {
  return {
    type: actionTypes.ASYNC_SAVEUSERINFO,
  }
}

export const reduce = (count: number) => {
  return {
    type: "reduceCount",
    count,
  }
}
