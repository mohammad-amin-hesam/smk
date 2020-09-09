import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import Theme from '../theme/theme'

function index({ children }) {
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>
}

export default index
