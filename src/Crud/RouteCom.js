import React from 'react'
import Home from './Views/Home'

import Contact from './Views/Contact'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Footer from './Views/Footer'
import Navbar from './Views/Navbar'
import FormFunctionComp from './Views/FormFunctionComp'
import { useState } from 'react'
import Create from './Views/Create'

const RouteCom = () => {
 
  return (
    <div>
      <BrowserRouter>
     <Navbar/>
       <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='/student' element={

              <FormFunctionComp/>

            }/>
            <Route path='student/create' element={

              <Create update={false} />
            }/>
            <Route path='student/update/:id' element={
              <Create update={true}/>
            }
              />

            <Route path='/contact' element={<Contact/>}/>


       </Routes>
       <Footer/>
      </BrowserRouter>


    </div>
  )
}

export default RouteCom