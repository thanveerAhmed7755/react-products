import { useCart } from "./CartsContext"
import data from "./Data.json"

const Products = () => {
  const { addToCart } = useCart();
  return (
    <>
      <h1 className="text-2xl font-medium text-center py-4">Products List</h1>
      <div className="product-list grid gap-6 lg:grid-cols-3 md:grid-cols-2 justify-items-center">

      {data.slice(9,20).map((el) => 
      {
             return <div key={el.id} className='p-2 cursor-pointer text-center'>
                    <img width="200" className='hover:scale-105' src={el.images[0]} />
                    <div className='flex py-4 flex-row justify-between'>
                    <p>{el.brand}</p>
                    <p>${el.price}</p>
                    </div>
                    <button onClick={() => {
                        addToCart(el)
                    }} className='bg-lime-950 text-white text-sm p-2 rounded'>Add to Cart</button>
                </div>
    })}
    </div>

    </>
  )
}

export default Products
