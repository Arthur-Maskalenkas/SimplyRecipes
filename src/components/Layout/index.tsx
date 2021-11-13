import React from 'react'
import NavBar from '../NavBar'

import '../../styles/main.css'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <div>
    <NavBar />
    {children}
  </div>
)

export default Layout
