import React from 'react'

const Footer = () => (
  <footer className="page-footer">
    <p>
      &copy; {new Date().getFullYear()}{' '}
      <span>SimplyRecipes Built with Gatsby</span>
    </p>
  </footer>
)

export default Footer
