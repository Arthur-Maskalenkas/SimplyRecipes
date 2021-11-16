import * as React from 'react'

import AllRecipes from '../components/AllRecipes'
import Layout from '../components/Layout'

const Recipes = () => (
  <Layout>
    <main className="page">
      <AllRecipes />
    </main>
  </Layout>
)

export default Recipes
