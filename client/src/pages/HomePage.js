import React from 'react'
import Layout from '../components/Layout/Layout'
import {Routes, Route} from 'react-router-dom'

const HomePage = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<HomePage/>}/>
    </Routes>
    </>
  )
}

export default HomePage