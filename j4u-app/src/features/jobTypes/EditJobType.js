import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./JobType.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { deleteJobType, selectJobTypeById, updateJobtype } from "./jobTypeSlice";

const EditJobType = () => {
  const { jobTypeId } = useParams();

  const jobType = useSelector((state) =>
    selectJobTypeById(state, Number(jobTypeId))
  );

  const dispatch = useDispatch();

  const [type, setType] = useState(jobType?.type);
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const onTypesChanged = (e) => setType(e.target.value);

  const canSave = [ type ].every(Boolean) && addRequestStatus === "idle";

  const navigate = useNavigate();

  const onSaveJobTypeClicked = () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        dispatch(updateJobtype({ id: jobTypeId, type })).unwrap();

        setType("");

        navigate(`/jobTypeTable`);
      } catch (err) {
        console.error("Failed to update the location", err);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };

  
  const onDeleteClick = () =>{
    setAddRequestStatus('pending')
    try{
        dispatch(deleteJobType({
            id:jobType.id,
        })).unwrap()
        navigate(`/jobTypeTable`)
    }catch(error){
   console.log(error)
    }finally{
        setAddRequestStatus('idle')
    }
   
  }



  return (
    <>
      <div classtypes="w-100 my-5">
        <div id="layoutAuthentication_content" classtypes="mx-4">
          <main classtypes="justify-content-center ">
            <div class="container ">
              <div class="row ">
                <div class="col-lg-5">
                  <div class="container shadow-lg border-0 rounded-lg  p-3 locationForm">
                    <div class="card-header  ">
                      {" "}
                      <div class="d-flex flex-column  ">
                        <h3 class="text-center">Update JobType </h3>
                      </div>
                    </div>
                    <div class="card-body my-3">
                      <form>
                        <div class="row">
                          <div class=" mb-3 col-md-12 h-100 ">
                            <label for="type">Job Type*</label>
                            <input
                              class="form-control"
                              id="type"
                              type="text"
                              value={type}
                              onChange={onTypesChanged}
                            />
                          </div>
                          <div class="d-flex justify-content-end mt-4 mb-0">
                            <button
                              class="btn btn-outline-primary"
                              onClick={onSaveJobTypeClicked}
                              disabled={!canSave}
                            >
                              Update
                            </button>
                            <button
                              class="btn btn-outline-danger"
                              onClick={onDeleteClick}
                            
                            >
                              Delete
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

export default EditJobType;
