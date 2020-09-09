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

export const fileUpload = (files) => ({
  type: FILE_UPLOAD,
  payload: files
})
export const fileUploadByPlantationId = ({
  infoFileName,
  file,
  plantationId
}) => ({
  type: FILE_UPLOAD_BY_PLANTATION_ID,
  payload: { infoFileName, file, plantationId }
})
export const getListFilesByPlantationId = (plantationId) => ({
  type: GET_LIST_FILES_UPLOAD_BY_PLANTATION_ID,
  payload: {plantationId}
})

export const fileUploadSuccess = (files) => ({
  type: FILE_UPLOAD_SUCCESS,
  payload: files
})
export const fileUploadFaild = (msg) => ({
  type: FILE_UPLOAD_FAILD,
  payload: msg
})
export const getListFiles = (listFiles) => ({
  type: GET_LIST_FILES_UPLOAD,
  payload: listFiles
})
export const getListFilesSuccess = (listFiles) => ({
  type: GET_LIST_FILES_UPLOAD_SUCCESS,
  payload: listFiles
})

export const getListFilesFaild = (msg) => ({
  type: GET_LIST_FILES_UPLOAD_FAILD,
  payload: msg
})
