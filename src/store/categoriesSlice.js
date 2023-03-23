import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"


//Object.freeze to make the values permanent , one cant change the status from outside
//STATUS will also act like a custom hook for another components 
 export const STATUSES=Object.freeze({
    IDLE:'idle',
    ERROR:'error',
    LOADING:'loading'
})

const categoriesSlice = createSlice({
    name:'categories',
    initialState:{
       data:[],
    //    by default we putting our status as idle
       status:STATUSES.IDLE
    },
    reducers:{
       
        
    },
    //for Thunk
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

export const {setProducts,setStatus} = categoriesSlice.actions
export default categoriesSlice.reducer




//Thunk

 export const fetchProduct = createAsyncThunk('products/fetch',async()=>{
    const res = await fetch('/category/102', {
      method:'GET',
      headers:{
         "X-Authorization": 'CxD6Am0jGol8Bh21ZjB9Gjbm3jyI9w4ZeHJAmYHdfdP4bCClNn7euVxXcGm1dvYs',
      }
    })
    const data =await res.json()
    return data
 })


 