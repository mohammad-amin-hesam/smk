import {
  LIST_NOTIFICATION,
  LIST_NOTIFICATION_SUCCESS,
  LIST_NOTIFICATION_FAILD
} from '../../constants/actionTypes'

export const listNotification = (notifications) => ({
  type: LIST_NOTIFICATION,
  payload: notifications
})
export const listNotificationSuccess = (notifications) => ({
  type: LIST_NOTIFICATION_SUCCESS,
  payload: notifications
})
export const listNotificationFaild = (msg) => ({
  type: LIST_NOTIFICATION_FAILD,
  payload: msg
})
