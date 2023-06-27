import React from 'react'
import './JobCategory.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Aos from 'aos'
import Meta from '../../components/pages/Meta'


const JobCategory = () => {
    useEffect(()=>{
        Aos.init({duration: 500});
      },[])
  return (
   
   <>
   <Meta title={"JobCategory"} />
      
   <div class="container py-5 ">
            <div class="container my-2" >
                <h1 class="text-center mb-5 " data-wow-delay="0.1s">Explore By Category</h1>
                <div class="row g-4" data-aos="fade-up" >
                    <div class="col-lg-3 col-sm-6 "  data-wow-delay="0.1s">
                        <Link class="cat-item rounded p-4" to="/jobList">
                            <i class="fa fa-3x fa-mail-bulk text-primary mb-4"></i>
                            <h6 class="mb-3">Marketing</h6>
                            <p class="mb-0">123 Vacancy</p>
                        </Link>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                        <Link class="cat-item rounded p-4" to="/jobList">
                            <i class="fa fa-3x fa-headset text-primary mb-4"></i>
                            <h6 class="mb-3">Customer Service</h6>
                            <p class="mb-0">123 Vacancy</p>
                        </Link>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <Link class="cat-item rounded p-4" to="/jobList">
                            <i class="fa fa-3x fa-user-tie text-primary mb-4"></i>
                            <h6 class="mb-3">Human Resource</h6>
                            <p class="mb-0">123 Vacancy</p>
                        </Link>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <Link class="cat-item rounded p-4" to="/jobList">
                            <i class="fa fa-3x fa-tasks text-primary mb-4"></i>
                            <h6 class="mb-3">Project Management</h6>
                            <p class="mb-0">123 Vacancy</p>
                        </Link>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <Link class="cat-item rounded p-4" to="/jobList">
                            <i class="fa fa-3x fa-chart-line text-primary mb-4"></i>
                            <h6 class="mb-3">Business Development</h6>
                            <p class="mb-0">123 Vacancy</p>
                        </Link>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                        <Link class="cat-item rounded p-4" to="/jobList">
                            <i class="fa fa-3x fa-hands-helping text-primary mb-4"></i>
                            <h6 class="mb-3">Sales & Communication</h6>
                            <p class="mb-0">123 Vacancy</p>
                        </Link>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <Link class="cat-item rounded p-4" to="/jobList">
                            <i class="fa fa-3x fa-book-reader text-primary mb-4"></i>
                            <h6 class="mb-3">Teaching & Education</h6>
                            <p class="mb-0">123 Vacancy</p>
                        </Link>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <Link class="cat-item rounded p-4" to="/jobList">
                            <i class="fa fa-3x fa-drafting-compass text-primary mb-4"></i>
                            <h6 class="mb-3">Design & Creative</h6>
                            <p class="mb-0">123 Vacancy</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
   </>
  )
}

export default JobCategory