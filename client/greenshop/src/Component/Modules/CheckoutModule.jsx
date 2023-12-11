import React from 'react'
import Footer from '../ReuseComponents/Footer'
import Nav from '../ReuseComponents/Nav'
import Checkout from '../ReuseComponents/Checkout'

const CheckoutModule = () => {
  return (
    <>
    <Nav/>
    <div className='container'>
        <Checkout/>
        <Footer/>
    </div>
    </>
  )
}

export default CheckoutModule