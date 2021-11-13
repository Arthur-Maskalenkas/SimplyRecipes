import * as S from './styles'
import React from 'react'
import { Link } from 'gatsby'

const NavBar = () => (
  <S.Wrapper>
    <ul>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/about">about</Link>
      </li>
      <li>
        <Link to="/contact">contact</Link>
      </li>
      <li>
        <Link to="/tags">tags</Link>
      </li>
      <li>
        <Link to="/recipes">recipes</Link>
      </li>
    </ul>
  </S.Wrapper>
)

export default NavBar
