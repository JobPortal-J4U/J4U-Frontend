import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {  selectCategoryById, updateCategory } from "./categorySlice";

const EditCategory = () => {
  const { categoryId } = useParams();

  const category = useSelector((state) =>
    selectCategoryById(state, Number(categoryId))
  );

  const dispatch = useDispatch();

  const [name, setName] = useState(category?.name);
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const onNameChanged = (e) => setName(e.target.value);

  const canSave = [ name ].every(Boolean) && addRequestStatus === "idle";

  const navigate = useNavigate();

  const onSaveCategoryClicked = () => {
    if (canSave) {
      try {
        console.log("name in editCategoryForm is "+name);
        setAddRequestStatus("pending");
        dispatch(updateCategory({ id: categoryId, name })).unwrap();

        setName("");

        navigate(`/categoryTable`);
      } catch (err) {
        console.error("Failed to update the category", err);
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
                        <h3 class="text-center">Update Category </h3>
                      </div>
                    </div>
                    <div class="card-body my-3">
                      <form>
                        <div class="row">
                          <div class=" mb-3 col-md-12 h-100 ">
                            <label for="title">Category*</label>
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
                              onClick={onSaveCategoryClicked}
                              disabled={!canSave}
                            >
                              Update
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

export default EditCategory;

