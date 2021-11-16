import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'

import slugify from 'slugify'

type RecipesProps = {
  title: string
  cookTime: number
  description: string
  servings: number
  image: any
  featured: boolean
  prepTime: number
  content: any
}

type RecipesListProps = {
  recipes: RecipesProps[]
}

const RecipesList = ({ recipes }: RecipesListProps) => (
  <div className="recipes-list">
    {recipes.map((item, index) => (
      <Link
        className="recipe"
        key={index}
        to={`/${slugify(item.title, { lower: true })}`}
      >
        <GatsbyImage
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          image={getImage(item.image)}
          className="recipe-img"
          alt={item.title}
        />
        <h5>{item.title}</h5>
        <p>
          Prep: {item.prepTime}min | cook: {item.cookTime}
        </p>
      </Link>
    ))}
  </div>
)

export default RecipesList
