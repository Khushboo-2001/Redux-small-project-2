import React from 'react'
import {useSelector} from 'react-redux'
import { MdDelete } from "react-icons/md";
import {useDispatch} from "react-redux";
import { removeUser } from '../feature/slices/UserSlice';


const DisplayUser = () => {

  const dispatch =useDispatch();

    const data = useSelector((state)=>state.users)

    const deleteUser = (id) => {
          dispatch(removeUser(id));
    }

  return (
    <>
    {data.map((user, id)=>{
        return<li key={id} className="username">{user} 

      <button className=' delete-btn' >
      <MdDelete className='delete-icon' onClick={()=>{ deleteUser(id)}}/>
      </button>
      
        </li>
       
    })
    }
    </>
  )
}



export default DisplayUser