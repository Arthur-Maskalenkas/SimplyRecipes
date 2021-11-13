import React from 'react'
import NavBar from '../NavBar'

import 'normalize.css'
import '../../styles/main.css'
import Footer from '../Footer'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <div className="wrapper-app">
    <NavBar />
    <div className="wrapper-content">{children}</div>
    <Footer />
  </div>
)

export default Layout
