import { useEffect, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import './FilterJob.css'
import Aos from "aos";
import { Link } from "react-router-dom";
import { selectAllJobPosts } from "./jobSlice";
import { getAlljobTypes, selectAllJobTypes } from "../jobTypes/jobTypeSlice";
import {
  getAllLocations,
  selectAllLocations,
} from "../locations/locationSlice";

const FilterJob = () => {
  const jobPosts = useSelector(selectAllJobPosts);
  const [selectedFilters, setSelectedFilters] = useState({
    jobPostTitle: "",
    jobTypeId: "",
    locationId: "",
  });

  const [filteredJobPosts, setFilteredJobPosts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllLocations());
    dispatch(getAlljobTypes());
  }, [dispatch]);

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const jobTypes = useSelector(selectAllJobTypes);
  const jobTypeOpt = jobTypes.map((jobType) => (
    <option key={jobType.id} value={jobType.id}>
      {jobType.type}
    </option>
  ));

  const locations = useSelector(selectAllLocations);
  const locationsOpt = locations.map((location) => (
    <option key={location.id} value={location.id}>
      {location.name}
    </option>
  ));

  const handleInputChange = (e) => {
    setSelectedFilters({
      ...selectedFilters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = () => {
    const { jobPostTitle, locationId, jobTypeId } = selectedFilters;
    console.log(jobPostTitle)
    console.log(locationId)
    console.log(jobTypeId)
  
    // Filter job posts based on selected filters
    const filteredData = jobPosts.filter((jobPost) => {
      if (jobPostTitle && !jobPost.title.toLowerCase().includes(jobPostTitle.toLowerCase())) {
        return false;
      }
      if (
        locationId &&
        jobPost.location &&
        String(jobPost.location.id) !== String(locationId)
      ) {
        return false;
      }
      if (
        jobTypeId &&
        jobPost.jobTypes &&
        String(jobPost.jobTypes.id) !== String(jobTypeId)
      ) {
        return false;
      }
      
      return true;
    });
  
    setFilteredJobPosts(filteredData);
  };

  const handleRefresh = () => {
    setSelectedFilters({
      jobPostTitle: "",
      jobTypeId: "",
      locationId: "",
    });
    setFilteredJobPosts([]);
  
    // Reset the selected options for job types and locations
    document.getElementById("jobTypeSelect").selectedIndex = 0;
    document.getElementById("locationSelect").selectedIndex = 0;
    handleSearch();
  };
  
  

  return (
    <>
      <div
        className="container bg-primary mb-2 fadeIn"
        data-delay="0.1s"
        style={{ padding: "30px" }}
      >
        <div className="container">
          <div className="row g-2 comSearch">
            <div className="col-md-12 justify-content-end align-items-center text-center">
              <div className="row g-2">
                <div className="col-md-3">
                  <input
                    type="text"
                    className="form-control border-0 h-100"
                    placeholder="Job Post Title"
                    name="jobPostTitle"
                    value={selectedFilters.jobPostTitle}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-3">
                  <select
                    className="form-select border-0"
                    id="jobTypeSelect"
                    name="jobTypeId"
                    onChange={handleInputChange}
                  >
                    <option value="">Choose Job Type</option>
                    {jobTypeOpt}
                  </select>
                </div>

                <div className="col-md-3">
                  <select
                    className="form-select border-0"
                    id="locationSelect"
                    name="locationId"
                    onChange={handleInputChange}
                  >
                    <option value="">Choose Location</option>
                    {locationsOpt}
                  </select>
                </div>
                <div className="col-md-2">
                  <button
                    className="searchCom btn btn-outline-secondary border-0 w-100"
                    onClick={handleSearch}
                  >
                    Search
                  </button>
                </div>
                <div className="col-md-1">
                  <button
                    className="refresh btn btn-outline-secondary border-0 w-100"
                    onClick={handleRefresh}
                  >
                    <i class="fas fa-rotate"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-3">
        <div className="container-fluid">
          <h1 className="text-center mb-5 wow" data-wow-delay="0.1s">
            Job Posts List
          </h1>

          {filteredJobPosts.length === 0 ? (
            <h3 className="text-center text-secondary">JobPosts not found!</h3>
          ) : (
            <div class="container  jobList mb-5 ">
          
            
            <div
              class="tab-class text-center wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div class="tab-content " data-aos="fade-up">
                <div id="tab-1" class="tab-pane fade show span-0 active">
                  {filteredJobPosts.map((jobPost) => (
                    <Link to={`/jobPost/${jobPost.id}`}>
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
                                <i class="fas fa-clock text-primary me-2"></i>
                                {jobPost.jobTypes.type}
                              </span>
                            </div>
                          </div>
                          <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                            <div class="d-flex mb-3">
                              <Link
                                class="heart btn btn-light me-2"
                                to=""
                              >
                                <i class="fa-solid fa-heart pt-2"></i>
                              </Link>
                              <Link
                                class="viewJobs btn btn-outline-primary"
                                to={`/jobPost/${jobPost.id}`}
                              >
                                <i class="fas fa-arrow-right"></i>
                              </Link>
                            </div>
                            <small class="text-truncate">
                              <i class="fas fa-calendar-alt text-primary me-2"></i>
                              DeadLine - {jobPost.deadLine}
                            </small>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                  <Link class="button btn-outline-primary " href="">
                    More Jobs <i class="fas fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
       
          )}
        </div>
      </div>
    </>
  );
};

export default FilterJob;
