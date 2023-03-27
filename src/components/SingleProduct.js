import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";

const SingleProduct = () => {
  const [product, setProduct] = useState([]);

//   const product=useSelector((state)=>state.secCart)

  useEffect(() => {
    axios
      .get("/category/102", {
        headers: {
          "X-Authorization":
            "CxD6Am0jGol8Bh21ZjB9Gjbm3jyI9w4ZeHJAmYHdfdP4bCClNn7euVxXcGm1dvYs",
        },
      })
      .then((res) => {
        setProduct(res.data.data.products.data);
      });
  }, []);

  const dispatch = useDispatch()

  const handlesecond=(second)=>{
   dispatch(add(second))
  }


  
  return (
    <>
      <div className="productsWrapper">
        {product.map((second) => (
          <div className="card" key={second.id}>
            <img src={second.thumbnail_img?.original_url} alt="img" />
            <Link to={`/category/${second.id}`}>
              <h4>{second.name}</h4>
            </Link>
            <h5>{second.selling_price}</h5>
            <button className="btn" onClick={() => handlesecond(second)}>
            Add to cart
          </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default SingleProduct;
