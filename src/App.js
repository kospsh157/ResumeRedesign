import { BrowserRouter, Route, Routes } from "react-router-dom";
import BodyStyled from "./components/BodyStyled";
import Intro from "./components/Intro";
export default function App() {
  return (
    <>
      <img className="log" src="mylogo.png" alt="This is sungho park logo" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/" element={<Intro />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
