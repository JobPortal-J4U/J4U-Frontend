import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { getAllUsers, getStatus, selectAllUsers } from "./userSlice";


const UserTable = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const users = useSelector(selectAllUsers);
  console.log(users);
  console.log("the size of user list is " + users.length);
  const getUserStatus = useSelector(getStatus);

  let content;
  

  if (getUserStatus === "loading") {
    content = <p>Loading.....</p>;
  }

  content = (
    <>
      <main>
        <div class="container-fluid  px-1 pt-4">
          

          <div class="card">
            <div className="container">
              <div className="card-header row">
                <div class=" col-md-10 pt-3">
                  <i class="fas fa-table me-1"></i>
                  Users DataTable
                </div>
                <div class=" col-md-2 pt-3 pb-3">
                  <button className="btn btn-outline-primary">
                    <Link to="/login">Create More</Link>
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
                          <th>Username</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* {users.map((user) => (
                          <UserData
                            no={index++}
                            id={user.id}
                            name={user.fullname}
                            username={user.username}
                          />
                        ))} */}
                      </tbody>
                    </table>
                  </div>
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

export default UserTable;
