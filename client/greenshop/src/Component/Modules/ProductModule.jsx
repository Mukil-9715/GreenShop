import  Footer  from '../ReuseComponents/Footer'
import  Nav  from '../ReuseComponents/Nav'
import React from 'react'
import ProductDetail from '../ReuseComponents/ProductDetail'
import RelatedProduct from '../ReuseComponents/RelatedProduct'

const ProductModule = () => {

  return (
    <>
      <Nav/>
      <div className='container'>

        <ProductDetail/>
        <RelatedProduct/>
        <Footer/>
    </div>
    </>
  )
}

export default ProductModule