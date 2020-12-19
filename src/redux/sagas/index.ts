import { takeEvery } from "redux-saga/effects"
import actionTypes from "../action/actionTypes"
import { updateUserInfo, removeUserInfo } from "./user"

function* appSaga() {
  yield takeEvery(actionTypes.ASYNC_SAVEUSERINFO, updateUserInfo)
  yield takeEvery(actionTypes.ASYNC_REMOVEUSERINFO, removeUserInfo)
}

export default appSaga
