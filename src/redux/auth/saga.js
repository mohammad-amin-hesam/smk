import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER,
} from "../../constants/actionTypes";

import {
  loginUserSuccess,
  registerUserSuccess,
  loginUserFaild,
} from "./actions";
import API from "../../services/httpService";

const loginWithEmailPasswordAsync = (email, password) =>
  API.post("http://ifms.iranianpc.com/api/v1/login", {
    email,
    password,
  });

function* loginWithEmailPassword({ payload }) {
  const {
    user: { email, password },
    history,
  } = payload;
  try {
    const loginUser = yield call(loginWithEmailPasswordAsync, email, password);

    if (loginUser.data.message) throw new Error(loginUser.data.message);
    localStorage.setItem("token", loginUser.data.access_token);
    yield put(loginUserSuccess(loginUser.data));
    window.location = "/";
  } catch (error) {
    yield put(loginUserFaild(error.message));
  }
}

const registerWithEmailPasswordAsync = async (email, password) => {
  return null;
};
function* registerWithEmailPassword({ payload }) {
  const { email, password } = payload.user;
  const { history } = payload;
  try {
    const registerUser = yield call(
      registerWithEmailPasswordAsync,
      email,
      password
    );
    if (!registerUser.message) {
      localStorage.setItem("user_id", registerUser.user.uid);
      yield put(registerUserSuccess(registerUser));
      history.push("/");
    } else {
      // catch throw
    }
  } catch (error) {
    // catch throw
  }
}

const logoutAsync = async (history) => {
  // await auth
  //   .signOut()
  //   .then((authUser) => authUser)
  //   .catch((error) => error)
  history.push("/");
};

function* logout({ payload }) {
  const { history } = payload;
  try {
    yield call(logoutAsync, history);
    localStorage.removeItem("user_id");
    localStorage.removeItem("token");
  } catch (error) {}
}

export function* watchRegisterUser() {
  yield takeEvery(REGISTER_USER, registerWithEmailPassword);
}

export function* watchLoginUser() {
  yield takeEvery(LOGIN_USER, loginWithEmailPassword);
}

export function* watchLogoutUser() {
  yield takeEvery(LOGOUT_USER, logout);
}

export default function* rootSaga() {
  yield all([
    fork(watchLoginUser),
    fork(watchLogoutUser),
    fork(watchRegisterUser),
  ]);
}
