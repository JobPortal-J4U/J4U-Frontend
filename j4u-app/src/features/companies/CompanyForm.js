import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNewCompany } from "./companySlice";
import { getAllLocations, selectAllLocations } from "../locations/locationSlice";

const CompanyForm = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    
    dispatch(getAllLocations());
  
  }, [dispatch]);

  const [name, setName] = useState("");
  const [description, setDecription] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [jobOpening, setJobOpening] = useState("");
  const [logo, setLogo] = useState("");
  const [locationId, setLocationId] = useState("");
  
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const navigate = useNavigate();

  const onNameChanged = (e) => setName(e.target.value);
  const onDescriptionChanged = (e) => setDecription(e.target.value);
  const onPhoneChanged = (e) => setPhone(e.target.value);
  const onEmailChanged = (e) => setEmail(e.target.value);
  const onAddressChanged = (e) => setAddress(e.target.value);
  const onJobOpeningChanged = (e) => setJobOpening(e.target.value);
  const onLogoChanged = (e) => setLogo(e.target.value);
  const onLocationChange = (e) => setLocationId(e.target.value);
  

  const locations = useSelector(selectAllLocations)
  const locationsOpt = locations.map((location) => (
    <option key={location.id} value={location.id}>
      {location.name}
    </option>
  ));
  const canSave = [name,description,address,phone,jobOpening,email,logo].every(Boolean) && addRequestStatus === "idle";

  const onSaveCompanyClicked = () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        dispatch(addNewCompany({ name,logo,description,phone,email,address,jobOpening })).unwrap();

        setName("");
        setDecription("");
        setPhone("");
        setEmail("");
        setAddress("");
        setJobOpening("");
        setLogo("")

        navigate(`/admin/companyTable`);
      } catch (err) {
        console.error("Failed to save the Company", err);
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
                  <div class="container shadow-lg border-0 rounded-lg  p-3 CompanyForm">
                    <div class="card-header  ">
                      {" "}
                      <div class="d-flex flex-column  ">
                        <h3 class="text-center">Company Form</h3>
                      </div>
                    </div>
                    <div class="card-body my-3">
                      <form>
                        <div class="row">
                        <div class=" mb-3 col-md-12 h-100 ">
                            <label for="title">Company Logo*</label>
                            <input
                              class="form-control"
                              id="logo"
                              type="text"
                              value={logo}
                              onChange={onLogoChanged}
                            />
                          </div>
                          <div class=" mb-3 col-md-6 h-100 ">
                            <label for="title">Name*</label>
                            <input
                              class="form-control"
                              id="name"
                              type="text"
                              value={name}
                              onChange={onNameChanged}
                            />
                          </div>
                          <div class=" mb-3 col-md-6 h-100 ">
                            <label for="title">Description*</label>
                            <input
                              class="form-control"
                              id="description"
                              type="text"
                              value={description}
                              onChange={onDescriptionChanged}
                            />
                          </div>
                          <div class=" mb-3 col-md-12 h-100 ">
                          <label htmlFor="locationId">Job Location*</label>
                            <select
                              class="form-select"
                              aria-label="Default select example"
                              id="locationId"
                              value={locationId}
                              onChange={onLocationChange}
                            >
                              <option value="">Choose Location</option>
                              {locationsOpt}
                            </select>
                            </div>
                          <div class=" mb-3 col-md-6 h-100 ">
                            <label for="title">Phone*</label>
                            <input
                              class="form-control"
                              id="phone"
                              type="text"
                              value={phone}
                              onChange={onPhoneChanged}
                            />
                          </div>
                          <div class=" mb-3 col-md-6 h-100 ">
                            <label for="title">Email*</label>
                            <input
                              class="form-control"
                              id="email"
                              type="text"
                              value={email}
                              onChange={onEmailChanged}
                            />
                          </div>
                          <div class=" mb-3 col-md-12 h-100 ">
                            <label for="title">Address*</label>
                            <input
                              class="form-control"
                              id="address"
                              type="text"
                              value={address}
                              onChange={onAddressChanged}
                            />
                          </div>
                          <div class=" mb-3 col-md-12 h-100 ">
                            <label for="title">Jobs Opening*</label>
                            <input
                              class="form-control"
                              id="jobOpening"
                              type="number"
                              value={jobOpening}
                              onChange={onJobOpeningChanged}
                            />
                          </div>
                          <div class="d-flex justify-content-end mt-4 mb-0">
                            <button
                              class="btn btn-outline-primary"
                              onClick={onSaveCompanyClicked}
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

export default CompanyForm;