import React, { useState } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import moment from 'jalali-moment'
import MainListItems from './firstMenu/firstMenu'
import Logo from '../../assets/imges/logo.svg'
import Collapsing from '../../assets/imges/collapsing-white.svg'
// import Calender from '../../components/calender'
import Timer from './firstMenu/timer'

const useStylesDrawer = makeStyles((theme) => ({
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    background: '#2c2e3e',
    color: '#fff',
    width: '100%',
    height: '100vh',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9)
    }
  }
}))

const SideBar = () => {
  const classes = useStylesDrawer()
  const [open] = React.useState(true)
  const [showList, setshowliLst] = useState(true)

  const handleDrawerClose = () => {
    setshowliLst(!showList)
  }
  return (
    <div className="first_menu">
      {showList ? (
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
          }}
          open={open}
        >
          <Divider />
          <div className="logo">
            <img src={Logo} alt="logo" />
            <h1>سماک</h1>
            <span>{moment().format('jYYYY/jMM/jDD')}</span>
            <Timer />
          </div>
          {showList ? <List>{MainListItems}</List> : ''}
          <div className="collapsing">
            <img
              src={Collapsing}
              alt="collapsing"
              className="collapsing"
              onClick={handleDrawerClose}
            />
          </div>
        </Drawer>
      ) : (
        <Drawer
          style={{ width: '60%', overflow: 'hidden' }}
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
          }}
          open={open}
        >
          <Divider />
          <div className="logo">
            <img src={Logo} alt="logo" />
            <h1>سماک</h1>
            <span>{moment().format('jYYYY/jMM/jDD')}</span>
            <Timer />
          </div>
          {showList ? <List>{MainListItems}</List> : ''}
          <div className="collapsing">
            <img
              src={Collapsing}
              alt="collapsing"
              onClick={handleDrawerClose}
              style={{ right:'25px' }}
            />
          </div>
        </Drawer>
      )}
    </div>
  )
}

export default SideBar
