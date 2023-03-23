import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cartSlice";
import categoriesSlice from "./categoriesSlice";
import categorySlice from "./categorySlice";



const store = configureStore({
    reducer : {
        cart:cartSlice,
        categories:categoriesSlice,
        category:categorySlice
    }
})


export default store