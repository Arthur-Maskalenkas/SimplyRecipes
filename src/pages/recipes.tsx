import * as React from 'react'

import AllRecipes from '../components/AllRecipes'
import Layout from '../components/Layout'
import Seo from '../components/Seo/Seo'

const Recipes = () => (
  <Layout>
    <Seo title="Recipes" description="Recipes to make at home" />
    <main className="page">
      <AllRecipes />
    </main>
  </Layout>
)

export default Recipes
