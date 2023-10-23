import { createSlice } from "@reduxjs/toolkit";


const stuData =
    [ {
    
     name:'Amit',
     age:23,
     batch:'44',
     course:'Mern',
 
   },  {
   
     name:'Rahul',
     age:24,
     batch:'13',
     course:'Mern',
 
   }, {
    
     name:'Shubham',
     age:25,
     batch:'13',
     course:'Mern',
 
   }
 
 ]



const StudentSlice = createSlice({
    name:"student",
    initialState:stuData,
    reducers:{
        edit: (state,action)=>{
                state[action.payload.id]=action.payload.userData
        },
        add: (state,action)=>{
           state.push(action.payload)

        },
        deleteRed: (state,action)=>{
        state.splice(action.payload,1)
        
         
        }
    }
})


export const {edit,add,deleteRed} = StudentSlice.actions



export default StudentSlice.reducer