import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cartSlice";
import secCartSlice from "./secCartSlice";



const store = configureStore({
    reducer : {
        cart:cartSlice,
        seccart:secCartSlice,
        // categories:categoriesSlice,
        // category:categorySlice
    }
})


export default store