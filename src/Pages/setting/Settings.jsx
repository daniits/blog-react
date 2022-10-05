import React from 'react'
import "./settings.css"
import SideBar from '../../components/sidebar/SideBar'
const Settings = () => {
  return (
    <div className="setting__section">
        <div className="setting__wrapper">
          <div className="setting__title">
            <span className="setting__updateaccount">
              Update Your Account
            </span>
            <span className="setting__deleteaccount">
              Delete Your Account
            </span>
          </div>
          <form action="" className="setting__form"></form>
        </div>
        <SideBar />
    </div>
  )
}

export default Settings