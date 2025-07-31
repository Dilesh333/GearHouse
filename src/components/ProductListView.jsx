import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function ProductListView({product}) {
    const navigate = useNavigate()
    const {addToCart} = useCart()
  return (
    <div className='space-y-4 mt-2 rounded-md'>
        <div className='bg-gray-100 flex gap-7 items-center rounded-md p-2'>
            <img src={product.image} alt={product.title}  className='md:h-60 md:w-60 h-24 w-24 rounded-md cursor-pointer' onClick={()=>navigate(`/products/${product.id}`)}/>
            <div className='space-y-2'>
                <h1 className='font-bold md:text-xl text-lg line-clamp-3 hover:text-blue-400 md:w-full w-[220px]'>{product.title}</h1>
                <p className='font-semibold flex items-center md:text-lg text-sm '><span className='md:text-4xl text-3xl'>₹{product.price}</span>₹{product.discount}% off</p>
                <p className='text-sm'>Free delivery <span className='font-semibold'>Fri, 18Apr</span> <br />
                    or fastest delivery <span className='font-semibold'>Tommorow, 17 Apr</span> 
                </p>
                <button onClick={()=>addToCart(product)} className='bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-3 py-1 rounded-md'>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default ProductListView