import {  useSelector } from "react-redux";
import {  selectJobPostById } from "../jobs/jobSlice";
import './AppModal.css'
import { Link, useParams } from "react-router-dom";

function AppModal(props) {

    const { jobPostId } = useParams();
    console.log(jobPostId)

    const jobPost = useSelector((state) => selectJobPostById(state,Number(jobPostId)))
console.log(jobPost)
    // function cancelHandler(params) {
    //     props.onCancel();
    // }

    // function confirmHandler(params) {
    //     props.onConfirm();
    // }


  return (
    <>
     <div class="container py-3 appModal">
        <div class=" text-dark">
            <h1 className="text-dark">Successfully Applied</h1>
          <div className="row mb-3 p-3">
            <div className="col-md-4"><img
                    class="flex-shrink-0 img-fluid border rounded  mb-2"
                    src={jobPost.company.logo}
                    alt=""
                    style={{ width: "80px", height: "80px" }}
                  /></div>
            <div className="col-md-8 text-start jobD"><p>JobPost ID : {jobPost.id}</p>
            <p>JobPost Title : {jobPost.title}</p></div>
          
          
          
          </div>
          <div className="row moreJob">
            <div className="col-md-8">
            <Link className="text-dark  moreJob" to='/'>View More JobPost</Link></div>
            <div className="col-md-4">
             <button className="btn btn-outline-primary  " ><Link to='/'> OK</Link>
       
      </button>
          </div>
          
      </div>
        </div>
      </div></>
  );
}

export default AppModal;
