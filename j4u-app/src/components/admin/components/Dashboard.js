import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div class="content" style={{marginTop: "4rem"}}>
        <div class="container-fluid  pt-4">
          <div class="row g-4">
            <div class="col-sm-6 col-xl-3 adminCard " style={{borderColor: "#2d2d2d"}}>
              <Link to="/admin/userTable" class="bg-light rounded d-flex align-items-center justify-content-between p-4 hover-shadow">
                <i class="fa-solid fa-users fa-3x text-primary"></i>
                <div class="ms-3">
                  <p class="mb-2">Users</p>
                  <h6 class="mb-0">Total : 1234</h6>
                </div>
              </Link>
            </div>
            <div class="col-sm-6 col-xl-3">
              <Link to="/admin/companyTable" class="bg-light rounded d-flex align-items-center justify-content-between p-4 hover-shadow">
                <i class="fa-solid fa-city fa-3x text-primary"></i>
                <div class="ms-3">
                  <p class="mb-2">Company</p>
                  <h6 class="mb-0">Total : 234</h6>
                </div>
              </Link>
            </div>
            <div class="col-sm-6 col-xl-3">
              <Link to="/admin/jobTypeTable" class="bg-light rounded d-flex align-items-center justify-content-between p-4 hover-shadow">
                <i class="fa-solid fa-briefcase fa-3x text-primary"></i>
                <div class="ms-3">
                  <p class="mb-2">Job Type</p>
                  <h6 class="mb-0">Total : 9</h6>
                </div>
              </Link>
            </div>
            <div class="col-sm-6 col-xl-3 ">
              <Link to="/admin/locationTable"class="bg-light rounded d-flex align-items-center justify-content-between p-4 hover-shadow">
                <i class="fa-solid fa-globe fa-3x text-primary"></i>
                <div class="ms-3">
                  <p class="mb-2">Location</p>
                  <h6 class="mb-0">Total :34</h6>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div class="col-lg-12 grid-margin stretch-card pt-4 mx-4" style={{paddingRight: "3rem"}}>
          <div class="card shadow-lg mb-5 bg-body rounded">
            <div class="card-body">
              <div class="row">
                <div class="col-8">
                  <h4 class="card-title d-flex justify-content-start">
                    Job Post
                  </h4>
                </div>
                <div class="col-2" style={{marginLeft: "8rem"}}>
                  <Link to="/admin/jobtable" class="text-decoration-underline">
                    Show More
                  </Link>
                </div>
              </div>

              <div class="table-responsive pt-3">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First name</th>
                      <th>Amount</th>
                      <th>Deadline</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Herman Beck</td>
                      <td>$ 77.99</td>
                      <td>May 15, 2015</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Messsy Adam</td>
                      <td>$245.30</td>
                      <td>July 1, 2015</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>John Richards</td>
                      <td>$138.00</td>
                      <td>Apr 12, 2015</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Peter Meggik</td>
                      <td>$ 77.99</td>
                      <td>May 15, 2015</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Edward</td>
                      <td>$ 160.25</td>
                      <td>May 03, 2015</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>John Doe</td>
                      <td>$ 123.21</td>
                      <td>April 05, 2015</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Henry Tom</td>
                      <td>$ 150.00</td>
                      <td>June 16, 2015</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* <div class="container-fluid pt-4 px-4">
          <div class="bg-light text-center rounded p-4">
            <div class="d-flex align-items-center justify-content-between mb-4">
              <h6 class="mb-0">Recent Salse</h6>
              <Link to="">Show All</Link>
            </div>
            <div class="table-responsive">
              <table class="table text-start align-middle table-bordered table-hover mb-0">
                <thead>
                  <tr class="text-dark">
                    <th scope="col">
                      <input class="form-check-input" type="checkbox"></input>
                    </th>
                    <th scope="col">Date</th>
                    <th scope="col">Invoice</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input class="form-check-input" type="checkbox"></input>
                    </td>
                    <td>01 Jan 2045</td>
                    <td>INV-0123</td>
                    <td>Jhon Doe</td>
                    <td>$123</td>
                    <td>Paid</td>
                    <td>
                      <a class="btn btn-sm btn-primary" href="">
                        Detail
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input class="form-check-input" type="checkbox"></input>
                    </td>
                    <td>01 Jan 2045</td>
                    <td>INV-0123</td>
                    <td>Jhon Doe</td>
                    <td>$123</td>
                    <td>Paid</td>
                    <td>
                      <a class="btn btn-sm btn-primary" href="">
                        Detail
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input class="form-check-input" type="checkbox"></input>
                    </td>
                    <td>01 Jan 2045</td>
                    <td>INV-0123</td>
                    <td>Jhon Doe</td>
                    <td>$123</td>
                    <td>Paid</td>
                    <td>
                      <a class="btn btn-sm btn-primary" href="">
                        Detail
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input class="form-check-input" type="checkbox"></input>
                    </td>
                    <td>01 Jan 2045</td>
                    <td>INV-0123</td>
                    <td>Jhon Doe</td>
                    <td>$123</td>
                    <td>Paid</td>
                    <td>
                      <a class="btn btn-sm btn-primary" href="">
                        Detail
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input class="form-check-input" type="checkbox"></input>
                    </td>
                    <td>01 Jan 2045</td>
                    <td>INV-0123</td>
                    <td>Jhon Doe</td>
                    <td>$123</td>
                    <td>Paid</td>
                    <td>
                      <a class="btn btn-sm btn-primary" href="">
                        Detail
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Dashboard;
