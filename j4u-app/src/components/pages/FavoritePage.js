import React, { useContext, useEffect, useState } from "react";
import FavoriteContext from "../../store/favoriteContext";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobPosts } from "../../features/jobs/jobSlice";
import { getAllCategories } from "../../features/categories/categorySlice";
import { getAllCompanies } from "../../features/companies/companySlice";
import { getAllLocations } from "../../features/locations/locationSlice";
import { getAlljobTypes } from "../../features/jobTypes/jobTypeSlice";

const FavoritePage = (props) => {
  const favoriteContext = useContext(FavoriteContext);
  const favorite = favoriteContext.favorites;
  console.log(favorite);
 
  const dispatch = useDispatch();
  const isJobFavorite = favoriteContext.isJobFavorite(props.id);
  useEffect(() => {
    dispatch(
      getAllJobPosts(),
      getAllCategories(),
      getAllCompanies(),
      getAllLocations(),
      getAlljobTypes()
    );
  }, [dispatch]);

  const jobPosts = useSelector(getAllJobPosts)
  let job;

  function toggleFavoriteHandler() {
    const jobPostId = jobPosts.id;
    const jobPost = jobPosts.find((post) => jobPostId === props.id);

    if (isJobFavorite) {
      favoriteContext.removeFavorite(jobPostId);
    } else {
      favoriteContext.addFavorite({
        id: jobPostId,
        title: jobPost.title,
        logo: jobPost.company.logo,
        type: jobPost.jobTypes.type,
        name: jobPost.category.name,
        deadLine:jobPost.deadLine
      });
    }
  }

  if (favorite.length === 0) {
    job = <p>No Favorite Jobs yet. Try adding some.</p>;
  } else {
    job = 
      <div>
      {favorite.map((jobPost) => (
                    <Link to={`/jobPost/${jobPost.id}`}>
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
                                <button onClick={toggleFavoriteHandler}>
                                  {isJobFavorite
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
                    </Link>
                  ))}
      </div>;
    
  }

  return (
    <section>
      <h1>FavJobList</h1>
      {job}
    </section>
  );
};

export default FavoritePage;
