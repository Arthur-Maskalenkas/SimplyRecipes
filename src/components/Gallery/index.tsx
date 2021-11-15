import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'

const Gallery = () => {
  const data = useStaticQuery(query)

  const nodes = data.allFile.nodes

  return (
    <section className="wrapper-gallery">
      {nodes.map((item: any, index: any) => {
        const { name } = item
        const pathImage = getImage(item)
        return (
          <article key={index} className="item">
            <GatsbyImage
              key={index}
              alt={name}
              image={pathImage!}
              className="gallery-img"
            />
            <p>{name}</p>
          </article>
        )
      })}
    </section>
  )
}

export const query = graphql`
  {
    allFile(filter: { extension: { ne: "svg" } }) {
      nodes {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            width: 200
            height: 200
          )
        }
        name
      }
    }
  }
`

export default Gallery
