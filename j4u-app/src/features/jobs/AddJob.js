import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategories,
  selectAllCategories,
} from "../categories/categorySlice";
import {
  
  getAllLocations,
  selectAllLocations,
} from "../locations/locationSlice";
import {  getAlljobTypes, selectAllJobTypes } from "../jobTypes/jobTypeSlice";
import { Link, useNavigate } from "react-router-dom";
import "./AddJob.css";
import { addNewJobPost } from "./jobSlice";
import { useEffect } from "react";
import { getAllCompanies, selectAllCompanies } from "../companies/companySlice";
import Meta from '../../components/pages/Meta'

const AddJob = () => {

  const dispatch = useDispatch();

 

  const [title, setTitle] = useState("");
  const [descriptions, setDescriptions] = useState("");
  const [requirement, setRequirement] = useState("");
  const [skills, setSkills] = useState("");
  const [deadLine, setDeadLine] = useState("");
  const [publishedOn, setPublishedOn] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [salary, setSalary] = useState("");
  const [vancy, setVancy] = useState("");
  const [locationId, setLocationId] = useState("");
  const [jobTypeId, setJobTypeId] = useState("");
  const [companyId, setCompanyId] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const navigate = useNavigate();

  const categories = useSelector(selectAllCategories);
  const locations = useSelector(selectAllLocations);
  const jobsType = useSelector(selectAllJobTypes);
  const companies = useSelector(selectAllCompanies);


  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAlljobTypes());
    dispatch(getAllLocations());
    dispatch(getAllCompanies())
  }, [dispatch]);

  const onTitleChange = (e) => setTitle(e.target.value);
  const onDescriptionChange = (e) => setDescriptions(e.target.value);
  const onRequirementChange = (e) => setRequirement(e.target.value);
  const onSalaryChange = (e) => setSalary(e.target.value);
  const onVancyChange = (e) => setVancy(e.target.value);
  const onSkillChange = (e) => setSkills(e.target.value);
  const onCategoryChange = (e) => setCategoryId(e.target.value);
  const onLocationChange = (e) => setLocationId(e.target.value);
  const onJobTypesChange = (e) => setJobTypeId(e.target.value);
  const onDeadLineChange = (e) => setDeadLine(e.target.value);
  const onPublishedOnChange = (e) => setPublishedOn(e.target.value);
  const onCompanyChange = (e) => setCompanyId(e.target.value);

  const canSave =
    [
      title,
      salary,
      vancy,
      companyId,
      deadLine,
      publishedOn,
      jobTypeId,
      locationId,
      categoryId,
      descriptions,
      requirement,
      skills,
    ].every(Boolean) && addRequestStatus === "idle";

    console.log([
      title,
      salary,
      vancy,
      companyId,
      deadLine,
      publishedOn,
      jobTypeId,
      locationId,
      categoryId,
      descriptions,
      requirement,
      skills,
    ])
  console.log("can save is " + canSave);
  const onSaveJobPostClicked = () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        console.log("In the can save");
        // cat=useSelector(selectCategoryById(categoryId));
        // loc=useSelector(selectLocationById(locationId));
        // com= useSelector(selectCompanyById(companyId));
        // jobT=useSelector(selectJobTypeById(jobTypeId))

        dispatch(
          addNewJobPost({
            jobPost: {
              title,
              descriptions,
              requirement,
              skills,
              vancy,
              deadLine,
              publishedOn,
              salary 
            },locationId,companyId,jobTypeId,categoryId
          })
        ).unwrap();

        setTitle("");
        setDescriptions("");
        setRequirement("");
        setSkills("");
        setSalary("");
        setVancy("");
        setCategoryId("");
        setCompanyId("");
        setLocationId("");
        setJobTypeId("");
        setDeadLine("");
        setPublishedOn("");

        navigate(`/jobtable`);
      } catch (err) {
        console.error("Failed to save the JobPost", err);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };

 

  
  const categoriesOpt = categories.map((category) => (
    <option key={category.id} value={category.id} >
      {category.name}
    </option>
  ));

 

  const locationsOpt = locations.map((location) => (
    <option key={location.id} value={location.id}>
      {location.name}
    </option>
  ));


 
  const jobTypesOpt = jobsType.map((jobType) => (
    <option key={jobType.id} value={jobType.id}>
      {jobType.type}
    </option>
  ));

  const companyOpt = companies.map((company) => (
    <option key={company.id} value={company.id}>
      {company.name}
    </option>
  ));

  return (
    <section>
       <Meta title={"AddJob"} />
      
      <div id="layoutAuthentication" className=" my-5 justify-content-center">
        <div id="layoutAuthentication_content" className="mx-4">
          <main className="justify-content-center ">
            <div class="container ">
              <div class="row ">
                <div class="col-lg-5">
                  <div class="container shadow-lg border-0 rounded-lg  p-3 formCard" style={{marginTop: "2rem"}}>
                    <div class="card-header">
                      {" "}
                      <div class="d-flex flex-column  ">
                        <h3 class="text-center">Job Form</h3>
                      </div>
                    </div>
                    <div class="card-body my-3">
                      <form>
                        <div class="row">
                          <div class=" mb-3 col-md-4 h-100 ">
                            <label htmlFor="title">Job Title*</label>
                            <input
                              class="form-control"
                              id="title"
                              type="text"
                              placeholder="Job Title"
                              value={title}
                              onChange={onTitleChange}
                            />
                          </div>

                          <div class=" mb-3 col-md-4 h-100 ">
                            <label htmlFor="salary">Salary*</label>
                            <input
                              class="form-control"
                              id="salary"
                              type="text"
                              placeholder="Salary"
                              value={salary}
                              onChange={onSalaryChange}
                            />
                          </div>
                          <div class=" mb-3 col-md-4 h-100 ">
                            <label htmlFor="vancy">Vancy*</label>
                            <input
                              class="form-control"
                              id="vanct"
                              type="number"
                              placeholder="Vancy"
                              value={vancy}
                              onChange={onVancyChange}
                            />
                          </div>

                          <div class="mb-3">
                            <label htmlFor="descriptions">Description*</label>
                            <textarea
                              id="descriptions"
                              class="form-control"
                              value={descriptions}
                              onChange={onDescriptionChange}
                            />
                          </div>

                          <div class=" mb-3">
                            <label htmlFor="requirement">Requirements*</label>
                            <textarea
                              id="requirement"
                              class="form-control"
                              value={requirement}
                              onChange={onRequirementChange}
                            />
                          </div>
                          <div class=" mb-3">
                            <label htmlFor="skills">Skills*</label>
                            <textarea
                              id="skills"
                              class="form-control"
                              value={skills}
                              onChange={onSkillChange}
                            />
                          </div>
                          

                          <div class=" mb-3 col-md-6">
                            <label htmlFor="deadLine">Dead Line*</label>
                            <input
                              class="form-control deadLine"
                              id="deadLine"
                              type="date"
                              placeholder="deadLine"
                              value={deadLine}
                              onChange={onDeadLineChange}
                            />
                          </div>

                          <div class=" mb-3 col-md-6">
                            <label htmlFor="publishedOn">Published On*</label>
                            <input
                              class="form-control deadLine"
                              id="publishedOn"
                              type="date"
                              value={publishedOn}
                              onChange={onPublishedOnChange}
                            />
                          </div>

                          <div class=" mb-3 col-md-6">
                            <label htmlFor="jobTypeId">Job Types*</label>
                            <select
                              class="form-select"
                              aria-label="Default select example"
                              id="jobTypeId"
                              value={jobTypeId}
                              onChange={onJobTypesChange}
                              
                            >
                              <option value="">Choose JobPost Types</option>
                              {jobTypesOpt}
                            </select>
                          </div>

                          <div class=" mb-3 col-md-6">
                            <label htmlFor="locationId">Job Location*</label>
                            <select
                              class="form-select"
                              aria-label="Default select example"
                              id="locationId"
                              value={locationId}
                              onChange={onLocationChange}
                            >
                              <option value="">Choose Location</option>
                              {locationsOpt}
                            </select>
                          </div>

                          <div class=" mb-3 col-md-6">
                            <label htmlFor="categoryId">Job Category*</label>
                            <select
                              class="form-select"
                              aria-label="Default select example"
                              id="categoryId"
                              value={categoryId}
                              onChange={onCategoryChange}
                            >
                              <option value="">Choose Category</option>
                              {categoriesOpt}
                            </select>
                          </div>

                          <div class=" mb-3 col-md-6">
                            <label htmlFor="companyId"> Company Name*</label>
                            <select
                              class="form-select"
                              aria-label="Default select example"
                              id="companyId"
                              value={companyId}
                              onChange={onCompanyChange}
                            >
                              <option value="">Choose Company</option>
                              {companyOpt}
                            </select>
                          </div>



                          <div class="d-flex justify-content-end mt-4 mb-0">
                            <Link
                              class="btn btn-primary"
                              to="/admin/jobtable"
                              onClick={onSaveJobPostClicked}
                              disabled={!canSave}
                            >
                              Post A Job
                            </Link>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default AddJob;
