import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Home from '../components/home'

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title='home' />
      <Home />
    </Layout>
  )
}

export default IndexPage
