import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ReactDOM from 'react-dom'
import App from './containers/App'
import { configureStore } from './redux/store'
import Modal from './components/ui/modal/modal'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

const MainApp = (props) => (
  <div>
    <MuiThemeProvider theme={createMuiTheme({})}>
      <Provider store={configureStore()}>
        <Router>
          <Switch>
            <Route path="/" component={App} />
          </Switch>
        </Router>
      </Provider>
      <ToastContainer />
    </MuiThemeProvider>
  </div>
)
export default ReactDOM.render(<MainApp />, document.getElementById('root'))
