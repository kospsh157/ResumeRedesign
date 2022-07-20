import TypeIt from "typeit-react";

// This could be any component that generates HTML.
const SuperStrong = ({ children }) => {
  return <strong style={{ fontSize: "80px" }}>{children}</strong>;
};

function Intro() {
  return (
    <TypeIt>
      Weak text. <SuperStrong>Super strong text.</SuperStrong>
    </TypeIt>
  );
}

export default Intro;
