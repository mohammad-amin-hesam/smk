/* eslint-disable import/no-unresolved */
import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { NavLink } from 'react-router-dom'
import operation from '../../../assets/imges/operation.svg'
import settings from '../../../assets/imges/settings.svg'
import LogOut from '../../../assets/imges/logout.svg'
import notifation from '../../../assets/imges/help.svg'

const MainListItems = (
  <React.Fragment>
    <li>
      <NavLink to="/operations">
        <ListItem button className="listItem">
          <img src={operation} alt="Operation" />
          <ListItemText primary="عملیات" className="text" />
        </ListItem>
      </NavLink>
    </li>
    <li>
      <NavLink to="/setting">
        <ListItem button className="listItem">
          <img src={settings} alt="setting" />
          <ListItemText primary="تنظیمات" className="text" />
        </ListItem>
      </NavLink>
    </li>
    <li>
      <NavLink to="/training">
        <ListItem button className="listItem">
          <img src={notifation} alt="help" />
          <ListItemText primary="آموزش" className="text" />
        </ListItem>
      </NavLink>
    </li>
    <li>
      <NavLink to="/notifications">
        <ListItem button className="listItem">
          <img src={notifation} alt="notifation" />
          <ListItemText primary="اعلانات" className="text" />
        </ListItem>
      </NavLink>
    </li>
    <li>
      <NavLink to="/Login" onClick={() => localStorage.removeItem('token')}>
        <ListItem button className="listItem">
          <img src={LogOut} alt="LogOut" />
          <ListItemText primary="خروج" className="text" />
        </ListItem>
      </NavLink>
    </li>
  </React.Fragment>
)

export default MainListItems
