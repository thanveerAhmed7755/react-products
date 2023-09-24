import React from 'react'
import {Link,NavLink,useNavigate} from 'react-router-dom'
import { useCart } from './CartsContext'

const Header = () => {
  const {cart} = useCart();
  const navigate = useNavigate()
  const {toggleName} = useCart();
  const {setToggleName} = useCart()

  return (
    <>
     <header className="w-auto shadow-sm sticky top-0 z-10 bg-white">
        <div className="inner lg:w-3/4 mx-auto md:w-screen px-4 py-4 flex flex-row justify-between items-center">

        <div className="logo">
            <h1 className="text-2xl text-blue-400 font-medium ">
                <Link to="/">Fagor</Link>
                </h1>
        </div>
        <div className="link">
            <ul className="flex flex-row gap-3 font-normal items-center">
            <li >
                    <NavLink className="lg:text-base sm:text-sm" 
                      style={(props) => props.isActive ? {color:"green"} : {}}
                      to="/">Home</NavLink >
                </li>
                { toggleName !== "" ?
                <>
                <li>
                    <NavLink className="lg:text-base sm:text-sm" 
                      style={(props) => props.isActive ? {color:"green"} : {}}
                      to="/products">Products</NavLink >
                </li>
                <li>
                    <NavLink className="lg:text-base sm:text-sm" 
                      style={(props) => props.isActive ? {color:"green"} : {}}
                      to="/carts">Carts {cart.length}</NavLink >
                </li>

                <li>
                    <button onClick={
                      () => {
                        setToggleName("")
                        navigate("/")
                            }
                    } className='p-2 bg-blue-600 text-white rounded text-sm'>
                      Logout
                    </button>
                </li>

                      </> : 

                <li>
                    <NavLink className="lg:text-base sm:text-sm" 
                      style={(props) => props.isActive ? {color:"green"} : {}}
                      to="/authentication">Login</NavLink >
                </li>
                    }

                
            </ul>
        </div>
    </div>
     </header>
    </>
  )
}

export default Header
