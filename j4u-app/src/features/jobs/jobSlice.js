import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url } from "../config/baseUrl";
import sub from "date-fns/sub";

const initialState = {
  jobPosts: [],
  status: "idle",
  error: null,
};

const GET_URL = `${base_url}/jobPost/all`;
const POSTS_URL = `${base_url}/jobPost/create`;
const PUT_URL = `${base_url}/jobPost/update`;
const DELETE_URL = `${base_url}/jobPost/delete`;

export const getAllJobPosts = createAsyncThunk(
  "jobPosts/getAlljobPosts",
  async () => {
    const response = await axios.get(GET_URL);

    return [...response.data];
  }
);

export const addNewJobPost = createAsyncThunk(
  "jobPosts/addNewJobPost",
  async (data) => {
    console.log("%%%%%%%%%" + data.jobPost);
    console.log("%%%%%%%%%" + data.companyId);
    console.log("%%%%%%%%%" + data.jobTypeId);
    const response = await axios.post(
      `${POSTS_URL}/${data.companyId}/${data.jobTypeId}/${data.categoryId}/${data.locationId}`,
      data.jobPost
    );
    return response.data;
  }
);

export const updateJobPost = createAsyncThunk(
  "jobPosts/updateJobPost",
  async (data) => {
    console.log("%%%%%%%%%" + data.jobPost);
    console.log("%%%%%%%%%" + data.companyId);
    console.log("%%%%%%%%%" + data.jobTypeId);
    console.log("%%%%%%%%%" + data.categoryId);
    const response = await axios.put(
      `${PUT_URL}/${data.companyId}/${data.jobTypeId}/${data.categoryId}/${data.locationId}`,
      data.jobPost
    );

    return response.data;
  }
);

export const deleteJobPost = createAsyncThunk(
  "jobPosts/deleteJobPost",
  async (jobPost) => {
    
    await axios.delete(`${DELETE_URL}/${jobPost.id}`);

    const response = await axios.get(GET_URL);
    return response.data;
  }
);

const jobSlice = createSlice({
  name: "jobPosts",
  initialState,
  reducers: {

    
// selectJobByFilter :(state,action )=> {
//   const { title, jobTypes,location } = action.payload;
// state.jobPosts.jobPosts.filter((jobPost) => title!=null? 
// (jobPost.jobTypes.type === jobTypes && jobPost.location.name === location):
// (jobPost.jobTypes.type === jobTypes && jobPost.location.name === location && jobPost.title === title )
// )
// },
},
  extraReducers(builder) {
    builder
      .addCase(getAllJobPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getAllJobPosts.fulfilled, (state, action) => {
        state.jobPosts = action.payload;
        state.status = "success";
      })
      .addCase(getAllJobPosts.rejected, (state, action) => {
        state.status = "fail";
        state.error = action.error.message;
      })
      .addCase(addNewJobPost.fulfilled, (state, action) => {
        state.jobPosts.push(action.payload);
      })

      .addCase(updateJobPost.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log("Could not complete update!");
          console.log(action.payload);
          return;
        }

        const jobPosts = state.jobPosts.filter(
          (jobPost) => jobPost.id !== action.payload.id
        );
        state.jobPosts = [action.payload, ...jobPosts];
      })

      .addCase(deleteJobPost.fulfilled, (state, action) => {
     
        state.jobPosts = action.payload;
      })
    }
});

export const getJobPostStatus = (state) => state.jobPosts.status;
export const getJobPostError = (state) => state.jobPosts.error;
export const selectJobPostById = (state, jobPostId) =>
  state.jobPosts.jobPosts.find((jobPost) => jobPost.id === jobPostId);
export const selectAllJobPosts = (state) => state.jobPosts.jobPosts;

export const selectJobByFilter = ((state,data )=> 
state.jobPosts.jobPosts.filter((jobPost) => data.title!=null? 
(jobPost.jobTypes.type === data.jobTypes && jobPost.location.name === data.location):
(jobPost.jobTypes.type === data.jobTypes && jobPost.location.name === data.location && jobPost.title === data.title )
))


export const selectJobByCategory =((state,categoryId)=> state.jobPosts.jobPosts.filter((jobPost)=> jobPost.category.id === categoryId))

export const selectJobPostByCompanyId = (state, companyId) =>
  state.jobPosts.jobPosts.filter((jobPost) => jobPost.company.id === companyId);

export default jobSlice.reducer;
