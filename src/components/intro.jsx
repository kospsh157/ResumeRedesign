import styled from "styled-components";
import TypeIt from "typeit-react";
// import anime from "animejs/lib/anime.es.js";

// 스타일 컴포넌트는 소문자로 시작하면 안된다.
// width: 100%를 주게 되면 부모 컨테이너를 꽉 채우게 된다.
// 정렬이 안될때는 부모의 컨테이너에 여유공간이 있는지 확인해보자.
const IntroStyled = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  //flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  font-family: Caveat;
  font-size: 50px;
`;

export default function Intro() {
  return (
    <IntroStyled>
      <TypeIt
        options={{
          strings: [
            "Hello!",
            "My name is SungHo, Welcome My Resume Site",
            "I designed it to you feel receive a resume by letter",
            "And you feel easy and no pressure",
          ],
          speed: 50,
          waitUntilVisible: true,
          afterComplete: () => {},
        }}
      />
    </IntroStyled>
  );
}
