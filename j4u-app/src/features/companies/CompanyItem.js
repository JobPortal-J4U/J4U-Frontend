import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteCompany } from "./companySlice";
import { selectCompanyById } from "./companySlice";
import { getCompanyStatus } from "./companySlice";
import Modal from "../../components/ui/Modal";
// import Backdrop from "../../components/ui/Backdrop";

const CompanyItem = (props) => {

  const dispatch = useDispatch();

  const comId = props.id;

  console.log("com"+comId)

  const company = useSelector((state) =>
    selectCompanyById(state, Number(comId))
  );
  console.log(company);

  const [isModelOpen, setModelOpen] = useState(false);

  var delError = useSelector((state) => getCompanyStatus(state));


  const navigate = useNavigate();
  function deleteHandler() {
   
    setModelOpen(true);
  }

  function confirmHandler(){
    try {
      dispatch(
        deleteCompany({
          id: props.id,
        })
      ).unwrap();

      navigate(`/admin/companyTable`);
      console.log("After delete;;;;;;;;;;;;" + delError);
      if (delError != null)
        alert("Can't delete because props has many jobPosts!");
    } catch (error) {
      console.log(error);
    
    }
    setModelOpen(false)
 }


  function closeModalhandler(params) {
    setModelOpen(false);
  }


  return (
    <>
      <tr>
        <td data-title="ID">{props.no}</td>
        <td data-title="NAME">{props.name}</td>
        <td data-title="LOGO">
          <img
            src={props.logo}
            alt="props logo"
            style={{ width: "60px", height: "55px" }}
          />
        </td>
        <td data-title="PHONE">{props.phone}</td>
        <td data-title="EMAIL">{props.email}</td>
        <td data-title="ADDRESS">{props.address}</td>

        <td data-title="ACTION">
          <Link to={`/admin/editCompany/id/${props.id}`} className="mx-4">
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </Link>
          <Link onClick={deleteHandler}>
            <i class="fa-sharp fa-solid fa-trash"></i>
          </Link>
        </td>
        <td></td>
      </tr>
      
      {isModelOpen && <Modal  onCancel={closeModalhandler} onConfirm={confirmHandler}/>}
      
    </>
  );
};

export default CompanyItem;
