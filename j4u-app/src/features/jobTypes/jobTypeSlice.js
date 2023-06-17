import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { base_url } from "../config/baseUrl";
import axios from "axios";

const initialState = {
    jobTypes: [],
    status: "idle",
    error: null,
  };

  const GET_URL = `${base_url}/jobTypes/all`;
  const POSTS_URL = `${base_url}/jobTypes/create`;

  export const getAlljobTypes = createAsyncThunk("jobTypes/getAlljobTypes", async () => {
    const response = await axios.get(GET_URL);
  
    return [...response.data];
  });

  export const addNewJobType = createAsyncThunk(
    "jobTypes/addNewJobType",
    async (jobType) => {
      
      const response = await axios.post(POSTS_URL, jobType);
      return response.data;
    }
  );

  export const updateJobtype = createAsyncThunk(
    "jobTypes/updateJobtype",
    async (jobType) => {
      const { id } = jobType;
      console.log(jobType)
      const response = await axios.put(`${base_url}/jobTypes/update/${id}`, jobType);
      return response.data;
    }
  );

  export const deleteJobType = createAsyncThunk(
    "jobTypes/deleteJobTYpe",
    async (jobTypes) => {
      const { id } = jobTypes;
      const response = await axios.delete(`${base_url}/jobTypes/delete/${id}`);
  
      if(response.status === 200)
      return jobTypes;
      else
      return response.status ;
    }
  );
  


const jobTypeslice = createSlice({
    name: 'jobTypes',
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder
          .addCase(getAlljobTypes.pending, (state, action) => {
            state.status = "loading";
          })
          .addCase(getAlljobTypes.fulfilled, (state, action) => {
            state.jobTypes = action.payload
            state.status = "success";
          })
          .addCase(getAlljobTypes.rejected, (state, action) => {
            state.status = "fail";
            state.error = action.error.message;
          })
          .addCase(addNewJobType.fulfilled,(state,action)=>{
            state.jobTypes.push(action.payload)
          })
          
          .addCase(updateJobtype.fulfilled,(state,action)=>{
            if(!action.payload?.id){
              console.log('Could not complete update!')
              console.log(action.payload)
              return;
            }
    
            const jobTypes = state.jobTypes.filter(jobType => jobType.id !== action.payload.id)
            state.jobTypes = [action.payload,...jobTypes]
          })

          .addCase(deleteJobType.fulfilled,(state,action)=>{
            if(!action.payload?.id){
              console.log('Could not complete delete!')
              console.log(action.payload)
              return;
            }
    
            const jobTypes = state.jobTypes.filter(jobType => jobType.id !== action.payload.id)
            state.jobTypes = jobTypes
    
          })
      
         
        }
})

export const getjobTypestatus = (state) => state.jobTypes.status;
export const getJobTypeError = (state) => state.jobTypes.error;
export const selectJobTypeById = (state, jobTypeId) =>
  state.jobTypes.jobTypes.find((jobType) => jobType.id === jobTypeId);
export const selectAllJobTypes = state => state.jobTypes.jobTypes
export default jobTypeslice.reducer