import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAlljobTypes, selectAllJobTypes } from "./jobTypeSlice";


const JobTypeTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAlljobTypes());
  }, [dispatch]);

  const jobTypes = useSelector(selectAllJobTypes);

  console.log("jobTypes are: " + jobTypes);

  return (
    <>
      <main>
        <div class="container-fluid px-4 my-5">
          <h1 class="mt-4">Tables</h1>
          <ol class="breadcrumb mb-4">
            <li class="breadcrumb-item">
              <a href="index.html">Dashboard</a>
            </li>
            <li class="breadcrumb-item active">Tables</li>
          </ol>

          <div class="card mb-4">
          <div className="card-header row">
              <div class=" col-md-8 mb-3">
                <i class="fas fa-table me-1"></i>
                JobType DataTable
              </div>
              <div class=" col-md-4">
                <button className="btn btn-outline-primary">
                  <Link to="/jobTypeForm">Create More</Link>
                </button>
              </div>
            </div>
            <div class="m-4">
              <table class="table">
                <thead class="table-info">
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Types</th>
                    <th scope="col">Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {jobTypes.map((jobType) => (
                    <tr key={jobType.id}>
                      <td>{jobType.id}</td>
                      <td>{jobType.type}</td>
                      <td><Link to={`/editJobType/id/${jobType.id}`}>Edit</Link></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default JobTypeTable;
