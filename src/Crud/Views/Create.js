import React, { useEffect } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate, useParams} from 'react-router-dom'
import { add, edit } from '../Slice/StudentSlice'

const Create = ({update}) => {
  const {student} = useSelector((state)=> state)
  const dispatch =useDispatch()
  const id =useParams().id-1
    const Navigate = useNavigate()
    const [userData,setUserData]=useState({
      name:'',
      age:'',
      batch:'',
      course: ''
    })


    useEffect(() => {
     if(update){
      setUserData(student[id])
     }
    }, [update]);

  const handleChange = (e)=>{
   setUserData({...userData,[e.target.name]:e.target.value})
  }

  const handleSubmit = ()=>{

    if(update){
      dispatch(edit({userData,id}))


       Navigate('/student')
    }
    else{
      dispatch(add(userData))
      Navigate('/student')
    }
  }

  return (
    <div>
    <div className='container'>

   
    <div className='formClass'>
        <div className="form-valid">
        <div className="labels">
       <label htmlFor="">Name</label>
       <label htmlFor="">Age</label>
        <label htmlFor="">Batch</label>
        <label htmlFor="">Course</label>
       </div>
       <div className="inputs">

                
                <input type="text" placeholder='Enter your name' name='name' value={userData.name} onChange={handleChange}/>
       <input type="number" placeholder='Enter your age' name='age' value={userData.age} onChange={handleChange}/>
       <input type="text" placeholder='Enter your Batch' name='batch' value={userData.batch} onChange={handleChange}/>
       <input type="text" placeholder='Enter your Course' name='course' value={userData.course} onChange={handleChange}/>
                
                </div>
    
       

       </div>
       {
            update ?
         <input type="submit" value="Update" className='submit' onClick={handleSubmit} />

   :
       <input type="submit" value="Submit" className='submit' onClick={handleSubmit}/>


       }
       <button  className='submit' onClick={()=>Navigate('/student')}>Back</button>

    </div>


   
    </div>
    </div>
  )
}

export default Create
