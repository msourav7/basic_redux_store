import { createSlice } from "@reduxjs/toolkit"


const secCartSlice = createSlice({
    name:'cart',
    initialState:[],
    // {
    //    pcart:[],
    // }, 
    reducers:{
        add:(state,action)=>{
             state.push(action.payload.id)
           
            // state.filter((item)=>item.id!==action.payload)

        },
        remove(state,action){
           return state.filter((item)=>item.id!==action.payload)
        }
    }
})

export const {add,remove} = secCartSlice.actions
export default secCartSlice.reducer