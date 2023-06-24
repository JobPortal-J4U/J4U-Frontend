import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url } from "../config/baseUrl";

const initialState = {
  educations: [],
  status: "idle",
  error: null,
};

const GET_URL = `${base_url}/education/all`;
const POSTS_URL = `${base_url}/education/create`;

export const getAllEducations = createAsyncThunk(
  "education/getAllEducations",
  async () => {
    const response = await axios.get(GET_URL);

    return [...response.data];
  }
);

export const addNewEducation = createAsyncThunk(
  "education/addNewEducation",
  async (educations) => {
    console.log("%%%%%%%%%" + educations);
    const response = await axios.post(POSTS_URL, educations);
    return response.data;
  }
);

export const updateEducation = createAsyncThunk(
  "educations/updateEducation",
  async (educations) => {
    const { id } = educations;
    const response = await axios.put(
      `${base_url}/education/update/${id}`,
      educations
    );

    return response.data;
  }
);

export const deleteEducations = createAsyncThunk(
  "educations/deleteEducations",
  async (educations) => {
    const { id } = educations;
    console.log(educations);
    const response = await axios.delete(`${base_url}/education/delete/${id}`);

    if (response.status === 200) return educations;
    else return response.status;
  }
);

const eduSlice = createSlice({
  name: "educations",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllEducations.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getAllEducations.fulfilled, (state, action) => {
        state.educations = action.payload;
        state.status = "success";
      })
      .addCase(getAllEducations.rejected, (state, action) => {
        state.status = "fail";
        state.error = action.error.message;
      })
      .addCase(addNewEducation.fulfilled, (state, action) => {
        state.educations.push(action.payload);
      })

      .addCase(updateEducation.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log("Could not complete update!");
          console.log(action.payload);
          return;
        }

        const educations = state.educations.filter(
          (education) => education.id !== action.payload.id
        );
        state.educations = [action.payload, ...educations];
      })

      .addCase(deleteEducations.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log("Could not complete delete!");
          console.log(action.payload);
          return;
        }

        const educations = state.educations.filter(
          (education) => education.id !== action.payload.id
        );
        state.educations = educations;
      });
  },
});

export const getEducationtatus = (state) => state.educations.status;
export const getEducationError = (state) => state.educations.error;
export const selectEducationById = (state, educationId) =>
  state.educations.educations.find((education) => education.id === educationId);

export const selectAllEducations = (state) => state.educations.educations;

export default eduSlice.reducer;
