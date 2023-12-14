import React from 'react'
import {useDispatch} from 'react-redux';
// import { clearAll } from '../feature/slices/UserSlice';
import { clearAllUserImport } from './CreateAction';



const DeleteAllUser = () => {

  const dispatch=useDispatch();

  const DeleteAll =()=>{
    dispatch(clearAllUserImport());
  }

  return (
    <div className="btn" onClick={()=>DeleteAll()}>DeleteAllUser</div>
  )
}

export default DeleteAllUser