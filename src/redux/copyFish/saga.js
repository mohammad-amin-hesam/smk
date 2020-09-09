import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { COPY_CROPS } from "../../constants/actionTypes";
import { postCopyCropsSuccess, postCopyCropsFaild } from "./actions";
import API from "../../services/httpService";

const postCopyCropsAsync = (yearTo, yearFrom, plantationId) => {
  let formData = new FormData();
  formData.append("plantation_id", plantationId);
  formData.append("year_from", yearFrom);
  formData.append("year_to", yearTo);

  return API.post(`plantation/copy`, formData);
};

function* postCopyCrops({ payload }) {
  const { yearFrom, yearTo, plantationId } = payload;
  try {
    const result = yield call(
      postCopyCropsAsync,
      yearFrom,
      yearTo,
      plantationId
    );

    if (result.data.message) throw new Error(result.data.message);

    yield put(postCopyCropsSuccess(result.data));
  } catch (error) {
    // catch throw
    yield put(postCopyCropsFaild(error.message));
  }
}

export function* watchGetPostCopyCrops() {
  yield takeEvery(COPY_CROPS, postCopyCrops);
}

export default function* rootSaga() {
  yield all([fork(watchGetPostCopyCrops)]);
}
