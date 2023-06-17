import React from 'react'
import './RelatedJob.css'

const RelatedJob = () => {
  return (
    <>
    <div class="container  jobList mb-5 ">
        <div class="container">
          <h1 class="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
            Job Listing
          </h1>
          <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">

            <div class="tab-content "data-aos="fade-up">
              <div id="tab-1" class="tab-pane fade show span-0 active">
              {jobPosts.map((jobPost)=>(
                <div class="job-item p-4 mb-4" >
                 

                 
                  <div class="row g-4">
                 
                    <div class="col-sm-12 col-md-8 d-flex align-items-center">
                    
                      <img
                        class="flex-shrink-0 img-fluid border rounded"
                        src={jobPost.company.logo}
                        alt=""
                        style={{ width: "80px", height: "80px" }}
                      />
                      
                      <div class="text-start ps-4" key={jobPost.id}>
                        <h5 class="mb-3">{jobPost.title}</h5>
                        <span class="text-truncate me-3">
                          <i class="fa fa-map-marker-alt text-primary me-2"></i>
                          {jobPost.location.name}
                        </span>
                        <span class="text-truncate me-3">
                          <i class="far fa-clock text-primary me-2"></i>
                          {jobPost.jobTypes.type}
                        </span>
                       
                      </div>
                     
                    </div>
                    <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                      <div class="d-flex mb-3">
                        <Link class="btn btn-light btn-square me-3" href="">
                          <i class="far fa-heart text-primary"></i>
                        </Link>
                        <Link class="viewJobs btn btn-outline-primary" to={`/jobPost/${jobPost.id}`}>
                        <i class="fas fa-arrow-right"></i>
                        </Link>
                      </div>
                      <small class="text-truncate">
                        <i class="far fa-calendar-alt text-primary me-2"></i>
                        Date Line: 01 Jan, 2045
                      </small>
                      
                      
                    </div>
                    
                   
                    </div>
                    
                   
                </div>
             
             ))}
                <Link class="button btn-outline-primary " href="">
                  More Jobs <i class="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RelatedJob