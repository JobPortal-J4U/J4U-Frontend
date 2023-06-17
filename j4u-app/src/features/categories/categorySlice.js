import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url } from "../config/baseUrl";

const initialState = {
    categories: [],
    status: "idle",
    error: null,
  };

  const GET_URL = `${base_url}/category/all`;
  const POSTS_URL = `${base_url}/category/create`;

  export const getAllCategories = createAsyncThunk("categories/getAllCategories", async () => {
    const response = await axios.get(GET_URL);
  
    return [...response.data];
  });

  export const addNewCategory = createAsyncThunk(
    "categories/addCategory",
    async (category) => {
      console.log("%%%%%%%%%" + category);
      const response = await axios.post(POSTS_URL, category);
      return response.data;
    }
  );

  export const updateCategory = createAsyncThunk(
    "categories/updateCategory",
    async (category) => {
      const { id } = category;
      console.log("Category in slice"+category)
      const response = await axios.put(`${base_url}/category/update/${id}`, category);
     
      return response.data;
    }
  );

  export const deleteCategory = createAsyncThunk(
    "category/deleteCategory",
    async (cat) => {
      const { categoryId } = cat.id;
      const response = await axios.delete(`${base_url}/category/id/${categoryId}`,cat.id);
      console.log(response)
  
      if(response.status === 200)
      return cat;
      else
      return response.status ;
    }
  );


const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder
          .addCase(getAllCategories.pending, (state, action) => {
            state.status = "loading";
          })
          .addCase(getAllCategories.fulfilled, (state, action) => {
            state.categories = action.payload
            state.status = "success";
          })
          .addCase(getAllCategories.rejected, (state, action) => {
            state.status = "fail";
            state.error = action.error.message;
          })
          .addCase(addNewCategory.fulfilled,(state,action)=>{
            state.categories.push(action.payload)
          })
          
          .addCase(updateCategory.fulfilled,(state,action)=>{
            if(!action.payload?.id){
              console.log('Could not complete update!')
              console.log(action.payload)
              return;
            }
    
            const categories = state.categories.filter(category => category.id !== action.payload.id)
            state.categories = [action.payload,...categories]
          })
          .addCase(deleteCategory.fulfilled,(state,action)=>{
            if(!action.payload?.id){
              console.log('Could not complete delete!')
              console.log(action.payload)
              return;
            }
    
            const categories = state.categories.filter(category => category.id !== action.payload.id)
            state.categories = categories
    
          })
      
         
        }
})

export const getCategoryStatus = (state) => state.categories.status;
export const getCategoryError = (state) => state.categories.error;
export const selectCategoryById = (state, categoryId) =>
  state.categories.categories.find((category) => category.id === categoryId);

export const selectAllCategories = state => state.categories.categories
export default categorySlice.reducer