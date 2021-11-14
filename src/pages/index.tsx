import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/Layout'

import { graphql } from 'gatsby'

type IndexProps = {
  data: any
}

const Index = ({ data }: IndexProps) => (
  <Layout>
    <main className="page">
      <h1>{data.site.siteMetadata.description}</h1>
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
            <h4>no fluff, just recipes</h4>
          </div>
        </div>
      </header>
    </main>
  </Layout>
)

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
`

export default Index
