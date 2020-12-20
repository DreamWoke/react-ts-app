import { takeEvery } from "redux-saga/effects"
import { actionTypes } from "../action"
import { updateUserInfo, logoutUser } from "./user"

function* appSaga() {
  // saga list
  yield takeEvery(actionTypes.ASYNC_SAVEUSERINFO, updateUserInfo)
  yield takeEvery(actionTypes.ASYNC_LOGOUT, logoutUser)
}

export default appSaga
