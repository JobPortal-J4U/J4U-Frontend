import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import AppItem from "./AppItem";
import { getAllApplications, getApplicationStatus, selectAllApplications } from "./applicationSlice";

const ApplicationTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllApplications());
  }, [dispatch]);

  const applications = useSelector(selectAllApplications);
  const appStatus = useSelector(getApplicationStatus);

  let content;
  let index = 1;

  if (appStatus === "loading") {
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
                Application DataTable
              </div>
              <div class=" col-md-2 pt-3 pb-3">
                
              </div>
            </div>
            <div class="container">
              <div className="row">
                <div class="" id="no-more-tables">
                  <table class="table bg-white">
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Status</th>
                        <th>CratedAt</th>
                        <th>UpdatedAt</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                      {applications.map((application) => (
                        <AppItem
                          no={index++}
                          id={application.id}
                          name={application.status}
                          createdAt={application.createdAt}
                          updatedAt={application.updatedAt}
                         
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

export default ApplicationTable;
