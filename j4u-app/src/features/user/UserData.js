import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { deleteUser, selectUserById } from "./userSlice";
import Modal from "../../components/ui/Modal";

const UserData = (props) => {
  
  const [isModelOpen, setModelOpen] = useState(false);
  const [addRequestStatus, setAddRequestStatus] = useState("idle");
  console.log(addRequestStatus)

  const dispatch = useDispatch();

  const userId = props.id;

  console.log("userId"+userId)

  const user = useSelector((state) =>
    selectUserById(state, Number(userId))
  );
  console.log(user);

  



  const navigate = useNavigate();



  function deleteHandler() {
   
    setModelOpen(true);
  }

  function confirmHandler() {
    setAddRequestStatus('pending')
    try {
      dispatch(
        deleteUser({
          id:  props.id,
        })
      ).unwrap();

      navigate(`/userTable`);
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
        <td data-title="no">{props.no}</td>
        <td data-title="name">{props.name}</td>

        <td data-title="usernme">{props.username}</td>

        <td>
          <Link to={`/editUser/id/${props.id}`} className="mx-4">
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

export default UserData;
