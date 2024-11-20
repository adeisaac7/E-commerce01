import React from 'react'
import { Link } from 'react-router-dom'
import './DropdownMenu.css'

const DropdownMenu = ({logout}) => {
  return (
    <div className='dropdown-menu'>
        <Link to="/profile" className="dropdown-item">Profile</Link>
        <div className="dropdown-item" onClick={logout}>Logout</div>
    </div>
  )
}

export default DropdownMenu

