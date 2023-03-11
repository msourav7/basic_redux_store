import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"



//Object.freeze to make the values permanent , one cant change the status from outside
//STATUS will also act like a custom hook for another components 
 export const STATUSES=Object.freeze({
    IDLE:'idle',
    ERROR:'error',
    LOADING:'loading'
})

const productSlice = createSlice({
    name:'product',
    initialState:{
       data:[],
    //    by default we putting our status as default
       status:STATUSES.IDLE
    },
    reducers:{
        // setProducts(state,action){
        //     state.data=action.payload
        // },
        // setStatus(state,action ){
        //     state.status=action.payload 
        // }
        
    },
    //Thunk Part
    extraReducers: (builder)=>{
     builder 
     .addCase(fetchProduct.pending,(state,action)=>{
        state.status=STATUSES.LOADING
     })
     .addCase(fetchProduct.fulfilled,(state,action)=>{
        state.data=action.payload
        state.status=STATUSES.IDLE
     })
     .addCase(fetchProduct.rejected,(state,action)=>{
        state.status=STATUSES.ERROR
     })

    }
})

export const {setProducts,setStatus} = productSlice.actions
export default productSlice.reducer




//Thunk

 export const fetchProduct = createAsyncThunk('products/fetch',async()=>{
    const res = await fetch('https://fakestoreapi.com/products')
    const data =await res.json()
    return data
 })