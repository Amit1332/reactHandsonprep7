import React, { useEffect } from 'react'
import { useContext,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteRed } from '../Slice/StudentSlice'
const FormFunctionComp = () => {
  const Navigate = useNavigate()


  const {student} = useSelector((state)=> state)
    const dispatch = useDispatch()
    
    const deleteItem = (id)=>{
      dispatch(deleteRed(id))
    
      Navigate('/student')
  }
   

  return (
    <div>
    <div className='container'>

    <div className="feedback">
    <div className='reviewformClass'>

<div className="head" style={{background:"#250346",color:"white"}}>
<div className="box" style={{fontWeight:"bold"}}>S.No.</div>
<div className="box"style={{fontWeight:"bold"}}>Name</div>
<div className="box"style={{fontWeight:"bold"}}>Age</div>
<div className="box"style={{fontWeight:"bold"}}>Batch</div>
<div className="box"style={{fontWeight:"bold"}}>Course</div>

<div className="box"style={{fontWeight:"bold"}}>Action</div>


</div>

<div className="data" >
{
  student.length<1? 
    <div className="head"><div className="box" style={{width:'100%'}}>No Data Available</div></div>:
  student.map((elem,index)=>{
return ( 
  <>
  <div className="head">
  <div className="box">{index+1}</div>
  <div className="box">{elem.name}</div>
  <div className="box">{elem.age}</div>
  <div className="box">{elem.batch}</div>
  <div className="box">{elem.course}</div>
 
  <div className="box">
  <i className="ri-edit-2-line" onClick={()=>Navigate(`/student/update/${index+1}`)}></i>
  <i className="ri-delete-bin-line"  onClick={()=>deleteItem(index)}></i>
  </div>
 
 
 
 </div>
  
  
  </>
)
  })
}



</div>

</div>
   </div> 
   <button onClick={()=>Navigate('/student/create')} className="submit goback">Add New Student</button>

    </div>


    </div>
  )
}

export default FormFunctionComp
