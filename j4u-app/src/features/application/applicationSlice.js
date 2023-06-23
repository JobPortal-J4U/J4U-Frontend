import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url } from "../config/baseUrl";

// API URLs for each entity
const GET_PERSONAL_INFO_URL = `${base_url}/personalInfo`;
const GET_EXPERIENCE_URL = `${base_url}/experience`;
const GET_EDUCATION_URL = `${base_url}/education`;

const POST_PERSONAL_INFO_URL = `${base_url}/personalInfo/create`;
const POST_EXPERIENCE_URL = `${base_url}/experience/create`;
const POST_EDUCATION_URL = `${base_url}/education/create`;
const SUBMIT_APPLICATION = `${base_url}/application/submit`;

const initialState = {
  personalInfo: [],
  experience: [],
  education: [],
  status: "idle",
  error: null,
};

// Async Thunks for fetching data

export const fetchPersonalInfo = createAsyncThunk(
  "applications/fetchPersonalInfo",
  async () => {
    const response = await axios.get(GET_PERSONAL_INFO_URL);
    return response.data;
  }
);

export const fetchExperience = createAsyncThunk(
  "applications/fetchExperience",
  async () => {
    const response = await axios.get(GET_EXPERIENCE_URL);
    return response.data;
  }
);

export const fetchEducation = createAsyncThunk(
  "applications/fetchEducation",
  async () => {
    const response = await axios.get(GET_EDUCATION_URL);
    return response.data;
  }
);

// Async Thunks for creating data

export const createPersonalInfo = createAsyncThunk(
  "applications/createPersonalInfo",
  async (personalInfoData) => {
    
    const response = await axios.post(POST_PERSONAL_INFO_URL, personalInfoData);
    return response.data;
  }
);

export const createExperience = createAsyncThunk(
  "applications/createExperience",
  async (experienceData) => {
    const response = await axios.post(POST_EXPERIENCE_URL, experienceData);
    return response.data;
  }
);

export const createEducation = createAsyncThunk(
    "applications/createEducation",
    async (educationData) => {
      const response = await axios.post(POST_EDUCATION_URL, educationData);
      return response.data;
    }
  );

export const submitApplication = createAsyncThunk(
    "applications/submitApplication",
    async (formData) => {
     const personalInfo=formData.personalInfo;
     const experiencesLst=formData.experience;
     const educationLst=formData.education;
     const jobPostId=Number(formData.jobPostId);
     const user=formData.user;
      // Submit personal info
      const response = await axios.post(
        SUBMIT_APPLICATION,{personalInfo,experiencesLst,educationLst,user,jobPostId});
        return response.data;
    }
  );




const applicationSlice = createSlice({
  name: "applications",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPersonalInfo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPersonalInfo.fulfilled, (state, action) => {
        state.personalInfo = action.payload;
        state.status = "success";
      })
      .addCase(fetchPersonalInfo.rejected, (state, action) => {
        state.status = "fail";
        state.error = action.error.message;
      })
      .addCase(fetchExperience.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchExperience.fulfilled, (state, action) => {
        state.experience = action.payload;
        state.status = "success";
      })
      .addCase(fetchExperience.rejected, (state, action) => {
        state.status = "fail";
        state.error = action.error.message;
      })
      .addCase(fetchEducation.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEducation.fulfilled, (state, action) => {
        state.education = action.payload;
        state.status = "success";
      })
      .addCase(fetchEducation.rejected, (state, action) => {
        state.status = "fail";
        state.error = action.error.message;
      })
      .addCase(createPersonalInfo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createPersonalInfo.fulfilled, (state, action) => {
        state.personalInfo.push(action.payload);
        state.status = "success";
      })
      .addCase(createPersonalInfo.rejected, (state, action) => {
        state.status = "fail";
        state.error = action.error.message;
      })
      .addCase(createExperience.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createExperience.fulfilled, (state, action) => {
        state.experience.push(action.payload);
        state.status = "success";
      })
      .addCase(createExperience.rejected, (state, action) => {
        state.status = "fail";
        state.error = action.error.message;
      })
      .addCase(createEducation.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createEducation.fulfilled, (state, action) => {
        state.education.push(action.payload);
        state.status = "success";
      })
      .addCase(createEducation.rejected, (state, action) => {
        state.status = "fail";
        state.error = action.error.message;
      })
      .addCase(submitApplication.pending, (state) => {
        state.status = "loading";
      })
      .addCase(submitApplication.fulfilled, (state, action) => {
        const { personalInfo, experience, education } = action.payload;

        // Update the state with the submitted data
        state.personalInfo.push(personalInfo);
        state.experience.push(experience);
        state.education.push(education);

        state.status = "success";
      })
      .addCase(submitApplication.rejected, (state, action) => {
        state.status = "fail";
        state.error = action.error.message;
      })
  },
});

export const getApplicationStatus = (state) => state.applications.status;
export const getApplicationError = (state) => state.applications.error;
export const selectPersonalInfo = (state) => state.applications.personalInfo;
export const selectExperience = (state) => state.applications.experience;
export const selectEducation = (state) => state.applications.education;

export default applicationSlice.reducer;
