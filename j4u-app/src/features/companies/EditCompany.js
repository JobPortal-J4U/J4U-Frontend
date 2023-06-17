import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {    selectCompanyById, updateCompany } from "./companySlice";


const EditCompany = () => {
  const { companyId } = useParams();

  const company = useSelector((state) =>
    selectCompanyById(state, Number(companyId))
  );

  const dispatch = useDispatch();

  const [logo, setLogo] = useState(company?.logo);
  const [name, setName] = useState(company?.name);
  const [description, setDecription] = useState(company?.description);
  const [phone, setPhone] = useState(company?.phone);
  const [email, setEmail] = useState(company?.email);
  const [address, setAddress] = useState(company?.address);
  const [jobOpening, setJobOpening] = useState(company?.jobOpening);

  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const onLogoChanged = (e) => setLogo(e.target.value);
  const onNameChanged = (e) => setName(e.target.value);
  const onDescriptionChanged = (e) => setDecription(e.target.value);
  const onPhoneChanged = (e) => setPhone(e.target.value);
  const onEmailChanged = (e) => setEmail(e.target.value);
  const onAddressChanged = (e) => setAddress(e.target.value);
  const onJobOpeningChanged = (e) => setJobOpening(e.target.value);

  const canSave = [ logo,name,description,phone,email,address,jobOpening ].every(Boolean) && addRequestStatus === "idle";

  const navigate = useNavigate();

  const onSaveCompanyClicked = () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        dispatch(updateCompany({ id: companyId,logo, name,description,phone,email,address,jobOpening })).unwrap();

        setName("");
        setDecription("");
        setPhone("");
        setEmail("");
        setAddress("");
        setJobOpening("");
        setLogo("")

        navigate(`/companyTable`);
      } catch (err) {
        console.error("Failed to update the company", err);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };

  

  return (
    <>
      <div classname="w-100 my-5">
        <div id="layoutAuthentication_content" classname="mx-4">
          <main classname="justify-content-center ">
            <div class="container ">
              <div class="row ">
                <div class="col-lg-5">
                  <div class="container shadow-lg border-0 rounded-lg  p-3 locationForm">
                    <div class="card-header  ">
                      {" "}
                      <div class="d-flex flex-column  ">
                        <h3 class="text-center">Update Company</h3>
                     
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

export default EditCompany;
