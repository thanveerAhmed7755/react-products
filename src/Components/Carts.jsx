import React, { useState } from 'react'
import { useCart } from './CartsContext'


const Carts = () => {
    const {cart} = useCart();
    const {removeCart} = useCart();
    const {count,setCount} = useState(1)
    
  return (

     <div className="container w-screen">
      {cart.map((el) => 
      {
        return (
          <>
            <div className=' lg:w-3/4 lg:mx-auto md:w-screen my-2 border-b-2 flex flex-row px-2 py-4 justify-between items-center'>
              <div className='w-3/4 flex items-center justify-between'>
              <img src={el.images[0]} height="80" width="100" alt="" />
              <p className='text-sm'>{el.brand}</p>
              <h2 className='text-sm'>${el.price}</h2>
              </div>
              <div className='flex items-center gap-2'>
              <button onClick={() => {removeCart(el)}}  className='bg-red-600 text-white text-sm px-1 py-2 rounded'> Remove</button>
              </div>
            </div>
          </>
        )
      })
    }
     </div>

    
    )}
       
            
  export default Carts
