import {
  COPY_CROPS,
  COPY_CROPS_SUCCESS,
  COPY_CROPS_FAILD
} from '../../constants/actionTypes'

export const postCopyCrops = (plantationId, yearFrom, yearTo) => ({
  type: COPY_CROPS,
  payload: { plantationId, yearFrom, yearTo }
})

export const postCopyCropsSuccess = (data) => ({
  type: COPY_CROPS_SUCCESS,
  payload: data
})
export const postCopyCropsFaild = (msg) => ({
  type: COPY_CROPS_FAILD,
  payload: msg
})
