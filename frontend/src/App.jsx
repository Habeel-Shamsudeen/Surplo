import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './App.css'
import { Signup } from './pages/Signup';
import { Signin } from './pages/Signin';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        {/* <Route path="/home" element={<Home />} />
        <Route path="postjob" element={<PostJob/>}/> */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
