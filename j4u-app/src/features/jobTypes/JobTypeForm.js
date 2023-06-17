import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { addNewJobType } from "./jobTypeSlice";

const JobTypeForm = () => {
  const dispatch = useDispatch();

  const [type, setType] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const navigate = useNavigate();

  const onNameChanged = (e) => setType(e.target.value);

  const canSave = [type].every(Boolean) && addRequestStatus === "idle";

  const onSaveJobTypeClicked = () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        dispatch(addNewJobType({ type })).unwrap();

        setType("");
        navigate(`/jobTypeTable`);
      } catch (err) {
        console.error("Failed to save the JobType", err);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };

 

  return (
    <>
      <div className="w-100 my-5">
        <div id="layoutAuthentication_content" className="mx-4">
          <main className="justify-content-center ">
            <div class="container ">
              <div class="row ">
                <div class="col-lg-5">
                  <div class="container shadow-lg border-0 rounded-lg  p-3 JobTypeForm">
                    <div class="card-header  ">
                      {" "}
                      <div class="d-flex flex-column  ">
                        <h3 class="text-center">JobType Form</h3>
                      </div>
                    </div>
                    <div class="card-body my-3">
                      <form>
                        <div class="row">
                          <div class=" mb-3 col-md-12 h-100 ">
                            <label for="type">JobType*</label>
                            <input
                              class="form-control"
                              id="type"
                              type="text"
                              value={type}
                              onChange={onNameChanged}
                            />
                          </div>
                          <div class="d-flex justify-content-end mt-4 mb-0">
                            <button
                              class="btn btn-outline-primary"
                              onClick={onSaveJobTypeClicked}
                              disabled={!canSave}
                            >
                              Create
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default JobTypeForm;
