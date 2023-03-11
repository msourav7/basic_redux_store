import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice'

const Cart = () => {
  const products  = useSelector((state)=>state.cart)
  const dispatch=  useDispatch()
function handleRemove(productID){
    dispatch(remove(productID))
}

  return (
    <div>
       <h3>Cart</h3>
       <div className='cartWrapper'>
        {products.map((product)=>(
          <div className='cartCard' key={product.id}>
              <img src={product.image} alt=''/>
              <h5>{product.title}</h5>
              <h5>{product.price}</h5>
              <button className='btn' onClick={()=>dispatch(handleRemove(product.id))}>Remove</button>
          </div>
        
        ))}

       </div>
    </div>
  )
}

export default Cart