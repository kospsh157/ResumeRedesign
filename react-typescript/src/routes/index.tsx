import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "../components/Intro";

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Intro></Intro>} />
      <Route path="/home" element={<></>} />
      <Route path="/aboutme" element={<></>} />
      <Route path="/skill" element={<></>} />
      <Route path="/projects" element={<></>} />
      <Route path="/board" element={<></>} />
    </Routes>
  </BrowserRouter>
);
export default Router;
