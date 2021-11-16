import { Link } from 'gatsby'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import setupTags from '../../utils/setupTags'

type RecipesProps = {
  title: string
  cookTime: number
  description: string
  servings: number
  image: string
  featured: boolean
  prepTime: number
  content: any
}

type TagsListProps = {
  recipes: RecipesProps[]
}

const TagsList = ({ recipes }: TagsListProps) => {
  const newTags = setupTags(recipes)

  return (
    <div className="tag-container">
      <h4>recipes</h4>
      <div className="tags-list">
        {newTags.map((tag: any, index: any) => (
          <Link to={`/tags/${tag[0]}`} key={index}>
            {tag[0]} ({tag[1]})
          </Link>
        ))}
      </div>
    </div>
  )
}
export default TagsList
