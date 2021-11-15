import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import RecipesList from '../RecipesList'
import TagsList from '../TagsList'

const AllRecipes = () => {
  const data = useStaticQuery(query)
  const recipes = data.allContentfulRecipe.nodes

  return (
    <div>
      <h4>all recipes</h4>
      <TagsList />
      <RecipesList />
    </div>
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
