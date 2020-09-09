import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
  FILE_UPLOAD,
  GET_LIST_FILES_UPLOAD,
  FILE_UPLOAD_BY_PLANTATION_ID,
  GET_LIST_FILES_UPLOAD_BY_PLANTATION_ID,
} from "../../constants/actionTypes";
import {
  fileUploadSuccess,
  fileUploadFaild,
  getListFiles,
  getListFilesSuccess,
  getListFilesFaild,
} from "./actions";
import API from "../../services/httpService";

const fileUploadByPlantationIdAsync = (infoFileName, file, plantationId) => {
  let formData = new FormData();
  formData.append("title", infoFileName);
  formData.append("file", file);
  formData.append("plantationId", plantationId);
  return API.post(`/plantations/${plantationId}/info`, formData);
};
const getListFilesByPlantationIdAsync = (plantationId) => {
  return API.get(`/plantations/${plantationId}/info`);
};

function* fileUploadByPlantationId({ payload }) {
  const { infoFileName, file, plantationId } = payload;
  try {
    const result = yield call(
      fileUploadByPlantationIdAsync,
      infoFileName,
      file,
      plantationId
    );

    if (result.data.message) throw new Error(result.data.message);

    yield put(fileUploadSuccess(result.data));
  } catch (error) {
    // catch throw
    yield put(fileUploadFaild(error.message));
  }
}

function* getListFilesUploadByPlantationId({ payload }) {
  const { plantationId } = payload;

  try {
    const result = yield call(getListFilesByPlantationIdAsync, plantationId);

    if (result.data.message) throw new Error(result.data.message);

    yield put(getListFilesSuccess(result.data));
  } catch (error) {
    // catch throw
    yield put(getListFilesFaild(error.message));
  }
}

export function* watchGetUploadFileByPlantationId() {
  yield takeEvery(FILE_UPLOAD_BY_PLANTATION_ID, fileUploadByPlantationId);
}

export function* watchGetlistUploadFilesByPlantationId() {
  yield takeEvery(
    GET_LIST_FILES_UPLOAD_BY_PLANTATION_ID,
    getListFilesUploadByPlantationId
  );
}

export default function* rootSaga() {
  yield all([
    fork(watchGetUploadFileByPlantationId),
    fork(watchGetlistUploadFilesByPlantationId),
  ]);
}
