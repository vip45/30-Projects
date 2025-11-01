import BlogBanner from '@/components/Blog/Banner/BlogBanner'
import BlogMain from '@/components/Blog/BlogMain/BlogMain'
import Form from '@/components/common/Form/Form'
import Layout from '@/components/common/Layout/Layout'
import Map from '@/components/common/Map/Map'
import React from 'react'

const blog = () => {
  return (
    <>
      <Layout>
        <BlogBanner/>
        <BlogMain/>
        <Map/>
      </Layout>
    </>
  )
}

export default blog