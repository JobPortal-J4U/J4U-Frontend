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
      <main>
        <div class="container-fluid  px-1 pt-4">
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
            <div class="container">
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
            </div>
          </div>
        </div>
      </main>
    </>
  );
  return content;
};

export default CompanyTable;
