import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url } from "../config/baseUrl";

const initialState = {
  experiences: [],
  status: "idle",
  error: null,
};

const GET_URL = `${base_url}/experience/all`;
const POSTS_URL = `${base_url}/experience/create`;

export const getAllExperiences = createAsyncThunk(
  "experience/getAllExperiences",
  async () => {
    const response = await axios.get(GET_URL);

    return [...response.data];
  }
);

export const addNewExperience = createAsyncThunk(
  "experience/addNewExperience",
  async (experiences) => {
    console.log("%%%%%%%%%" + experiences);
    const response = await axios.post(POSTS_URL, experiences);
    return response.data;
  }
);

export const updateExperience = createAsyncThunk(
  "experience/updateExperience",
  async (experiences) => {
    const { id } = experiences;
    const response = await axios.put(
      `${base_url}/experience/update/${id}`,
      experiences
    );

    return response.data;
  }
);

export const deleteExperience = createAsyncThunk(
  "experience/deleteExperience",
  async (experiences) => {
    const { id } = experiences;
    console.log(experiences);
    const response = await axios.delete(`${base_url}/experience/delete/${id}`);

    if (response.status === 200) return experiences;
    else return response.status;
  }
);

const expSlice = createSlice({
  name: "experiences",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllExperiences.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getAllExperiences.fulfilled, (state, action) => {
        state.experiences = action.payload;
        state.status = "success";
      })
      .addCase(getAllExperiences.rejected, (state, action) => {
        state.status = "fail";
        state.error = action.error.message;
      })
      .addCase(addNewExperience.fulfilled, (state, action) => {
        state.experiences.push(action.payload);
      })

      .addCase(updateExperience.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log("Could not complete update!");
          console.log(action.payload);
          return;
        }

        const experiences = state.experiences.filter(
          (experience) => experience.id !== action.payload.id
        );
        state.experiences = [action.payload, ...experiences];
      })

      .addCase(deleteExperience.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log("Could not complete delete!");
          console.log(action.payload);
          return;
        }

        const experiences = state.experiences.filter(
          (experience) => experience.id !== action.payload.id
        );
        state.experiences = experiences;
      });
  },
});

export const getExperienceStatus = (state) => state.experiences.status;
export const getExperienceError = (state) => state.experiences.error;
export const selectExperienceById = (state, experienceId) =>
  state.experiences.experiences.find(
    (experience) => experience.id === experienceId
  );

export const selectAllExperiences = (state) => state.experiences.experiences;

export default expSlice.reducer;
