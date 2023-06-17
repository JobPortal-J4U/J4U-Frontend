import React, { useEffect } from "react";
import "./JobTable.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getAllJobPosts,
  getJobPostStatus,
  selectAllJobPosts,
} from "./jobSlice";
import { getAlljobTypes } from "../jobTypes/jobTypeSlice";
import Meta from "../../components/pages/Meta";
import { getAllCategories } from "../categories/categorySlice";
import { getAllLocations } from "../locations/locationSlice";
import { getAllCompanies } from "../companies/companySlice";
import JobItem from "./JobItem";

const JobTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getAllJobPosts(),
      getAllCategories(),
      getAllCompanies(),
      getAllLocations(),
      getAlljobTypes()
    );
  }, [dispatch]);

  const jobPosts = useSelector(selectAllJobPosts);

  const jobPostStatus = useSelector(getJobPostStatus);

  let content;
  let index = 1;

  if (jobPostStatus === "loading") {
    content = <p>Loading.....</p>;
  }
  content = (
    <>
      <Meta title={"JobTable"} />

      <main>
        <div className="container  px-1 pt-4">
       

          <div className="container">
            <div className="row">
              <div class=" col-md-10 pt-3">
                <i class="fas fa-table me-1"></i>
                JobPost DataTable
              </div>
              <div class=" col-md-2 pt-3 pb-3">
                <button className="btn btn-outline-primary">
                  <Link to="/admin/addJob">Create More</Link>
                </button>
              </div>
            </div>
            <div class="container ms-4">
              <div className="row">
                <div class="" id="no-more-tables">
                  <table class="table bg-white">
                    <thead class="table-info">
                      <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Company Logo</th>
                        <th>Type</th>
                        <th>Category</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {jobPosts.map((jobPost) => (
                        <JobItem
                          no={index++}
                          id={jobPost.id}
                          title={jobPost.title}
                          logo={jobPost.company.logo}
                          type={jobPost.jobTypes.type}
                          name={jobPost.category.name}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );

  return content;
};

export default JobTable;
