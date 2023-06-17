import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { base_url } from "../config/baseUrl";
import axios from "axios";

const REGISTER_URL = `${base_url}/user/create`;
const DELETE_URL = `${base_url}/user/delete`;
const GET_URL = `${base_url}/user/all`;

export const getAllUsers = createAsyncThunk("users/getAllUsers", async () => {
  const response = await axios.get(GET_URL);
  console.log("In the slice"+GET_URL)

  return [...response.data];
});

export const register = createAsyncThunk('users/register',async (user) => {
    console.log(user)

    try {
        const response = await axios.post(REGISTER_URL,user,{
            'Content-Type':'application/json',
        })
        return response.data
    } catch (error) {
        console.error(error)
    }
    
})


export const deleteUser = createAsyncThunk(
    "users/deleteUser",
    async (user) => {
      
      await axios.delete(`${DELETE_URL}/${user.id}`);
  
      const response = await axios.get(GET_URL);
      return response.data;
    }
  );


const initialState = {   
    users : {},
    status : 'idle' 
}

const userSlice = createSlice({
    name : 'users',
    initialState,
    reducers : {},
    extraReducers(builder){
        builder
        .addCase(register.fulfilled,(state,action)=>{
            console.log(action.payload)

            if(action.payload?.username){
            state.users = action.payload
            state.status = 'created'
            }
        })
        .addCase(getAllUsers.pending, (state, action) => {
            state.status = "loading";
          })
          .addCase(getAllUsers.fulfilled, (state, action) => {
            state.users = action.payload
            state.status = "success";
          })
          .addCase(getAllUsers.rejected, (state, action) => {
            state.status = "fail";
            state.error = action.error.message;
          })
    }

    

})

export const getUser = state => state.users.users
export const getStatus = state => state.users.status


export const selectUserById = (state, userId) =>
  state.users.users.find((user) => user.id === userId)

  export const selectAllUsers = state => state.users.users

export default userSlice.reducer



