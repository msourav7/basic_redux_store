import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";



export const STATUSES=Object.freeze({
    IDLE:'idle',
    ERROR:'error',
    LOADING:'loading'
})
const categorySlice=createSlice({
   name:'category',
   initialState:{
    data:[],
     status:STATUSES.IDLE
   },
   reducers:{

   },
   //for thunk

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

export const {setProducts,setStatus} = categorySlice.actions
export default categorySlice.reducer



//Thunk
// export const dispatch = useDispatch()

export const fetchProduct = createAsyncThunk('products/fetch',async()=>{
    const res = await fetch('/category', {
      method:'GET',
      headers:{
         "X-Authorization": 'CxD6Am0jGol8Bh21ZjB9Gjbm3jyI9w4ZeHJAmYHdfdP4bCClNn7euVxXcGm1dvYs',
      }
    })
    const data =await res.json()
    return data
 })