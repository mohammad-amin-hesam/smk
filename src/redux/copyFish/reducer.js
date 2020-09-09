import {
  COPY_CROPS,
  COPY_CROPS_SUCCESS,
  COPY_CROPS_FAILD
} from '../../constants/actionTypes'

const INIT_STATE = {
  loading: false,
  listCopyCrops: []
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case COPY_CROPS:
      return { ...state, loading: true, listCopyCrops: action.payload }
    case COPY_CROPS_SUCCESS:
      return { ...state, loading: true, listCopyCrops: action.payload }
    case COPY_CROPS_FAILD:
      return { ...state, loading: true, ...action.payload }
    default:
      return { ...state }
  }
}
