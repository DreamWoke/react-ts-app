export const actionTypes = {
  // action
  SAVEUSERINFO: "saveUserInfo",
  REMOVEUSERINFO: "removeUserInfo",
  // async action
  ASYNC_SAVEUSERINFO: "asyncSaveUserInfo",
  ASYNC_LOGOUT: "asyncLogout",
}

export const actionCreator = (type: string, payload?: any) => {
  return {
    type,
    payload,
  }
}
