import TypeIt from "typeit-react";
import "../styles/tailwind.css";

// samll component.
const SuperStrong = ({ children }) => {
  return <strong style={{ fontSize: "80px" }}>{children}</strong>;
};

function Intro() {
  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen bg-[url('../../public/img/onDesk.png')]">
        <div className="flex-col p-1 justify-center items-center overflow-hidden lg:w-[30rem] lg:h-[16rem] shadow-2xl rounded-lg bg-slate-600 text-amber-400">
          <p className="text-red-500 font-bold m-1">
            Quick Card for busy Headhunter
          </p>
          <div className="grid grid-cols-2 gap-2 font-['Edu VIC WA NT Beginner']">
            <div className="text-center font-bold">Name: </div>

            <div className="text-center font-bold">
              <TypeIt
                getBeforeInit={(instance) => {
                  instance.type("Sungho Park");
                  return instance;
                }}
                getAfterInit={(instance) => {
                  instance.destroy();
                  return instance;
                }}
              />
            </div>

            <div className="text-center font-bold">Visa State: </div>

            <div className="text-center font-bold">
              <TypeIt
                getBeforeInit={(instance) => {
                  instance.pause(1000).type("Canadian PR");
                  return instance;
                }}
                getAfterInit={(instance) => {
                  instance.destroy();
                  return instance;
                }}
              />
            </div>

            <div className="text-center font-bold">Desired job: </div>

            <div className="text-center font-bold">
              <TypeIt
                getBeforeInit={(instance) => {
                  instance.pause(2200).type("Jr. Front/Backed Web Dev.");
                  return instance;
                }}
                getAfterInit={(instance) => {
                  instance.destroy();
                  return instance;
                }}
              />
            </div>

            <div className="text-center font-bold">Location: </div>

            <div className="text-center font-bold">
              <TypeIt
                getBeforeInit={(instance) => {
                  instance.pause(5000).type("Coquiltam B.C Canada");
                  return instance;
                }}
                getAfterInit={(instance) => {
                  instance.destroy();
                  return instance;
                }}
              />
            </div>

            <div className="text-center font-bold">e-mail: </div>

            <div className="text-center font-bold">
              <TypeIt
                getBeforeInit={(instance) => {
                  instance.pause(7000).type("sungho.park.826@gmail.com");
                  return instance;
                }}
                getAfterInit={(instance) => {
                  instance.destroy();
                  return instance;
                }}
              />
            </div>

            <div className="text-center font-bold">Work experience: </div>

            <div className="text-center font-bold">
              <TypeIt
                getBeforeInit={(instance) => {
                  instance.pause(9000).type("0~1year(newbie)");
                  return instance;
                }}
                getAfterInit={(instance) => {
                  instance.destroy();
                  return instance;
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <TypeIt>
        Weak text. <SuperStrong>Super strong text.</SuperStrong>
      </TypeIt> */}
    </>
  );
}

export default Intro;
