// import { useContext, useEffect } from "react";
// import FavoriteContext from "../../store/favoriteContext";
// import './JobPostItem.css';
// import { useDispatch, useSelector } from "react-redux";
// import { getAllJobPosts } from "./jobSlice";
// import { getAllCategories } from "../categories/categorySlice";
// import { getAllCompanies } from "../companies/companySlice";
// import { getAllLocations } from "../locations/locationSlice";
// import { getAlljobTypes } from "../jobTypes/jobTypeSlice";

// function JobPostItem(props) {
//   const favoriteContext = useContext(FavoriteContext);
//   const isJobFavorite = favoriteContext.isJobFavorite(props.id);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(
//       getAllJobPosts(),
//       getAllCategories(),
//       getAllCompanies(),
//       getAllLocations(),
//       getAlljobTypes()
//     );
//   }, [dispatch]);

//   const jobPosts = useSelector(selectAllJobPosts);

//   function toggleFavoriteHandler() {
//     const jobPostId = props.id;

//     if (isJobFavorite) {
//       favoriteContext.removeFavorite(jobPostId);
//     } else {
//       favoriteContext.addFavorite({
//         id: jobPostId,
//         title: props.title,
//         logo: props.company.logo,
//         type: props.jobTypes.type,
//         name: props.category.name,
//       });
//     }
//   }

//   return (
//     <div class="container  jobList mb-5 ">
//       <div class="container">
//         <h1 class="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
//           Job Listing
//         </h1>
//         <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
//           <div class="tab-content " data-aos="fade-up">
//             <div id="tab-1" class="tab-pane fade show span-0 active">
//               {jobPosts.map((props) => (
//                 <Link to={`/jobPost/${props.id}`}>
//                   <div class="job-item p-4 mb-4">
//                     <div class="row g-4">
//                       <div class="col-sm-12 col-md-8 d-flex align-items-center">
//                         <img
//                           class="flex-shrink-0 img-fluid border rounded"
//                           src={props.company.logo}
//                           alt=""
//                           style={{ width: "80px", height: "80px" }}
//                         />

//                         <div class="text-start ps-4" key={props.id}>
//                           <h5 class="mb-3">{props.title}</h5>
//                           <span class="text-truncate me-3">
//                             <i class="fa fa-map-marker-alt text-primary me-2"></i>
//                             {props.location.name}
//                           </span>
//                           <span class="text-truncate me-3">
//                             <i class="fas fa-clock text-primary me-2"></i>
//                             {props.jobTypes.type}
//                           </span>
//                         </div>
//                       </div>
//                       <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
//                         <div class="d-flex mb-3">
                        //   <div class="job">
                        //     <button onClick={toggleFavoriteHandler}>
                        //       {isJobFavorite
                        //         ? "Remove From Favorites"
                        //         : "Add to Favorites"}
                        //     </button>
                        //   </div>

//                           <Link
//                             class="viewJobs btn btn-outline-primary"
//                             to={`/jobPost/${props.id}`}
//                           >
//                             <i class="fas fa-arrow-right"></i>
//                           </Link>
//                         </div>
//                         <small class="text-truncate">
//                           <i class="fas fa-calendar-alt text-primary me-2"></i>
//                           DeadLine - {props.deadLine}
//                         </small>
//                       </div>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//               <Link class="button btn-outline-primary " href="">
//                 More Jobs <i class="fas fa-arrow-right ml-2"></i>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default JobPostItem;
