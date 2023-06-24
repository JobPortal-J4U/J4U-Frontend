import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllExperiences, selectAllExperiences } from "./expSlice";

const ExpTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllExperiences());
  }, [dispatch]);

  const experiences = useSelector(selectAllExperiences);

  return (
    <>
      <main>
        <div class="container-fluid px-4 mt-5">
          <h1 class="mt-4">Tables</h1>
          <ol class="breadcrumb mb-4">
            <li class="breadcrumb-item">
              <a href="index.html">Dashboard</a>
            </li>
            <li class="breadcrumb-item active">Tables</li>
          </ol>

          <div class="card mb-4 comTable" >
            <div className="card-header row">
              <div class=" col-md-10">
                <i class="fas fa-table me-1"></i>
                Experiences DataTable
              </div>
              <div class=" col-md-2">
                <button className="btn btn-outline-primary">
                  <Link to="/expForm">Create More</Link>
                </button>
              </div>
            </div>
            <div class="card-body">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Position</th>
                    <th scope="col">Company</th>
                    <th scope="col">StartDate</th>
                    <th scope="col">EndDate</th>
                    <th scope="col">Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {experiences.map((experience,count) => (
                    <tr key={experience.id}>
                      <td>{count+1}</td>
                      <td>{experience.position}</td>
                      <td>{experience.companyName}</td>
                      <td>{experience.startDates}</td>
                      <td>{experience.endDates}</td>
                      <td><Link to={`/editExp/id/${experience.id}`}>Edit</Link></td>
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

export default ExpTable;
