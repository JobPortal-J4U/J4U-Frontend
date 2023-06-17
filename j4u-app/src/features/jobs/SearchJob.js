import React from "react";
import "./SearchJob.css";
import { getAlljobTypes, selectAllJobTypes } from "../jobTypes/jobTypeSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getAllLocations,
  selectAllLocations,
} from "../locations/locationSlice";
import { useState } from "react";
import { Link } from "react-router-dom";
import { selectAllJobPosts, selectJobByFilter } from "./jobSlice";

const SearchJob = () => {
  var searchJobs;
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedJobType, setSelectedJobType] = useState("");
  const [title, setTitle] = useState("");

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const handleJobTypeChange = (e) => {
    setSelectedJobType(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllLocations());
    dispatch(getAlljobTypes());
  }, [dispatch]);

  const jobPosts = useSelector(selectAllJobPosts);

  const locations = useSelector(selectAllLocations);
  const locationsOpt = locations.map((location) => (
    <option key={location.name} value={location.name}>
      {location.name}
    </option>
  ));

  const jobsType = useSelector(selectAllJobTypes);
  const jobTypesOpt = jobsType.map((jobType) => (
    <option key={jobType.type} value={jobType.type}>
      {jobType.type}
    </option>
  ));

   searchJobs=useSelector((state)=>selectJobByFilter(state,{
    title: title,
    jobTypes: selectedJobType,
    location: selectedLocation,
  }))

  if(title==='' && selectedJobType==='' &&selectedLocation===''){
    searchJobs=jobPosts
  }

  console.log("Search value in title text box"+title);
  console.log("Search value in selectedJobType text box"+selectedJobType);
  console.log("Search value in selectedLocation text box"+selectedLocation);

  console.log("search job" + searchJobs)
  console.log(" job length" + jobPosts.length)

  const onSearchClick = () => {
    if(title==='' && selectedJobType==='' &&selectedLocation===''){
      searchJobs=jobPosts
    }

    setTitle("");
    setSelectedJobType("");
    setSelectedLocation("");
  };

  // const filteredJobPosts = jobPosts.filter((jobPost) => {
  //   if (selectedLocation && jobPost.location !== selectedLocation) {
  //     return false;
  //   }

  //   if (selectedJobType && jobPost.jobType !== selectedJobType) {
  //     return false;
  //   }

  //   return true;
  // });

  return (
    <>
      <div
        className="container bg-primary mb-2  fadeIn search"
        data-delay="0.1s"
        style={{ padding: "30px" }}
      >
        <div className="container">
          <div className="row g-2">
            <div className="col-md-10">
              <div className="row g-2">
                <div className="col-md-4">
                  <input
                    value={title}
                    type="text"
                    className="form-control border-0 h-100"
                    placeholder="Your Skill or Job Title"
                    onChange={handleTitleChange}
                  />
                </div>
                <div className="col-md-4">
                  <select
                    class="form-select border-0"
                    value={selectedJobType}
                    onChange={handleJobTypeChange}
                  >
                    <option value="">Choose JobType</option>
                    {jobTypesOpt}
                  </select>
                </div>

                <div className="col-md-4">
                  <select
                    class="form-select border-0"
                    value={selectedLocation}
                    onChange={handleLocationChange}
                  >
                    <option value="">Choose Location</option>
                    {locationsOpt}
                  </select>
                </div>
              </div>
            </div>
            <div class="col-md-2">
              <button
                class="searchJobs btn btn-outline-secondary border-0 w-100"
                onClick={onSearchClick}
              >
                Search JOB
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="container  jobList mb-5 ">
        <div class="container">
          <h1 class="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
            Job Listing
          </h1>
          <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
            <div class="tab-content " data-aos="fade-up">
              <div id="tab-1" class="tab-pane fade show span-0 active">
                {jobPosts && searchJobs.map((jobPost) => (
                  <div class="job-item p-4 mb-4">
                    <div class="row g-4">
                      <div class="col-sm-12 col-md-8 d-flex align-items-center">
                        <img
                        class="flex-shrink-0 img-fluid border rounded"
                        src={jobPost.company.logo}
                        alt=""
                        style={{ width: "80px", height: "80px" }}
                      />
                      
                        <div class="text-start ps-4" key={jobPost.id}>
                          <h5 class="mb-3">{jobPost.title}</h5>
                          <span class="text-truncate me-3">
                            <i class="fa fa-map-marker-alt text-primary me-2"></i>
                            {jobPost.location.name}
                          </span>
                          <span class="text-truncate me-3">
                            <i class="far fa-clock text-primary me-2"></i>
                            {jobPost.jobTypes.type}
                          </span>
                        </div>
                      </div>
                      <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                        <div class="d-flex mb-3" key={jobPost.id}>
                          <Link class="btn btn-light btn-square me-3" href="">
                            <i class="far fa-heart text-primary"></i>
                          </Link>
                          <Link
                            class="viewJobs btn btn-outline-primary"
                            to={`/jobPost/${jobPost.id}`}
                          >
                            <i class="fas fa-arrow-right"></i>
                          </Link>
                        </div>
                        <small class="text-truncate">
                          <i class="far fa-calendar-alt text-primary me-2"></i>
                          DeadLine - {jobPost.deadLine}
                        </small>
                      </div>
                    </div>
                  </div>
                ))}
                <Link class="button btn-outline-primary " href="">
                  More Jobs <i class="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchJob;
