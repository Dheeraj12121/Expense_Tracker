import React from 'react'
import Layout from '../components/Layout/Layout'

const HomePage = () => {
  return (
    <>
    <Layout>
      <div className="filters"></div>
      <div>rangefilters</div>
      <div>
        <button className='btn btn-primary'>Add new</button>
      </div>
      <div className="content"></div>
    </Layout>
    </>
  )
}

export default HomePage