import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { LandingPage } from "./pages/LandingPage";
import NonExpired from "./pages/NonExpired/NonExpired";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          {/* <Route path="/" element={<LandingPage />} /> */}
          <Route path="/" element={<NonExpired />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/landing" element={<LandingPage />} />
          {/* <Route path="postjob" element={<PostJob/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
