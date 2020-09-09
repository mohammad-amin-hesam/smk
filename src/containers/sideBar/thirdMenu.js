import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setModalType, setPlantationState } from '../../redux/actions'
import { Link, useHistory, useRouteMatch } from 'react-router-dom'
import SelectOption from './thirdMenu/selectOption/selectOption'
import thirdMenuItem from '../../json/thirdMenu.json'
import Collapsing from '../../assets/imges/collapsing-white.svg'
import CropPatternManagement from './thirdMenu/cropPatternManagment/cropPatternManagement'

const ThirdMenu = (props) => {
  let { plantationState, location } = props
  let { path, url } = useRouteMatch()

  let history = useHistory()
  const [showIcon, setShowIcon] = useState(false)
  const showIconHandler = () => {
    setShowIcon(true)
  }

  return (
    <div className="third_menu">
      <SelectOption />
      <ul>
        {thirdMenuItem.map((item, index) => {
          if (index == 0) {
            return (
              <li onClick={showIconHandler}>
                <Link
                  className={
                    !item.active && plantationState === 'company'
                      ? 'disable'
                      : 'enabe'
                  }
                >
                  {item.name}
                </Link>
              </li>
            )
          } else
            return (
              <li key={index}>
                <Link
                  to={`/${item.subject}/${location.search}`}
                  className={
                    !item.active && plantationState === 'company'
                      ? 'disable'
                      : 'enabe'
                  }
                >
                  {item.name}
                </Link>
              </li>
            )
        })}
      </ul>
      {showIcon && (
        <CropPatternManagement
          close={() => {
            setShowIcon(false)
          }}
        />
      )}
      <footer>
        <img src={Collapsing} alt="collapsing" />
      </footer>
    </div>
  )
}

const mapStateToProps = ({
  plantationState: { plantationId, plantationState },
  modalType: { modalType: modalType }
}) => ({
  plantationId,
  plantationState,
  modalType
})

export default connect(mapStateToProps, {
  setPlantationState,
  setModalType
})(ThirdMenu)
