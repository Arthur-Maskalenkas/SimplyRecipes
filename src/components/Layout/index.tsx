import * as S from './styles'
import React from 'react'
import NavBar from '../NavBar'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <S.Wrapper>
    <NavBar />
    {children}
  </S.Wrapper>
)

export default Layout
