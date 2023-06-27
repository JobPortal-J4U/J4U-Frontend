import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CompanyTable.css";

import {
  getAllCompanies,
  getCompanyStatus,
  selectAllCompanies,
} from "./companySlice";
import CompanyItem from "./CompanyItem";
import { Link } from "react-router-dom";

const CompanyTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCompanies());
  }, [dispatch]);

  const companies = useSelector(selectAllCompanies);
  const companyStatus = useSelector(getCompanyStatus);

  let content;
  let index = 1;

  if (companyStatus === "loading") {
    content = <p>Loading.....</p>;
  }

  content = (
    <>
    <div class="company">
        <div class="container-fluid  px-1 pt-2">
          <div className="container">
            <div className="row">
              <div class=" col-md-10 pt-3">
                <i class="fas fa-table me-1"></i>
                Companies DataTable
              </div>
              <div class=" col-md-2 pt-3 pb-3">
                <button className="btn btn-outline-primary">
                  <Link to="/admin/companyForm">Create More</Link>
                </button>
              </div>
            </div>
            {/* <div class="container">
              <div className="row">
                <div class="" id="no-more-tables">

                  
                  <table class="table bg-white">
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Logo</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {companies.map((company) => (
                        <CompanyItem
                          no={index++}
                          id={company.id}
                          name={company.name}
                          logo={company.logo}
                          phone={company.phone}
                          email={company.email}
                          address={company.address}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div> */}
            <div class="col-lg-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Bordered table</h4>
                  <p class="card-description">
                    Add class <code>.table-bordered</code>
                  </p>
                  <div class="table-responsive pt-3">
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th>
                            #
                          </th>
                          <th>
                            First name
                          </th>
                          <th>
                            Progress
                          </th>
                          <th>
                            Amount
                          </th>
                          <th>
                            Deadline
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            1
                          </td>
                          <td>
                            Herman Beck
                          </td>
                          <td>
                            <div class="progress">
                              <div class="progress-bar bg-success" role="progressbar" style={{width: "25%", ariaValuenow:"25", ariaValuemin:"0", ariaValuemax:"100"}}></div>
                            </div>
                          </td>
                          <td>
                            $ 77.99
                          </td>
                          <td>
                            May 15, 2015
                          </td>
                        </tr>
                        <tr>
                          <td>
                            2
                          </td>
                          <td>
                            Messsy Adam
                          </td>
                          <td>
                            <div class="progress">
                              <div class="progress-bar bg-danger" role="progressbar" style={{width: "75%", ariaValuenow:"75", ariaValuemin:"0", ariaValuemax:"100"}}></div>
                            </div>
                          </td>
                          <td>
                            $245.30
                          </td>
                          <td>
                            July 1, 2015
                          </td>
                        </tr>
                        <tr>
                          <td>
                            3
                          </td>
                          <td>
                            John Richards
                          </td>
                          <td>
                            <div class="progress">
                              <div class="progress-bar bg-warning" role="progressbar" style={{width: "90%", ariaValuenow:"90", ariaValuemin:"0", ariaValuemax:"100"}}></div>
                            </div>
                          </td>
                          <td>
                            $138.00
                          </td>
                          <td>
                            Apr 12, 2015
                          </td>
                        </tr>
                        <tr>
                          <td>
                            4
                          </td>
                          <td>
                            Peter Meggik
                          </td>
                          <td>
                            <div class="progress">
                              <div class="progress-bar bg-primary" role="progressbar" style={{width: "50%", ariaValuenow:"50", ariaValuemin:"0", ariaValuemax:"100"}}></div>
                            </div>
                          </td>
                          <td>
                            $ 77.99
                          </td>
                          <td>
                            May 15, 2015
                          </td>
                        </tr>
                        <tr>
                          <td>
                            5
                          </td>
                          <td>
                            Edward
                          </td>
                          <td>
                            <div class="progress">
                              <div class="progress-bar bg-danger" role="progressbar" style={{width: "35%", ariaValuenow:"35", ariaValuemin:"0", ariaValuemax:"100"}}></div>
                            </div>
                          </td>
                          <td>
                            $ 160.25
                          </td>
                          <td>
                            May 03, 2015
                          </td>
                        </tr>
                        <tr>
                          <td>
                            6
                          </td>
                          <td>
                            John Doe
                          </td>
                          <td>
                            <div class="progress">
                              <div class="progress-bar bg-info" role="progressbar" style={{width: "65%", ariaValuenow:"65", ariaValuemin:"0", ariaValuemax:"100"}}></div>
                            </div>
                          </td>
                          <td>
                            $ 123.21
                          </td>
                          <td>
                            April 05, 2015
                          </td>
                        </tr>
                        <tr>
                          <td>
                            7
                          </td>
                          <td>
                            Henry Tom
                          </td>
                          <td>
                            <div class="progress">
                              <div class="progress-bar bg-warning" role="progressbar" style={{width: "20%", ariaValuenow:"20", ariaValuemin:"0", ariaValuemax:"100"}}></div>
                            </div>
                          </td>
                          <td>
                            $ 150.00
                          </td>
                          <td>
                            June 16, 2015
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </>
  );
  return content;
};

export default CompanyTable;
