import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { base_url } from "../config/baseUrl";
import axios from "axios";

const initialState = {
    locations: [],
    status: "idle",
    error: null,
  };

  const GET_URL = `${base_url}/location/all`;
  const POSTS_URL = `${base_url}/location/create`;

  export const getAllLocations = createAsyncThunk("locations/getAllLocations", async () => {
    const response = await axios.get(GET_URL);
  
    return [...response.data];
  });

  export const addNewLocation = createAsyncThunk(
    "locations/addNewLocation",
    async (location) => {
      console.log("%%%%%%%%%" + location);
      const response = await axios.post(POSTS_URL, location);
      return response.data;
    }
  );

  export const updateLocation = createAsyncThunk(
    "locations/updateLocation",
    async (location) => {
      const { id } = location;
      console.log(location)
      const response = await axios.put(`${base_url}/location/update/${id}`, location);
      return response.data;
    }
  );
  
  export const deleteLocation = createAsyncThunk(
    "locations/deleteLocation",
    async (locations) => {
      const { id } = locations;
      const response = await axios.delete(`${base_url}/location/delete/${id}`);
  
      if(response.status === 200)
      return locations;
      else
      return response.status ;
    }
  );



const locationSlice = createSlice({
    name: 'locations',
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder
          .addCase(getAllLocations.pending, (state, action) => {
            state.status = "loading";
          })
          .addCase(getAllLocations.fulfilled, (state, action) => {
            state.locations = action.payload
            state.status = "success";
          })
          .addCase(getAllLocations.rejected, (state, action) => {
            state.status = "fail";
            state.error = action.error.message;
          })
          .addCase(addNewLocation.fulfilled,(state,action)=>{
            state.locations.push(action.payload)
          })
           
          .addCase(updateLocation.fulfilled,(state,action)=>{
            if(!action.payload?.id){
              console.log('Could not complete update!')
              console.log(action.payload)
              return;
            }
    
            const locations = state.locations.filter(location => location.id !== action.payload.id)
            state.locations = [action.payload,...locations]
          })

          .addCase(deleteLocation.fulfilled,(state,action)=>{
            if(!action.payload?.id){
              console.log('Could not complete delete!')
              console.log(action.payload)
              return;
            }
    
            const locations = state.locations.filter(location => location.id !== location.payload.id)
            state.locations = locations
    
          })
      
         
        }
})

export const getLocationStatus = (state) => state.locations.status;
export const getLocationError = (state) => state.locations.error;
export const selectLocationById = (state, locationId) =>
  state.locations.locations.find((location) => location.id === locationId);
export const selectAllLocations = state => state.locations.locations
export default locationSlice.reducer