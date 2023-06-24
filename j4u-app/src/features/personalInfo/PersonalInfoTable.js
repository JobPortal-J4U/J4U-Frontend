import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./PersonalInfoTable.css";
import {
  getAllPersonalInfo,
  selectAllPersonalInfos,
} from "./personalinfoSlice";

const PersonalInfoTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPersonalInfo());
  }, [dispatch]);

  const personalInfos = useSelector(selectAllPersonalInfos);

  return (
    <>
      <main>
        <div class="container-fluid px-1 pt-4">
          <h1 class="mt-4">Tables</h1>
          <ol class="breadcrumb mb-4">
            <li class="breadcrumb-item">
              <a href="index.html">Dashboard</a>
            </li>
            <li class="breadcrumb-item active">Tables</li>
          </ol>

          <div class="card">
            <div class="container">
              <div class=" row">
                <div class="col-md-10 pt-3">
                  <i class="fas fa-table me-1"></i>
                  Personal Info DataTable
                </div>
                <div class="col-md-2 pt-3 pb-3">
                  <button class="btn btn-outline-primary border-rounded">
                    <Link to="/personalInfoForm">Create More</Link>
                  </button>
                </div>
              </div>
            </div>

            <div class="container">
              <div class="row">
                <div id="no-more-tables">
                  <table class="table bg-white">
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>NRC</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {personalInfos.map((personalInfo) => (
                        <tr key={personalInfo.id}>
                          <td data-title="ID">{personalInfo.id}</td>
                          <td data-title="Name">{personalInfo.name}</td>
                          <td data-title="NRC">{personalInfo.nrc}</td>
                          <td data-title="Address">{personalInfo.address}</td>
                          <td data-title="Phone">{personalInfo.phone}</td>
                          <td data-title="Action">
                            <Link
                              to={`/editPersonalInfo/id/${personalInfo.id}`}
                            >
                              <button
                                type="button"
                                class="btn btn-primary btn-sm"
                              >
                                Edit
                              </button>
                            </Link>
                          </td>
                        </tr>
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
};

export default PersonalInfoTable;