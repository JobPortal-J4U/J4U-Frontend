import "./Profile.css";

const Profile = () => {
  return (
    <>
      <div class="container rounded bg-white mt-2 mb-5 profile">
        <div class="row">
          <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                class="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                alt=""
              />
              <span class="font-weight-bold">Sampale Name</span>
              <span class="text-black-50">example@mail.com.my</span>
              <span>
                <i class="far fa-edit mt-2"></i>
              </span>
            </div>
          </div>
          <div class="col-md-5 border-right">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h4 class="text-right">My Profile </h4>
              </div>
              <div class="row mt-2">
                <div class="col-md-6">
                  <label class="labels">Firstname</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="firstname"
                    value=""
                  />
                </div>
                <div class="col-md-6">
                  <label class="labels">lastname</label>
                  <input
                    type="text"
                    class="form-control"
                    value=""
                    placeholder="lastname"
                  />
                </div>
              </div>

              <div class="row mt-2">
                <div class="col-md-6">
                  <label class="labels">Fullname</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="fullname"
                    value=""
                  />
                </div>
                <div class="col-md-6">
                  <label class="labels">Username</label>
                  <input
                    type="text"
                    class="form-control"
                    value=""
                    placeholder="username"
                  />
                </div>
              </div>

              <div class="row mt-3">
                <div class="col-md-12">
                  <label class="labels">Mobile Number</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder=" phone number"
                    value=""
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">Address </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="address "
                    value=""
                  />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-6">
                  <label class="labels">Country</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="country"
                    value=""
                  />
                </div>
                <div class="col-md-6">
                  <label class="labels">State/Region</label>
                  <input
                    type="text"
                    class="form-control"
                    value=""
                    placeholder="state"
                  />
                </div>
              </div>
              <div class="mt-5 text-center">
                <button
                  class="btn btn-primary profile-button"
                  type="button"
                  disabled
                >
                  Save Profile
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center experience">
                <span>Edit Experience</span>
                <span class="border px-3 p-1 add-experience">
                  <i class="fa fa-plus"></i>&nbsp;Experience
                </span>
              </div>
              <div class="col-md-12">
                <label class="labels">Experience in Designing</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="experience"
                  value=""
                />
              </div>
              <div class="col-md-12">
                <label class="labels">Additional Details</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="additional details"
                  value=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Profile;
