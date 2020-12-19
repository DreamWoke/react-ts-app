import { put, call } from "redux-saga/effects"
import Service from "@/service"
import actionTypes from "../action/actionTypes"

const fetchUserInfo = () => {
  return new Promise((resolve, reject) => {
    Service({ url: "user" })
      .then(({ data }) => {
        resolve(data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function* removeUserInfo() {
  yield console.log("remove函数触发了")
  console.log("remove")
}

export function* updateUserInfo() {
  const userInfo = yield call(fetchUserInfo)
  yield put({ type: actionTypes.SAVEUSERINFO, payload: userInfo })
}
