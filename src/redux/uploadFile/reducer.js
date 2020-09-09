import {
   FILE_UPLOAD,
  FILE_UPLOAD_BY_PLANTATION_ID,
  FILE_UPLOAD_SUCCESS,
  FILE_UPLOAD_FAILD,
  GET_LIST_FILES_UPLOAD,
  GET_LIST_FILES_UPLOAD_SUCCESS,
  GET_LIST_FILES_UPLOAD_FAILD,
  GET_LIST_FILES_UPLOAD_BY_PLANTATION_ID
} from '../../constants/actionTypes'

const INIT_STATE = {
  loading: false,
  files: '',
  listFiles: []
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case FILE_UPLOAD:
      return { ...state, loading: true, files: action.payload }
    case FILE_UPLOAD_BY_PLANTATION_ID:
      return { ...state, loading: true, ...action.payload }
    case GET_LIST_FILES_UPLOAD_BY_PLANTATION_ID:
      return { ...state, loading: true, ...action.payload }
    case FILE_UPLOAD_SUCCESS:
      return { ...state, loading: false, files: action.payload }
    case FILE_UPLOAD_FAILD:
      return { ...state, loading: false, msg: action.payload }
    case GET_LIST_FILES_UPLOAD:
      return { ...state, loading: false, listFiles: action.payload }
    case GET_LIST_FILES_UPLOAD_SUCCESS:
      return { ...state, loading: false, listFiles: action.payload }
    case GET_LIST_FILES_UPLOAD_FAILD:
      return { ...state, loading: false, msg: action.payload }
    default:
      return { ...state }
  }
}
