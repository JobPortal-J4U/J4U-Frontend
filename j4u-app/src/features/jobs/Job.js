import React, { useEffect, useState } from "react";
import "./Job.css";
import { Link } from "react-router-dom";

import Meta from "../../components/pages/Meta";
import JobList from "./JobList";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategories,
  selectAllCategories,
} from "../categories/categorySlice";

import { getAlljobTypes, selectAllJobTypes } from "../jobTypes/jobTypeSlice";
import { selectAllJobPosts } from "./jobSlice";

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

  const categories = useSelector(selectAllCategories);
  const categoryOpt = categories.map((category) => (
    <label class="container1  " key={category.id}>
      {category.name}
      <input type="checkbox" />
      <span class="checkmark"></span>
    </label>
  ));

  const jobTypes = useSelector(selectAllJobTypes);
  const jobTypesOpt = jobTypes.map((jobType) => (
    <label class="container1  " key={jobType.id}>
      {jobType.type}
      <input type="checkbox" />
      <span class="checkmark"></span>
    </label>
  ));

  const handleInputChange = (e) => {
    setSelectedFilters({
      ...selectedFilters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Meta title={"JobPost"} />

      <div>
        <h1 className="text-center text-dark my-3">JobPost Lists</h1>
      </div>
      {/* <FilterJob/> */}
      {/* <SearchJob/> */}
      <div className="container my-5">
        <div className="row">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control border-2 mb-4 jobInput"
              placeholder="Job Post Title"
              name="jobPostTitle"
              // value={selectedFilters.jobPostTitle}
              // onChange={handleInputChange}
            />
            <div class="accordion" id="accordionExample">
              <div class="accordion-item"></div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
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
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">{categoryOpt}</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
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
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">{jobTypesOpt}</div>
                </div>
              </div>
            </div>
            <button
            className="searchCom btn btn-outline-secondary border-1 w-100 my-4"
            
          >
            Search
          </button>
          </div>

          

          <div className="col-md-8">
            <JobList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Job;
