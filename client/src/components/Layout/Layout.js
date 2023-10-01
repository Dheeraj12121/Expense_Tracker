import React from 'react'
import Hearder from './Hearder'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div>
        <Hearder/>
        <div className="">
            {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout