import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./LocationForm.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteLocation, selectLocationById, updateLocation } from "./locationSlice";
import { useState } from "react";

const EditLocation = () => {
  
  const { locationId } = useParams();

  const location = useSelector((state) =>
    selectLocationById(state, Number(locationId))
  );

  const dispatch = useDispatch();

  const [name, setName] = useState(location?.name);
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const onNameChanged = (e) => setName(e.target.value);

  const canSave = [ name ].every(Boolean) && addRequestStatus === "idle";

  const navigate = useNavigate();

  const onSaveLocationClicked = () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        dispatch(updateLocation({ id: locationId, name })).unwrap();

        setName("");

        navigate(`/locationTable`);
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
        dispatch(deleteLocation({
            id:location.id,
        })).unwrap()
        navigate(`/locationTable`)
    }catch(error){
   console.log(error)
    }finally{
        setAddRequestStatus('idle')
    }
   
  }


  return (
    <>
      <div className="w-100 my-5">
        <div id="layoutAuthentication_content" className="mx-4">
          <main className="justify-content-center ">
            <div class="container ">
              <div class="row ">
                <div class="col-lg-5">
                  <div class="container shadow-lg border-0 rounded-lg  p-3 locationForm">
                    <div class="card-header  ">
                      {" "}
                      <div class="d-flex flex-column  ">
                        <h3 class="text-center">Update Location </h3>
                      </div>
                    </div>
                    <div class="card-body my-3">
                      <form>
                        <div class="row">
                          <div class=" mb-3 col-md-12 h-100 ">
                            <label for="title">Location*</label>
                            <input
                              class="form-control"
                              id="title"
                              type="text"
                              value={name}
                              onChange={onNameChanged}
                            />
                          </div>
                          <div class="d-flex justify-content-end mt-4 mb-0">
                            <button
                              class="btn btn-outline-primary"
                              onClick={onSaveLocationClicked}
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

export default EditLocation;
