import React, { useState } from 'react'
import { Link } from 'gatsby'

import { FaAlignJustify } from 'react-icons/fa'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import logo from '../../assets/images/logo.svg'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenu = (state: boolean) => {
    setIsOpen(state)
  }

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="simply recipes" />
          </Link>
          <button className="nav-btn" onClick={() => handleMenu(!isOpen)}>
            <FaAlignJustify />
          </button>
        </div>
        <div className={`${isOpen ? 'nav-links show-links' : 'nav-links'}`}>
          <Link
            to="/"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => handleMenu(false)}
          >
            Home
          </Link>

          <Link
            to="/recipes"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => handleMenu(false)}
          >
            Recipes
          </Link>

          <Link
            to="/about"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => handleMenu(false)}
          >
            About
          </Link>

          <Link
            to="/tags"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => handleMenu(false)}
          >
            Tags
          </Link>

          <div className="nav-link contact-link">
            <Link
              to="/contact"
              className="btn"
              activeClassName="active-link"
              onClick={() => handleMenu(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
