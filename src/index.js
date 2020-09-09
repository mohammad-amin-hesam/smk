import React from 'react'
// import Moment from 'moment-jalaali'
import './index.css'
import * as serviceWorker from './serviceWorker'
// import "./scss/style.scss"
import './scss/dashboardLayout.scss'

// import "./styles/local/index.scss"
// Moment.locale('fa-ir')
// Moment.loadPersian({ dialect: 'persian-modern' })
const render = () => {
  const MainApp = require('./App')
}
render()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
