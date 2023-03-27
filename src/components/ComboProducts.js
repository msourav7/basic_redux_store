import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

import { STATUSES } from "../store/categoriesSlice";
import { Link } from "react-router-dom";
import axios from "axios";

const ComboProducts = () => {
  // const[products,setProducts]=useState([])

  //you can also get data here than call it inside useEffect
  //   const fetchProducts=async()=>{
  //     const res = await fetch('https://fakestoreapi.com/products')
  //     const data =await res.json()
  //     console.log(data);
  //     setProducts(data)
  //  }

  const dispatch = useDispatch();
  const [category, setCategory] = useState([]);
 
  
  useEffect(() => {
    axios
      .get("/category/102", {
        headers: {
          "X-Authorization":
            "CxD6Am0jGol8Bh21ZjB9Gjbm3jyI9w4ZeHJAmYHdfdP4bCClNn7euVxXcGm1dvYs",
        },
      })
      .then((res) => {
        setCategory(res.data.data.combos.data);
        
       // setting data for COMBO
        
      });
  }, []);

  const handleAdd = (first) => {
    dispatch(add(first));
  };


  
  return (
    <div>    
        <div className="productsWrapper">
        {/* for Combo product */} 
        {category.map((first) => (
          <div className="card" key={first.id}>
            <img src={first.meta_img?.url} alt="img" />
            <Link to={`/category/${first.id}`}>
              <h4>{first.name}</h4>
            </Link>
            <h5>{first.selling_price}</h5>
            <button className="btn" onClick={() => handleAdd(first)}>
              Add to cart
            </button>
           
          </div>
        ))}
          
       
      </div>
    </div>
  );
};

export default ComboProducts;
