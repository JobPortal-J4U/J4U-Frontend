import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url } from "../config/baseUrl";

const initialState = {
  personalInfos: [],
  status: "idle",
  error: null,
};

const GET_URL = `${base_url}/info/all`;
const POSTS_URL = `${base_url}/info/create`;

export const getAllPersonalInfo = createAsyncThunk(
  "info/getAllPersonalInfo",
  async () => {
    const response = await axios.get(GET_URL);

    return [...response.data];
  }
);

export const addNewPersonalInfo = createAsyncThunk(
  "info/addNewPersonalInfo",
  async (personalInfos) => {
    console.log("%%%%%%%%%" + personalInfos);
    const response = await axios.post(POSTS_URL, personalInfos);
    return response.data;
  }
);

export const updatePersonalInfos = createAsyncThunk(
  "info/updatePersonalInfos",
  async (personalInfos) => {
    const { id } = personalInfos;
    const response = await axios.put(
      `${base_url}/info/update/${id}`,
      personalInfos
    );

    return response.data;
  }
);

export const deletePersonalInfo = createAsyncThunk(
  "info/deletePersonalInfo",
  async (personalInfos) => {
    const { id } = personalInfos;
    console.log(personalInfos);
    const response = await axios.delete(`${base_url}/info/delete/${id}`);

    if (response.status === 200) return personalInfos;
    else return response.status;
  }
);

const personalinfoSlice = createSlice({
  name: "personalInfos",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllPersonalInfo.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getAllPersonalInfo.fulfilled, (state, action) => {
        state.personalInfos = action.payload;
        state.status = "success";
      })
      .addCase(getAllPersonalInfo.rejected, (state, action) => {
        state.status = "fail";
        state.error = action.error.message;
      })
      .addCase(addNewPersonalInfo.fulfilled, (state, action) => {
        state.personalInfos.push(action.payload);
      })

      .addCase(updatePersonalInfos.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log("Could not complete update!");
          console.log(action.payload);
          return;
        }

        const personalInfos = state.personalInfos.filter(
          (personalInfo) => personalInfo.id !== action.payload.id
        );
        state.personalInfos = [action.payload, ...personalInfos];
      })

      .addCase(deletePersonalInfo.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log("Could not complete delete!");
          console.log(action.payload);
          return;
        }

        const personalInfos = state.personalInfos.filter(
          (personalInfo) => personalInfo.id !== action.payload.id
        );
        state.personalInfos = personalInfos;
      });
  },
});

export const getPersonalInfoStatus = (state) => state.personalInfos.status;
export const getPersonalInfoError = (state) => state.personalInfos.error;
export const selectPersonalInfoById = (state, personalInfoId) =>
  state.personalInfos.personalInfos.find(
    (personalInfo) => personalInfo.id === personalInfoId
  );

export const selectAllPersonalInfos = (state) => state.personalInfos.personalInfos;

export default personalinfoSlice.reducer;
