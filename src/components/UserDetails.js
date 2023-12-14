import React from "react";
import DeleteAllUser from "./DeleteAllUser";
import { nameList } from "../api/nameList";
import {useDispatch} from "react-redux"
import  {addUser} from "../feature/slices/UserSlice";
import DisplayUser from "./DisplayUser";

const UserDetails = () => {

  const dispatch = useDispatch();

  const addNewUser=(payload)=>{
    dispatch(addUser(payload));
  }

 
  return (
    <div className="content">
      <div className="admin-table">
        <div className="admin-subtitle">
            List of Subtitle
        </div>
        <button className="btn add-btn" onClick={()=> addNewUser(nameList())}>
            Add new User
        </button>
      </div>
      <ul>
       <DisplayUser/>
      </ul>
      <hr/>
      <DeleteAllUser />
    </div>
  );
};

export default UserDetails;
