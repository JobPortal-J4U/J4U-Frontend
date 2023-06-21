import React from 'react'
import './JobDetail.css'
import { Link, useParams } from 'react-router-dom'

import { useSelector } from 'react-redux';

import { selectJobPostById } from './jobSlice';
import Meta from '../../components/pages/Meta'


const JobDetail = () => {

    const { jobPostId } = useParams();

    const jobPost = useSelector((state) => selectJobPostById(state,Number(jobPostId)))
  
    if (!jobPost){
     return (
         <section>
             <h2>jobPost Not Found!</h2>
         </section>
     )
    }
    const applyNowLink = `/app/${jobPostId}`; 

  return (


    <>
    <Meta title={"JobDetails"} />
      
     <div class="container py-5 bg-dark job-details  mb-2">
            <div class="container my-5 pt-5 pb-4">
                <h1 class="display-3 text-white mb-3 animated slideInDown">Job Detail</h1>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb text-uppercase">
                        <li class="breadcrumb-item text-dark "><Link href="#">Home</Link></li>
                        <li class="breadcrumb-item"><Link href="#">About Us</Link></li>
                        <li class="breadcrumb-item text-white active" aria-current="page">Job Detail</li>
                    </ol>
                </nav>
            </div>
        </div>
    
       <div class="container py-1 wow jobDetails" data-wow-delay="0.1s">
            <div class="container ">
                <div class="row gy-5 gx-4 " key={jobPost.id}>
                    <div class="col-lg-8">
                        <div class="d-flex align-items-center mb-5">
                            <img class="flex-shrink-0 img-fluid border rounded" src={jobPost.company.logo} alt="" style={{width: "80px", height: "80px"}}/>
                            <div class="text-start ps-4">
                                <h3 class="mb-2">{jobPost.title}</h3>
                                 <span class="text-truncate me-3"><i class="fa fa-map-marker-alt text-primary me-2"></i>{jobPost.location.name}</span>
                                <span class="text-truncate me-3"><i class="far fa-clock text-primary me-2"></i>{jobPost.jobTypes.type}</span>
                                <span class="text-truncate me-0"><i class="far fa-money-bill-alt text-primary me-2"></i>{jobPost.salary}</span>
                            </div>
                        </div>

                        <div class="" key={jobPost.id}>
                            <h4 class="mb-3">Job description</h4>
                            <p>{jobPost.descriptions}</p>
                            
                            <h4 class="mb-5">Qualifications</h4>
                            <p>{jobPost.skills}</p>
                          
                            <div class="bg-light rounded my-4 h-25  wow slideInUp" data-wow-delay="0.1s" key={jobPost.id}>
                            <h4 class="card-header">Company Detail</h4>
                            <p><i class="fa fa-angle-right text-primary me-2 my-3"></i>Name: {jobPost.company.name}</p>
                            <p><i class="fa fa-angle-right text-primary me-2"></i>About:  {jobPost.company.description}</p>
                        </div>

                        </div>
        

                    </div>
        
                    <div class="container-card bg col-lg-4" key={jobPost.id}>
                        <div class="bg-light card-body rounded my-5 p-4 wow slideInUp" data-wow-delay="0.1s">
                            <h4 class="mb-4 card-header mb-3">Job Summery</h4>
                            <p><i class="fa fa-angle-right text-primary me-2"></i>Published On: {jobPost.publishedOn}</p>
                            <p><i class="fa fa-angle-right text-primary me-2"></i>Vacancy: {jobPost.vancy}</p>
                            <p><i class="fa fa-angle-right text-primary me-2"></i>Job Nature:{jobPost.jobTypes.type}</p>
                            <p><i class="fa fa-angle-right text-primary me-2"></i>Salary: {jobPost.salary}</p>
                            <p><i class="fa fa-angle-right text-primary me-2"></i>Location:{jobPost.location.name}</p>
                            <p class="m-0"><i class="fa fa-angle-right text-primary me-2 mb-4"></i>Date Line: {jobPost.deadLine}</p>
                            <Link class="viewJobs btn btn-outline-primary py-1" to={applyNowLink}>
                        Apply Now
                        </Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default JobDetail