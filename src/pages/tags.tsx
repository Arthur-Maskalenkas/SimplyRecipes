import { graphql, Link } from 'gatsby'
import * as React from 'react'
import Layout from '../components/Layout'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import setupTags from '../utils/setupTags'

import slugify from 'slugify'
import Seo from '../components/Seo/Seo'

const Tags = ({ data }: any) => {
  const newTags = setupTags(data.allContentfulRecipe.nodes)

  return (
    <Layout>
      <Seo title="Tags" description="tags" />
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag: any, index: any) => {
            const [text, value] = tag
            const slug = slugify(text, { lower: true })

            return (
              <Link to={`/tags/${slug}`} key={index} className="tag">
                <h5>{text}</h5>
                <p>{value} recipe</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags
