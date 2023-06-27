import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url } from "../config/baseUrl";

const initialState = {
    companies: [],
    status: "idle",
    error: null,
  };

let isdelete=true;

  const GET_URL = `${base_url}/company/all`;
  const POSTS_URL = `${base_url}/company/create`;

  export const getAllCompanies = createAsyncThunk("companies/getAllCompanies", async () => {
    const response = await axios.get(GET_URL);
  
    return [...response.data];
  });

  export const addNewCompany = createAsyncThunk(
    "companies/addCompany",
    async (company) => {
      console.log("%%%%%%%%%" + company);
      const response = await axios.post(POSTS_URL, company);
      return response.data;
    }
  );

  export const updateCompany = createAsyncThunk(
    "companies/updateCompany",
    async (company) => {
      const { id } = company;
      const response = await axios.put(`${base_url}/company/update/${id}`, company);
     
      return response.data;
    }
  );

  export const deleteCompany = createAsyncThunk(
    "companies/deleteCompany",
    async (company) => {
    var response='';
      try {
       
       await axios.delete(`${base_url}/company/delete/${company.id}`);
       response =  await axios.get(GET_URL);
      } catch (error) {
        isdelete=false;
       console.log("in the catchhhhh"+error)
      
      }
      
      return response.data;

     
    });


const companySlice = createSlice({
    name: 'companies',
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder
          .addCase(getAllCompanies.pending, (state, action) => {
            state.status = "loading";
          })
          .addCase(getAllCompanies.fulfilled, (state, action) => {
            state.companies = action.payload
            state.status = "success";
          })
          .addCase(getAllCompanies.rejected, (state, action) => {
            state.status = "fail";
            state.error = action.error.message;
          })
          .addCase(addNewCompany.fulfilled,(state,action)=>{
            state.companies.push(action.payload)
          })
          
          .addCase(updateCompany.fulfilled,(state,action)=>{
            if(!action.payload?.id){
              console.log('Could not complete update!')
              console.log(action.payload)
              return;
            }
    
            const companies = state.companies.filter(company => company.id !== action.payload.id)
            state.companies = [action.payload,...companies]
          })
          .addCase(deleteCompany.fulfilled,(state,action)=>{

            if(isdelete){
              state.error=""
              const companies = state.companies.filter(company => company.id !== action.payload.id)
              state.companies = companies

            }
            else{
              console.log("In delete fail block")              
              state.error="error"
              console.log("In delete fail block"+state.error)   
            }
            
    
          })
          .addCase(deleteCompany.rejected, (state, action) => {
            state.status = "fail";
            state.error = action.error.message;
          })
      
         
        }
})

export const getCompanyStatus = (state) => state.companies.status;
export const getCompanyError = (state) => state.companies.error;
export const selectCompanyById = (state, companyId) =>
  state.companies.companies.find((company) => company.id === companyId)

  export const selectCompanyByLocationId = (state, locationId) =>
  state.companies.companies.find((company) => company.location.id === locationId)

export const selectAllCompanies = state => state.companies.companies

export default companySlice.reducer