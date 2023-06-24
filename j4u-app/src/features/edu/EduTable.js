import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllEducations, selectAllEducations } from "./eduSlice";

const EduTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEducations());
  }, [dispatch]);

  const educations = useSelector(selectAllEducations);

  

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
                Educations DataTable
              </div>
              <div class=" col-md-2">
                <button className="btn btn-outline-primary">
                  <Link to="/eduForm">Create More</Link>
                </button>
              </div>
            </div>
            <div class="card-body">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">HighSchool</th>
                    <th scope="col">Degree</th>
                    <th scope="col">StartDate</th>
                    <th scope="col">EndDate</th>
                    <th scope="col">Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {educations.map((education,count) => (
                    <tr key={education.id}>
                      <td>{count+1}</td>
                      <td>{education.id}</td>
                      <td>{education.highSchoolName}</td>
                      <td>{education.degreeName}</td>
                      <td>{education.startDate}</td>
                      <td>{education.endDate}</td>
                      <td><Link to={`/editEdu/id/${education.id}`}>Edit</Link></td>
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

export default EduTable;
