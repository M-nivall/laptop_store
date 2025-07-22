import React from 'react'
import ProductsCard from './ProductsCard'

const Products = ({products}) => {
  return (
    <div className='py-10'>
      <div className='flex flex-col items-center gap-4'>
        <h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>
          Laptop Store
        </h1>
        <span className='w-20 h-[3px] bg-black'></span>
        <p className='max-w-[700px] text-gray-600 text-center'>
         At Laptop Store, we’re passionate about providing high-performance laptops and accessories that meet your personal, educational, and business needs. With a wide range of trusted brands and expert customer service, we aim to deliver quality, affordability, and reliability—every time you shop with us.
        </p>
      </div>
      <div className='max-w-screen-xl mx-auto ml-10 py-10 grid grid-cols-4 gap-10'>
        {
          products.map((item)=>(
            <ProductsCard key={item._id} product={item} />
          ))
        }
      </div>
    </div>
  )
}

export default Products