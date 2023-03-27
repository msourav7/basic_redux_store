import axios from "axios";
// import React from 'react'
// import { useSelector,useDispatch } from 'react-redux'
// import { remove } from '../store/cartSlice'

// const Cart = () => {

//   const dispatch=  useDispatch()
//   const products  = useSelector((state)=>state.cart)
// const handleRemove=(productID)=>{
//     dispatch(remove(productID))
// }

//   return (
//     <div>
//        <h3>Cart</h3>
//        <div className='cartWrapper'>
//         {products.map((product)=>(
//           <div className='cartCard' key={product.id}>
//               <img src={product.image} alt=''/>
//               <h5>{product.title}</h5>
//               <h5>{product.price}</h5>
//               <button className='btn' onClick={()=>handleRemove(product.id)}>Remove</button>
//           </div>

//         ))}

//        </div>
//     </div>
//   )
// }

// export default Cart

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  //for first Slice
  const products = useSelector((state) => state.cart);
  const handleRemove = (combo) => {
    dispatch(remove(combo));
  };

  
//   const secRemove = (combo) => {
//     dispatch(remove(combo));
//   };

//   const [category, setCategory] = useState([]);
//   const [Product, setProduct] = useState([]);

  // useEffect(() => {
  //     axios
  //       .get("/category/102", {
  //         headers: {
  //           "X-Authorization":
  //             "CxD6Am0jGol8Bh21ZjB9Gjbm3jyI9w4ZeHJAmYHdfdP4bCClNn7euVxXcGm1dvYs",
  //         },
  //       })
  //       .then((res) => {
  //         setCategory(res.data.data.combos.data); // setting data for COMBO
  //         setProduct(res.data.data.products.data); // setting data for SINGLE PRODUCT
  //       });
  //   }, []);

  //   const handleAdd = (first) => {
  //     dispatch(add(first));
  //   };
  //   const handlesecond = (e) => {
  //     dispatch(add(e));
  //   };
  return (
    <>
      <div>
        {/* FIRST SLICE */}
        {/* combo product */}
        <h3>Cart combo</h3>
        <div className="cartWrapper">
          {products.map((combo) => (
            <div key={combo.id} className="cartCard">
              <img src={combo.image} alt="img" />
              <h5>{combo.title}</h5>
              <h5>{combo.price}</h5>
              <button className="btn" onClick={() => handleRemove(combo.id)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
      {<br></br>}
      {<hr></hr>}
    </>
  );
};

export default Cart;
