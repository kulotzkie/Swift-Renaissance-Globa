import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import Loginbtn from "../Loginbtn";
import { FaFacebook, FaInstagramSquare, FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
        <div >
          <Link to="/"className="logo">
            <p><span>S</span>WIFT <span>R</span>ENAISSANCE <span>G</span>LOBAL
            </p>
          </Link>  
        </div>
        <div className="navlink-mobile">
            <ul className={click ? "nav-links activate" : "nav-links"}>
                <li className='nav-item'>
                  <NavLink
                    to='/'
                    className={({ isActive }) =>
                    "nav-item" + (isActive ? " activated" : "")}
                    onClick={closeMobileMenu}>
                      HOME
                    </NavLink>
                  </li>
                <li className='nav-item'>
                  <NavLink
                    to='/shop'
                    className={({ isActive }) =>
                    "nav-item" + (isActive ? " activated" : "")}
                    onClick={closeMobileMenu}>
                      SHOP
                    </NavLink>
                  </li>
                <li className='nav-item'>
                  <NavLink
                    to='/photo'
                    className={({ isActive }) =>
                    "nav-item" + (isActive ? " activated" : "")}
                    onClick={closeMobileMenu}>
                      PHOTO
                    </NavLink>
                  </li>
                <li className='nav-item'>
                  <NavLink
                    to='/contact'
                    className={({ isActive }) =>
                    "nav-item" + (isActive ? " activated" : "")}
                    onClick={closeMobileMenu}>
                      CONTACT
                    </NavLink>
                  </li>
                
                {click && <Loginbtn/>}
                <div className="socmed-icon">
                <FaFacebook/>
                <FaInstagramSquare/>
            </div>
            </ul>
            
        </div>
        <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
        </div>
    </nav>
  )
}

export default Navbar