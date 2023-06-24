import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { deletePersonalInfo, selectPersonalInfoById, updatePersonalInfos } from "./personalinfoSlice";

const EditPersonalInfo = () => {
  const { personalInfoId } = useParams();

  const personalInfo = useSelector((state) =>
    selectPersonalInfoById(state, Number(personalInfoId))
  );

  const dispatch = useDispatch();

  const [name, setName] = useState(personalInfo?.name);
  const [nrc, setNrc] = useState(personalInfo?.nrc);
  const [dateOfBirth, setDateOfBirth] = useState(personalInfo?.dateOfBirth);
  const [address, setAddress] = useState(personalInfo?.address);
  const [city, setCity] = useState(personalInfo?.city);
  const [country, setCountry] = useState(personalInfo?.country);
  const [phone, setPhone] = useState(personalInfo?.phone);
  const [race, setRace] = useState(personalInfo?.race);
  const [gender, setGender] = useState(personalInfo?.gender);

  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const onNameChanged = (e) => setName(e.target.value);
  const onNrcChanged = (e) => setNrc(e.target.value);
  const onDOBChanged = (e) => setDateOfBirth(e.target.value);
  const onAddressChanged = (e) => setAddress(e.target.value);
  const onCityChanged = (e) => setCity(e.target.value);
  const onCountryChanged = (e) => setCountry(e.target.value);
  const onPhoneChanged = (e) => setPhone(e.target.value);
  const onRaceChanged = (e) => setRace(e.target.value);
  const onGenderChanged = (e) => setGender(e.target.value);

  const canSave = [name,nrc,dateOfBirth,address,city,country,phone,race,gender].every(Boolean) && addRequestStatus === "idle";

  const navigate = useNavigate();

  const onSavePersonalClicked = () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        dispatch(updatePersonalInfos({ id: personalInfoId, name,nrc,dateOfBirth,address,city,country,phone,race,gender })).unwrap();

        setName("");
        setNrc("");
        setDateOfBirth("");
        setAddress("");
        setCity("");
        setCountry("");
        setPhone("");
        setRace("");
        setGender("");

        navigate(`/personalInfoTable`);
      } catch (err) {
        console.error("Failed to update the INFO!!", err);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };

  const onDeleteClick = () =>{
    setAddRequestStatus('pending')
    try{
        dispatch(deletePersonalInfo({
            id:personalInfo.id,
        })).unwrap()
        navigate(`/personalInfoTable`)
    }catch(error){
   console.log(error)
    }finally{
        setAddRequestStatus('idle')
    }
   
  }

  return (
    <>
      <div classname="w-100 my-5">
        <div id="layoutAuthentication_content" classname="mx-4">
          <main classname="justify-content-center">
            <div class="container ">
              <div class="row ">
                <div class='col-lg-2'></div>
                <div class="col-lg-6">
                  <div class="container shadow-lg border-0 rounded-lg  p-3 personalInfoForm">
                    <div class="card-header">
                      {" "}
                      <div class="d-flex flex-column">
                        <h3 class="text-center">Update Info</h3>
                        <img
                          class="rounded-circle"
                          width="150px"
                          src="data:image/png;base64,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"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="card-body my-3">
                      <form>
                        <div class="row">
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
                            <label for="title">NRC*</label>
                            <input
                              class="form-control"
                              id="nrc"
                              type="text"
                              value={nrc}
                              onChange={onNrcChanged}
                            />
                          </div>
                          <div class=" mb-3 col-md-6 h-100 ">
                            <label for="title">DOB*</label>
                            <input
                              class="form-control"
                              id="dateOfBirth"
                              type="date"
                              value={dateOfBirth}
                              onChange={onDOBChanged}
                            />
                          </div>
                          <div class=" mb-3 col-md-6 h-100 ">
                            <label for="title">Address*</label>
                            <input
                              class="form-control"
                              id="address"
                              type="text"
                              value={address}
                              onChange={onAddressChanged}
                            />
                          </div>
                          <div class=" mb-3 col-md-6 h-100 ">
                            <label for="title">City*</label>
                            <input
                              class="form-control"
                              id="city"
                              type="text"
                              value={city}
                              onChange={onCityChanged}
                            />
                          </div>
                          <div class=" mb-3 col-md-6 h-100 ">
                            <label for="title">Country*</label>
                            <input
                              class="form-control"
                              id="country"
                              type="text"
                              value={country}
                              onChange={onCountryChanged}
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
                            <label for="title">Race*</label>
                            <input
                              class="form-control"
                              id="race"
                              type="text"
                              value={race}
                              onChange={onRaceChanged}
                            />
                          </div>
                          <div class=" mb-3 col-md-6 h-100 ">
                            <label for="title">Gender*</label>
                            <input
                              class="form-control"
                              id="gender"
                              type="text"
                              value={gender}
                              onChange={onGenderChanged}
                            />
                          </div>
                          <div class="d-flex justify-content-end mt-4 mb-0">
                            <button
                              class="btn btn-outline-primary"
                              onClick={onSavePersonalClicked}
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

export default EditPersonalInfo;
