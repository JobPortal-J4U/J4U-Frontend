import React from "react";
import "./UserProfile.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, selectAllUsers } from "../user/userSlice";
import { useEffect } from "react";

const UserProfile = () => {
const dispatch = useDispatch()

useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const users = useSelector(selectAllUsers);


  return (
    <section class="bg-light">
      <div class="container justify-content-center align-items-center">
      {users.map((user)=>(
        <div class="row" key={user.id}>
          <div class="col-lg-12 mb-4 mb-sm-5">
            <div class="card card-style1 border-0">
              <div class="card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7">
                <div class="row align-items-center">
                  <div class="col-lg-6 mb-4 mb-lg-0">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt="..."
                    />
                  </div>
                 
                  <div class="col-lg-6 px-xl-10">
                    <div class="bg-secondary d-lg-inline-block py-1-9 px-1-9 px-sm-6 mb-1-9 rounded">
                      <h3 class="h2 text-white mb-0">{user.fullname}</h3>
                      <span class="text-primary">Coach</span>
                    </div>
                    <ul class="list-unstyled mb-1-9">
                      <li class="mb-2 mb-xl-3 display-28">
                        <span class="display-26 text-secondary me-2 font-weight-600">
                          Position:
                        </span>{" "}
                        Coach
                      </li>

                      <li class="mb-2 mb-xl-3 display-28">
                        <span class="display-26 text-secondary me-2 font-weight-600">
                          Email:
                        </span>{" "}
                       {user.username}
                      </li>
                      <li class="mb-2 mb-xl-3 display-28">
                        <span class="display-26 text-secondary me-2 font-weight-600">
                          Website:
                        </span>{" "}
                        www.example.com
                      </li>
                      <li class="display-28">
                        <span class="display-26 text-secondary me-2 font-weight-600">
                          Phone:
                        </span>{" "}
                       {user.phone}
                      </li>
                      <li class="display-28">
                        <span class="display-26 text-secondary me-2 font-weight-600">
                          Address:
                        </span>{" "}
                       {user.address}
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <div class="col-lg-10 px-xl-10"></div>
                    <div class="col-lg-2 px-xl-10"><Link to={`/editUser/id/${user.id}`}><i class="fa-solid fa-user-pen fa-beat-fade fa-2xl bg-light p-4 rounded"></i></Link></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-12">
            <div class="row">
              <div class="col-lg-12 mb-4 mb-sm-5">
                <div class="mb-4 mb-sm-5">
                  <span class="section-title text-primary mb-3 mb-sm-4">
                    Skill
                  </span>
                </div>
                <div>
                  <span class="section-title text-primary mb-3 mb-sm-4">
                    Education
                  </span>
                  <p>
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, and Link search
                    for 'lorem ipsum' will uncover many web sites still in their
                    infancy.
                  </p>
                  <p class="mb-1-9">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>
    </section>
  );
};

export default UserProfile;
