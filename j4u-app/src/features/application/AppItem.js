import React, { useState } from "react";
import {  useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectAppById } from "./applicationSlice";
import { Modal } from "react-bootstrap";

// import Backdrop from "../../components/ui/Backdrop";

const AppItem = (props) => {

  

  const appId = props.id;

  console.log("com"+appId)

  const app = useSelector((state) =>
    selectAppById(state, Number(appId))
  );
  console.log(app);

  const [isModelOpen, setModelOpen] = useState(false);  


  const navigate = useNavigate();
  

  function confirmHandler(){
    // try {
    //   dispatch(
    //     deleteCompany({
    //       id: props.id,
    //     })
    //   ).unwrap();

     navigate(`/appTable`);
    //   console.log("After delete;;;;;;;;;;;;" + delError);
    //   if (delError != null)
    //     alert("Can't delete because props has many jobPosts!");
    // } catch (error) {
    //   console.log(error);
    
    // }
    setModelOpen(false)
 }


  function closeModalhandler(params) {
    setModelOpen(false);
  }


  return (
    <>
      <tr>
        <td data-title="ID">{props.no}</td>
        <td data-title="NAME">{props.status}</td>
        
        <td data-title="PHONE">{props.createdAt}</td>
        <td data-title="EMAIL">{props.updatedAt}</td>

        <td data-title="ACTION">
          <Link to={`/admin/editCompany/id/${props.id}`} className="mx-4">
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </Link>

        </td>
        <td></td>
      </tr>
      
      {isModelOpen && <Modal  onCancel={closeModalhandler} onConfirm={confirmHandler}/>}
      
    </>
  );
};

export default AppItem;
