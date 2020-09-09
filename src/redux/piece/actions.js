import {
  LIST_PIECES,
  LIST_PIECES_BY_UNIT_ID_AND_YEAR_ID,
  LIST_PIECES_SUCCESS,
  LIST_PIECES_FAILD
} from '../../constants/actionTypes'

export const listPieces = (pieces) => ({
  type: LIST_PIECES,
  payload: pieces
})
export const listPiecesByUnitIdAndYearId = (unitId, yearId) => ({
  type: LIST_PIECES_BY_UNIT_ID_AND_YEAR_ID,
  payload: { unitId, yearId }
})
export const listPiecesSuccess = (pieces) => ({
  type: LIST_PIECES_SUCCESS,
  payload: pieces
})
export const listPiecesFaild = (msg) => ({
  type: LIST_PIECES_FAILD,
  payload: msg
})
