import React, { useContext, useEffect } from "react";
import FavoriteContext from "../../store/favoriteContext";
import { Link } from "react-router-dom";
import { useDispatch, } from "react-redux";
import {
  getAllJobPosts,
} from "../../features/jobs/jobSlice";
import { getAllCategories } from "../../features/categories/categorySlice";
import { getAllCompanies } from "../../features/companies/companySlice";
import { getAllLocations } from "../../features/locations/locationSlice";
import { getAlljobTypes } from "../../features/jobTypes/jobTypeSlice";
import './FavoritePage.css'

const FavoritePage = () => {
  const favoriteContext = useContext(FavoriteContext);
  const favorite = favoriteContext.favorites;
 // console.log(favorite);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(
      getAllJobPosts(),
      getAllCategories(),
      getAllCompanies(),
      getAllLocations(),
      getAlljobTypes()
    );
  }, [dispatch]);

 // const jobPosts = useSelector(selectAllJobPosts);
 const favJobPosts=favoriteContext.favorites;
 favJobPosts.map((fav)=> console.log((fav.createdDate)))
 const d = new Date();
 console.log("Current Time is "+d.getTime())

  function toggleFavoriteHandler(id) {
    const isJobFavorite = favoriteContext.isJobFavorite(id);

    console.log("You clicked favouriate button.");
    const jobPostId = id;
    const jobPost = favJobPosts.find((post) => jobPostId === post.id);
    console.log("isJobFav is " + isJobFavorite);

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
        createdDate:jobPost.createdAt,
        deadLine: jobPost.deadLine,
        isFavItem: true,
      });
    }
  }

  if (favorite.length === 0) {
    return(
    <p><h3 class="text-center text-secondary p-4">No Favorite Jobs yet. Try adding some.</h3></p>
    )
  } else {
    return (
      <div class="container">
      <div class="tab-content " data-aos="fade-up">
        <div id="tab-1" class="tab-pane fade show span-0 active">
          {favJobPosts.map((jobPost) => (
            <div>
              <div class="job-item p-4 mb-4">
                <div class="row g-4">
                  <div class="col-sm-12 col-md-8 d-flex align-items-center">
                    <img
                      class="flex-shrink-0 img-fluid border rounded"
                      src={jobPost.logo}
                      alt=""
                      style={{ width: "80px", height: "80px" }}
                    />

                    <div class="text-start ps-4" key={jobPost.id}>
                      <h5 class="mb-3">{jobPost.title}</h5>
                      <span class="text-truncate me-3">
                        <i class="fa fa-map-marker-alt text-primary me-2"></i>
                        {jobPost.name}
                      </span>
                      <span class="text-truncate me-3">
                        <i class="fas fa-clock text-primary me-2"></i>
                        {jobPost.type}
                      </span>
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                    <div class="d-flex mb-3">
                      <div class="job">
                        <button class ="btn savebtn"
                          onClick={(e) => toggleFavoriteHandler(jobPost.id)}
                        >
                          {favoriteContext.isJobFavorite(jobPost.id)
                            ? "UNSAVE"
                            : "SAVE"}
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
                      DeadLine - {jobPost.createdDate}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <Link class="button btn-outline-primary ">
            More Jobs <i class="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>
      </div>
      </div>
    );
  }
};

export default FavoritePage;
