import BlogBanner from '@/components/Blog/Banner/BlogBanner'
import Form from '@/components/common/Form/Form'
import Layout from '@/components/common/Layout/Layout'
import Map from '@/components/common/Map/Map'
import React from 'react'

const blog = () => {
  return (
    <>
      <Layout>
        <BlogBanner/>
        <Map/>
        {/* <Form/> */}
      </Layout>
    </>
  )
}

export default blog