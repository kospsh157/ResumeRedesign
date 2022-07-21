import TypeIt from "typeit-react";
import "../styles/tailwind.css";

// samll component.
const SuperStrong = ({ children }) => {
  return <strong style={{ fontSize: "80px" }}>{children}</strong>;
};

function Intro() {
  return (
    <>
      <div className="m-0 bg-yellow-500 text-blue-500 font-bold">
        배경
        <div>
          명함 배경
          <div>
            명함 내용물
            <div className="grid grid-cols-2 gap-2">
              명함
              <div>명함 좌측</div>
              <div>명함 우측</div>
            </div>
          </div>
        </div>
      </div>
      <TypeIt>
        Weak text. <SuperStrong>Super strong text.</SuperStrong>
      </TypeIt>
    </>
  );
}

export default Intro;
