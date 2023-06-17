
import './CompanyDetails.css'
import { Link, useParams } from 'react-router-dom'
import {  selectCompanyById } from './companySlice';
import {  useDispatch, useSelector } from 'react-redux';
import Meta from '../../components/pages/Meta'

import { useEffect } from 'react';
import { getAllJobPosts, selectJobPostByCompanyId } from '../jobs/jobSlice';

const CompanyDetails = () => {

  const { companyId } = useParams();

  const company = useSelector((state) => selectCompanyById(state,Number(companyId)))


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobPosts());
  }, [dispatch]);

  const jobPosts = useSelector((state) => selectJobPostByCompanyId(state,Number(companyId)))
  console.log(jobPosts)


  if (!company){
   return (
       <section>
           <h2>Company Not Found!</h2>
       </section>
   )
  }


  return (
    <section className='comDeatils'>
      <Meta title={"Company Detail"} />
      
    <div class="container py-5 bg-dark company-header mb-2">
        <div class="container my-5 pt-5 pb-5">
          <h1 class="display-3 text-white mb-3 animated slideInDown">
            Company Details
          </h1>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb text-uppercase">
              <li class="breadcrumb-item text-white">
                <Link href="#">Home</Link>
              </li>
              <li class="breadcrumb-item text-white">
                <Link href="#">Pages</Link>
              </li>
              <li class="breadcrumb-item text-white active" aria-current="page">
                Company Details
              </li>
            </ol>
          </nav>
        </div>
      </div>

      
      <div class="container-fluid py-5 wow jobDetails" data-wow-delay="0.1s">
            <div class="container">
                <div class="row gy-5 gx-4 ">
                    <div class="col-lg-8" key={company.id}>
                        <div class="d-flex align-items-center mb-5">
                            <img src={company.logo} alt="" style={{width: "80px", height: "80px"}}/>
                            <div class="text-start ps-4">
                                <h3 class="mb-3">{company.name}</h3>
                                 <span class="text-truncate me-3"><i class="fa fa-map-marker-alt text-primary me-2"></i>{company.address}</span>
                                
                            </div>
                        </div>
                        <div class="mb-5">
                            <h4 class="mb-3">Description</h4>
                            <p>{company.description}</p> 
                            <p>{company.jobPost}</p> 
                        </div>



<div class="accordion" id="accordionPanelsStayOpenExample">
  
  
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed rjob" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Related Jobs
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
       

<>

<div class="container  jobList mb-5 ">
        <div class="container">
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




      </div>
    </div>
  </div>
</div>




                    </div>
        
                    <div class="container-card col-lg-4" key={company.id}>
                        <div class="bg-light rounded p-5 mb-4 wow slideInUp" data-wow-delay="0.1s">
                            <h4 class="mb-4">Company Summery</h4>
                            <p><i class="fa fa-angle-right text-primary me-2"></i>Name: {company.name}</p>
                            <p><i class="fa fa-angle-right text-primary me-2"></i>Phone:  {company.phone}</p>
                            <p><i class="fa fa-angle-right text-primary me-2"></i>Address:  {company.address}</p>
                            <p><i class="fa fa-angle-right text-primary me-2"></i>Email:  {company.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      

    </section>
  )
}

export default CompanyDetails