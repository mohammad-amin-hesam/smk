import React, {useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { listNotification } from '../../redux/actions'
import Spinner from '../../components/ui/spinner/spinner'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import httpService from '../../services/httpService'

const Notifications = (props) => {
  const { loading } = props
  let { notifications } = props
  let history = useHistory()

  useEffect(() => {
    props.listNotification()
  }, [])

  const closeHandler = () => {
    history.push(`/`)
  }

  return (
    <div className="notifications">
      <div className="form-title">
        <span>اعلانات</span>
        <div className="submit-close">
          <button onClick={closeHandler}>
            <span>بازگشت</span>
            <ArrowBackIcon />
          </button>
        </div>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th>ردیف</th>
              <th> تاریخ </th>
              <th>پیام </th>
            </tr>
          </thead>
          <tbody>
            {notifications.data?.map((notification, index) => {
              return (
                <tr key={index}  >
                  <td>{index + 1}</td>
                  <td>{notification.data.alert_date}</td>
                  <td>{notification.data.alert_text}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}
    </div>
  )
}

const mapStateToProps = ({ notifications: { loading, notifications } }) => ({
  loading,
  notifications
})

export default connect(mapStateToProps, {
  listNotification
})(Notifications)
