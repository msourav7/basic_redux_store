import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/secCartSlice";
import { Link } from "react-router-dom";

// import { STATUSES } from "../store/categoriesSlice";
// import { Link } from "react-router-dom";
// import axios from "axios";

const SecCart = () => {
  // const[products,setProducts]=useState([])

  
  
const dispatch = useDispatch()
  // const [product, setProduct] = useState([]);
  const products = useSelector((state)=>state.seccart)

  // useEffect(() => {
  //   axios
  //     .get("/category/102", {
  //       headers: {
  //         "X-Authorization":
  //           "CxD6Am0jGol8Bh21ZjB9Gjbm3jyI9w4ZeHJAmYHdfdP4bCClNn7euVxXcGm1dvYs",
  //       },
  //     })
  //     .then((res) => {
  //       setProduct(res.data.data.products.data);
  //       // setting data for SINGLE PRODUCT
  //     });
  // }, []);

  const handlesecond = (single) => {
    dispatch(remove(single));
  };

  return (
    <div>
    <h3>Cart product</h3>
      <div className="productsWrapper">
        {/* Single Product */}
        {products.map((single) => (
          <div className="card" key={single.id}>
            <img src={single.thumbnail_img?.original_url} alt="img" />
            <Link to={`/category/${single.id}`}>
              <h4>{single.name}</h4>
            </Link>
            <h5>{single.selling_price}</h5>
            <button className="btn" onClick={() => handlesecond(single.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecCart;
