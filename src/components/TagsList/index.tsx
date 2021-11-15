import React from 'react'

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

const TagsList = ({ recipes }: TagsListProps) => <div>this is tagsList</div>

export default TagsList
