// import React, { useEffect } from "react";

// import { useDispatch, useSelector } from "react-redux";
// import { fetchProduct } from "../store/categorySlice";
// import { STATUSES } from "../store/categoriesSlice";


// const ProductDetails = () => {

//     const dispatch= useDispatch()
//   const { data: categoriess, status } = useSelector((state) => state.category);
// // const {categoriess,status} = useSelector(state =>state.category)

//   useEffect(() => {
//     dispatch(fetchProduct());
//   }, [dispatch]);

//   if (status === STATUSES.LOADING) {
//     return <h2>Loading...</h2>;
//   }
//   if (status === STATUSES.ERROR) {
//     return <h2>Something went wrong</h2>;
//   }

//   return (
//     <div>
//       {categoriess.map((category) => (
//         <div key={category.id}>
//           <h1>{category.name}</h1>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductDetails;
