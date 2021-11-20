import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'

import Layout from '../components/Layout'
import AllRecipes from '../components/AllRecipes'
import Seo from '../components/Seo/Seo'

const Index = () => (
  <Layout>
    <Seo title="Home" description="Nice and clean recipes site" />
    <main className="page">
      <header className="hero">
        <StaticImage
          src="../assets/images/main.jpeg"
          alt="eggs"
          className="hero-img"
          placeholder="tracedSVG"
          layout="fullWidth"
        />
        <div className="hero-container">
          <div className="hero-text">
            <h1>simply recipes</h1>
            <h2>no fluff, just recipes</h2>
          </div>
        </div>
      </header>
      <AllRecipes />
    </main>
  </Layout>
)

export default Index
