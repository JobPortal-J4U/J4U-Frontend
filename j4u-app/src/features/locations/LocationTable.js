import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllLocations, selectAllLocations } from "./locationSlice";

const LocationTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllLocations());
  }, [dispatch]);

  const locations = useSelector(selectAllLocations);

  console.log("locatons are: " + locations);

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
              <div class=" col-md-8 mb-2">
                <i class="fas fa-table me-1"></i>
                Location DataTable
              </div>
              <div class=" col-md-4 my-2">
                <button className="btn btn-outline-primary">
                  <Link to="/admin/locationForm">Create More</Link>
                </button>
              </div>
            </div>
            <div class="m-4">
              <table class="table">
                <thead class="table-info">
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {locations.map((location,count) => (
                    <tr key={location.id}>
                      <td>{count+1}</td>
                      <td>{location.name}</td>
                      <td><Link to={`/editLocation/id/${location.id}`}>Edit</Link></td>
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

export default LocationTable;
