import { Link } from "react-router-dom";
import "./JobList.css";
import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect, useState } from "react";
import { getAllJobPosts, selectAllJobPosts } from "./jobSlice";
import Meta from "../../components/pages/Meta";
import Aos from "aos";
import PropagateLoader from "react-spinners/PropagateLoader";
import { getAllCategories } from "../categories/categorySlice";
import { getAllCompanies } from "../companies/companySlice";
import { getAllLocations } from "../locations/locationSlice";
import { getAlljobTypes } from "../jobTypes/jobTypeSlice";
// import JobPostItem from "./JobPostItem";
import FavoriteContext from "../../store/favoriteContext";
import "./JobPostItem.css";

const JobList = (props) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const favoriteContext = useContext(FavoriteContext);


  useEffect(() => {
    dispatch(
      getAllJobPosts(),
      getAllCategories(),
      getAllCompanies(),
      getAllLocations(),
      getAlljobTypes()
    );
  }, [dispatch]);

  const jobPosts = useSelector(selectAllJobPosts);

  function toggleFavoriteHandler(id) {
    const isJobFavorite = favoriteContext.isJobFavorite(id);
    
    console.log('You clicked favouriate button.');
    const jobPostId = id;
    const jobPost = jobPosts.find((post) => jobPostId === post.id);
    console.log("isJobFav is "+isJobFavorite);

    if (isJobFavorite) {
      favoriteContext.removeFavorite(jobPostId);
     // isFavItem=false;
    } else {
      favoriteContext.addFavorite({
        id: jobPostId,
        title: jobPost.title,
        logo: jobPost.company.logo,
        type: jobPost.jobTypes.type,
        name: jobPost.category.name,
        deadLine:jobPost.deadLine,
        isFavItem:true
      });
      
    }
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <>
      <Meta title={"JobList"} />
      {/* <BreadCrumb title="JobList" /> */}

      {loading ? (
        <div className="role container text-center d-flex my-5">
          <div className="col-md-4">
            <h3> Loading</h3>
          </div>
          <div className="col-md-8">
            {" "}
            <PropagateLoader
              color={"#119BFF"}
              loading={loading}
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </div>
      ) : (
        // <JobPostItem/>
        // <ul class="list">
        //     {jobPosts.map((jobPost) => <JobPostItem
        //         key={jobPost.id}
        //         id={jobPost.id}
        //         title={jobPost.title}
        //         logo={jobPost.company.logo}
        //         type={jobPost.jobTypes.type}
        //         name={jobPost.category.name}
        //     />)}
        // </ul>
        <div class="container  jobList mb-5 ">
          <div class="container">
            <h1 class="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
              Job Listing
            </h1>
            <div
              class="tab-class text-center wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div class="tab-content " data-aos="fade-up">
                <div id="tab-1" class="tab-pane fade show span-0 active">
                  {jobPosts.map((jobPost) => (
                    <div>
                      <div class="job-item p-4 mb-4">
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
                                <i class="fas fa-clock text-primary me-2"></i>
                                {jobPost.jobTypes.type}
                              </span>
                            </div>
                          </div>
                          <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                            <div class="d-flex mb-3">
                              <div class="job">
                             
                                <button onClick={(e) => toggleFavoriteHandler(jobPost.id)}>
                                  { favoriteContext.isJobFavorite(jobPost.id)
                                    ? "Remove From Favorites"
                                    : "Add to Favorites"}
                                </button>
                              </div>
                              <Link
                                class="viewJobs btn btn-outline-primary"
                                to={`/jobPost/${jobPost.id}`}
                              >
                                <i class="fas fa-arrow-right"></i>
                              </Link>
                            </div>
                            <small class="text-truncate">
                              <i class="fas fa-calendar-alt text-primary me-2"></i>
                              DeadLine - {jobPost.deadLine}
                            </small>
                          </div>
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
      )}
    </>
  );
};

export default JobList;
