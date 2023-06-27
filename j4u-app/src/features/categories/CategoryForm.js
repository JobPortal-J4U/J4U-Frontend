import React from "react";
import "./CategoryForm.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNewCategory } from "./categorySlice";

const CategoryForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const navigate = useNavigate();

  const onNameChanged = (e) => setName(e.target.value);

  const canSave = [name].every(Boolean) && addRequestStatus === "idle";

  const onSaveCategoryClicked = () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        dispatch(addNewCategory({ name })).unwrap();

        setName("");
        navigate(`/admin/categoryTable`);
      } catch (err) {
        console.error("Failed to save the category", err);
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
                  <div class="container shadow-lg border-0 rounded-lg  p-3 locationForm">
                    <div class="card-header  ">
                      {" "}
                      <div class="d-flex flex-column  ">
                        <h3 class="text-center">Category Form</h3>
                      </div>
                    </div>
                    <div class="card-body my-3">
                      <form>
                        <div class="row">
                          <div class=" mb-3 col-md-12 h-100 ">
                            <label for="title">Category*</label>
                            <input
                              class="form-control"
                              id="name"
                              type="text"
                              value={name}
                              onChange={onNameChanged}
                            />
                          </div>
                          <div class="d-flex justify-content-end mt-4 mb-0">
                            <button
                              class="btn btn-outline-primary"
                              onClick={onSaveCategoryClicked}
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

export default CategoryForm;
