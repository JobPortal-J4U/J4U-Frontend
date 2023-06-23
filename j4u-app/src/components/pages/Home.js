import "./Home.css";
import React from "react";

import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import Contact from "./Contact";

import CompanyLogo from "../../logo/CompanyLogo";
import JobCategory from "../../features/jobs/JobCategory";
import Meta from "./Meta";

import About from "./About";
import FilterJob from "../../features/jobs/FilterJob";

function Home() {
  return (
    <>
      <Meta title={"Home"} />

      <div className="container p-4 background-radial-gradient overflow-hidden">
        <MDBRow>
          <MDBCol
            md="6"
            className="text-center text-md-start d-flex flex-column justify-content-center"
          >
            <h1
              className="my-5 display-3 fw-bold ls-tight px-3"
              style={{ color: "hsl(218, 81%, 95%)" }}
            >
              The best offer <br />
              <span style={{ color: "hsl(218, 81%, 75%)" }}>
                for your Life Carrier!
              </span>
            </h1>

            <p className="px-3" style={{ color: "hsl(218, 81%, 85%)" }}>
              J4U is the intermediate platform between Job seekers and
              Companies.
            </p>
          </MDBCol>

          <MDBCol md="6" className="position-relative">
            <div
              id="radius1"
              className="position-absolute rounded-circle shadow-5-strong"
            ></div>
            <div
              id="radius2"
              className="position-absolute shadow-5-strong"
            ></div>

            {/* <MDBCard className='my-5 ms-5  justify-content-center bgGlass ' >
            <MDBCardBody className='p-5 '>
              <h3>Start Your Dream Jobs Here!</h3>
              <MDBRow className='p-2  '>
               
              <input
                    type="text"
                    className="form-control border-0"
                    placeholder="Your Skill or Job Title"
                  />
                
                <select class="form-select my-2" aria-label="Default select example" >
                <option selected>Category</option>
                <option value="1">Healthy</option>
                <option value="2">IT</option>
                <option value="3">Bussiness</option>
                <option value="3">Creative,Design & Medaia</option>
                <option value="3">Engineering</option>
              </select>
              <select class="form-select mb-2" aria-label="Default select example" >
                <option selected>Location</option>
                <option value="1">Mandalay</option>
                <option value="2">Yangon</option>
                <option value="3">Bagan</option>
                
              </select>
              </MDBRow>
              <button className='btn btn-outline-primary  w-100 mb-4 homeSearch' size='md'>Search Job</button>



            </MDBCardBody>
          </MDBCard> */}
          </MDBCol>
        </MDBRow>
      </div>
      <FilterJob/>
      <JobCategory />
      <About />
    

      <CompanyLogo />
      <Contact />
    </>
  );
}

export default Home;
