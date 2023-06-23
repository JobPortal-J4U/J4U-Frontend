import React, { useEffect, useState } from "react";
import "./Job.css";

import Meta from "../../components/pages/Meta";

import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategories,
  selectAllCategories,
} from "../categories/categorySlice";

import { getAlljobTypes, selectAllJobTypes } from "../jobTypes/jobTypeSlice";
import { selectAllJobPosts } from "./jobSlice";
import { Link } from "react-router-dom";

const Job = () => {
  const jobPosts = useSelector(selectAllJobPosts);
  const [selectedFilters, setSelectedFilters] = useState({
    jobPostTitle: "",
    jobTypeId: "",
    categoryId: "",
  });

  const [filteredJobPosts, setFilteredJobPosts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAlljobTypes());
  }, [dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const categories = useSelector((state) => selectAllCategories(state));
const jobTypes = useSelector((state) => selectAllJobTypes(state));


  // const categories = useSelector(selectAllCategories);
  const categoryOpt = categories.map((category) => (
    <label className="container1" key={category.id}>
      {category.name}
      <input
        type="checkbox"
        name="categoryId"
        value={category.id}
        checked={selectedFilters.categoryId === category.id}
        onChange={handleInputChange}
      />
      <span className="checkmark"></span>
    </label>
  ));

  // const jobTypes = useSelector(selectAllJobTypes);
  const jobTypesOpt = jobTypes.map((jobType) => (
    <label className="container1" key={jobType.id}>
      {jobType.type}
      <input
        type="checkbox"
        name="jobTypeId"
        value={jobType.id}
        checked={selectedFilters.jobTypeId === jobType.id} 
        onChange={handleInputChange}
      />
      <span className="checkmark"></span>
    </label>
  ));


  
  useEffect(() => {
    // Filter job posts based on selected filters
    const filteredPosts = jobPosts.filter((post) => {
      // Check if job post title contains the entered value
      if (
        selectedFilters.jobPostTitle &&
        !post.title.toLowerCase().includes(selectedFilters.jobPostTitle.toLowerCase())
      ) {
        return false;
      }
  
      // Check if the category filter is applied
      if (
        selectedFilters.categoryId &&
        parseInt(selectedFilters.categoryId) !== post.category.id
      ) {
        return false;
      }
  
      // Check if the job type filter is applied
      if (
        selectedFilters.jobTypeId &&
        parseInt(selectedFilters.jobTypeId) !== post.jobTypes.id
      ) {
        return false;
      }
  
      return true;
    });
  
    setFilteredJobPosts(filteredPosts);
  }, [jobPosts, selectedFilters]);
  
  
  
  
  

  // const handleSearch = () => {
  //   const filteredPosts = jobPosts.filter((post) => {
  //     // Check if job post title contains the entered value
  //     if (
  //       selectedFilters.jobPostTitle &&
  //       !post.title.includes(selectedFilters.jobPostTitle)
  //     ) {
  //       return false;
  //     }
  
  //     // Check if the category filter is applied
  //     if (
  //       selectedFilters.categoryId &&
  //       parseInt(selectedFilters.categoryId) !== post.categoryId
  //     ) {
  //       return false;
  //     }
  
  //     // Check if the job type filter is applied
  //     if (
  //       selectedFilters.jobTypeId &&
  //       parseInt(selectedFilters.jobTypeId) !== post.jobTypeId
  //     ) {
  //       return false;
  //     }
  
  //     return true;
  //   });
  
  //   setFilteredJobPosts(filteredPosts);
  // };
  

  return (
    <>
      <Meta title={"JobPost"} />

      <div>
        <h1 className="text-center text-dark my-3">JobPost Lists</h1>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control border-2 mb-4 jobInput"
              placeholder="Job Post Title"
              name="jobPostTitle"
              value={selectedFilters.jobPostTitle}
              onChange={handleInputChange}
            />
            <div className="accordion" id="accordionExample">
              <div className="accordion-item"></div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Category
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">{categoryOpt}</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    JobType
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">{jobTypesOpt}</div>
                </div>
              </div>
            </div>
            {/* <button
              className="searchCom btn btn-outline-secondary border-1 w-100 my-4"
              onClick={handleSearch}
            >
              Search
            </button> */}
          </div>

          <div className="col-md-8">
          <div className="container-fluid ">
        <div className="container-fluid">
        

          {filteredJobPosts.length === 0 ? (
            <h3 className="text-center text-secondary">JobPosts not found!</h3>
          ) : (
            <div class="container  jobList mb-5  ">
          
            
            <div
              class="tab-class text-center wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div class="tab-content " data-aos="fade-up">
                <div id="tab-1" class="tab-pane fade show span-0 active ">
                  {filteredJobPosts.map((jobPost) => (
                    <Link to={`/jobPost/${jobPost.id}`}>
                      <div class="job-item p-4 mb-4 text-dark">
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
                              <span class="text-truncate me-3">
                                <i class="fas fa-table text-primary me-2"></i>
                                {jobPost.category.name}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Job;
