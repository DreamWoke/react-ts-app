import { put, call } from "redux-saga/effects"
import Service from "@/service"
import { removeToken } from "@/utils/token"
import { actionTypes } from "../action"

const fetchUserInfo = () => {
  return new Promise((resolve, reject) => {
    Service({ url: "user", method: "GET" })
      .then(({ data }) => {
        resolve(data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
const toLogout = () => {
  Service({ url: "logout" }).then(() => {
    removeToken()
    put({ type: actionTypes.REMOVEUSERINFO })
  })
}

export function* logoutUser() {
  yield call(toLogout)

  // yield put({ type: actionTypes.REMOVEUSERINFO })// yield removeToken()
}

export function* updateUserInfo() {
  const userInfo = yield call(fetchUserInfo)
  yield put({ type: actionTypes.SAVEUSERINFO, payload: userInfo })
}
