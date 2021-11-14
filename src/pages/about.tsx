import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import * as React from 'react'
import Layout from '../components/Layout'

const About = () => (
  <Layout>
    <main className="page">
      <section className="about-page">
        <article>
          <h2>Im baby coloring book poke taxidermy</h2>
          <p>
            Taxidermy forage glossier letterpress heirloom before they sold out
            you probably havent heard of them banh mi biodiesel chia.
          </p>
          <p>
            Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia
            retro.
          </p>
          <Link to="/contact" className="btn">
            contact
          </Link>
        </article>
        <StaticImage
          alt="Person pouring salt in bowl"
          src="../assets/images/about.jpeg"
          className="about-img"
          placeholder="tracedSVG"
        />
      </section>
    </main>
  </Layout>
)

export default About
