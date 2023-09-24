import React from 'react'
import data from "./Data.json"
import { useCart } from './CartsContext'
const Home = () => {
  const {toggleName} = useCart();
  return (
    <>
    {toggleName == "" ? <> 
    <div className="w-auto h-max my-28 grid place-content-center px-4 text-center">
    <div className="middle-title ">
            <h1 className='text-3xl py-4 font-medium'>Welcome to Fagor website</h1>
        </div>
      <h1 className='text-3xl '>Hmm! Seems like you have not logged in yet.</h1>
      <p className='py-4 text-green-600'>Please Log in </p>
      </div>
    
     </> : 
    <div className="w-auto h-max my-28 grid place-content-center px-4 text-center">
      <div>
        <h1 className='text-3xl'>Hi, <span className='text-blue-900 font-medium'>{toggleName}</span></h1>
      </div>
        <div className="middle-title ">
            <h1 className='text-3xl py-4 font-medium'>Welcome to Fagor website</h1>
        </div>
        <div>
            <p>Here is the lot of products and things you can visit us</p>
            <button className='bg-zinc-700 text-white px-2 py-2 mt-4 rounded'>Explore Us</button>
        </div>
    </div>
    }
    </>
  )
}

export default Home
