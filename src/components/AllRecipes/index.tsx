import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import RecipesList from '../RecipesList'
import TagsList from '../TagsList'

const AllRecipes = () => {
  const data = useStaticQuery(query)
  const recipes = data.allContentfulRecipe.nodes

  return (
    <section className="recipes-container">
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  )
}
export default AllRecipes

const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        id
        title
        prepTime
        cookTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`
