import React from "react";
import Meta from "./Meta";
import "./About.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";

const About = () => {
  
  

  useEffect(()=>{
    Aos.init({duration: 800});
  },[])
  return (
    <section data-aos="fade-up">
      <Meta title={"About"} />

      <div
        class="container page-header py-5 mb-5 wow fadeIn "
        data-wow-delay="0.1s"
      >
        <div class="container text-center py-5">
          <h1 class="display-2 text-white mb-4 animated slideInDown">
            About Us
          </h1>
        </div>
      </div>

      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5">
            <div
              class="col-lg-6 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ minHeight: "400px" }}
            >
              <div class="position-relative h-100">
                <img
                  class="img-fluid position-absolute w-100 h-100"
                  src="https://i.pinimg.com/564x/06/fc/5a/06fc5a0a57388d4457d4dff94d9add2c.jpg"
                  alt=""
                  style={{ objectFit: "cover" }}
                ></img>
              </div>
            </div>
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h6 class="section-title bg-white text-start text-primary pe-3">
                About Us
              </h6>
              <h1 class="mb-2">Welcome to J4U</h1>
              <h4 class="mb-4 text-secondary">Job Finding Website</h4>
              <p class="mb-4">
                Welcome to our job finder website! We are dedicated to
                connecting talented individuals with their dream careers.
                Whether you're Link recent graduate or an experienced
                professional, we're here to support you on your journey to
                professional fulfillment. Join us today and discover the perfect
                job match for you!
              </p>
              <div class="row gy-2 gx-4 mb-4">
                <div class="col-sm-12">
                  <p class="mb-0">
                    <i class="fa fa-arrow-right text-primary me-2"></i>
                    Discover your dream job effortlessly
                  </p>
                </div>
                <div class="col-sm-12">
                  <p class="mb-0">
                    <i class="fa fa-arrow-right text-primary me-2"></i>
                    Streamline your job search and save valuable time
                  </p>
                </div>
                <div class="col-sm-12">
                  <p class="mb-0">
                    <i class="fa fa-arrow-right text-primary me-2"></i>
                    Maximize your job prospects with ease
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-xxl py-5">
        <div class="container">
          <div
            class="text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <p class="fs-5 fw-medium text-primary">Our Team</p>
            <h1 class="display-5 mb-5">Our Expert People Ready to Help You</h1>
          </div>
          <div class="row g-4">
            <div class="col-lg-3"></div>
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="team-item rounded overflow-hidden pb-4">
                <img
                  class="img-fluid mb-4"
                  src="https://i.pinimg.com/564x/6d/61/08/6d610835df03f646903bade46ccf2f39.jpg"
                  alt=""
                ></img>
                <h5>Alex Robin</h5>
                <span class="text-primary">Founder & CEO</span>
                <ul class="team-social">
                  <li>
                    <Link class="btn btn-square" href="">
                      <i class="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link class="btn btn-square" href="">
                      <i class="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link class="btn btn-square" href="">
                      <i class="fab fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link class="btn btn-square" href="">
                      <i class="fab fa-linkedin-in"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
              <div class="team-item rounded overflow-hidden pb-4">
                <img
                  class="img-fluid mb-4"
                  src="https://i.pinimg.com/564x/e5/0a/69/e50a6948f4837bd6589a48046dec64ef.jpg"
                  alt=""
                ></img>
                <h5>Robert Jordan</h5>
                <span class="text-primary">Digital Marketer</span>
                <ul class="team-social">
                  <li>
                    <Link class="btn btn-square" href="">
                      <i class="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link class="btn btn-square" href="">
                      <i class="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link class="btn btn-square" href="">
                      <i class="fab fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link class="btn btn-square" href="">
                      <i class="fab fa-linkedin-in"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
