import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteJobPost, selectJobPostByCompanyId } from "./jobSlice";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../../components/ui/Modal";
import { getAlljobTypes } from "../jobTypes/jobTypeSlice";
import { getAllCompanies } from "../companies/companySlice";
import { getAllCategories } from "../categories/categorySlice";

const JobItem = (props) => {
  const dispatch = useDispatch();
  const [addRequestStatus, setAddRequestStatus] = useState("idle");
  console.log(addRequestStatus)

  const jobId = props.id;

  console.log("jobId"+jobId)

  const jobPost = useSelector((state) =>
    selectJobPostByCompanyId(state, Number(jobId))
  );
  console.log(jobPost);

  const [isModelOpen, setModelOpen] = useState(false);

  useEffect(() => {
    dispatch(getAllCategories(), getAllCompanies(), getAlljobTypes());
  }, [dispatch]);

  const navigate = useNavigate();

  function deleteHandler() {
    setModelOpen(true);
  }

  function confirmHandler() {
    setAddRequestStatus('pending')
    try {
      dispatch(
        deleteJobPost({
          id:  props.id,
        })
      ).unwrap();

      navigate(`/jobtable`);
    } catch (error) {
      console.log(error);
    }
    setModelOpen(false);
  }

  function closeModalhandler(params) {
    setModelOpen(false);
  }

  return (
    <>
      <tr>
        <td data-title="ID">{props.no}</td>
        <td data-title="TITLE">{props.title}</td>
        <td data-title="COMPANY LOGO">
          <img
            src={props.logo}
            alt="props logo"
            style={{ width: "60px", height: "55px" }}
          />
        </td>
        <td data-title="JOB-TYPE">{props.type}</td>
        <td data-title="CATEGORY">{props.name}</td>

        <td data-title="ACTION">
          <Link to={`/admin/editJobPost/id/${props.id}`} className="mx-4">
          <i class="fa-sharp fa-solid fa-pen-to-square"></i>
          </Link>
          <Link onClick={deleteHandler} className="">
            <i class="fa-sharp fa-solid fa-trash"></i>
          </Link>
        </td>
       
      </tr>

      {isModelOpen && (
        <Modal onCancel={closeModalhandler} onConfirm={confirmHandler} />
      )}
    </>
  );
};

export default JobItem;
