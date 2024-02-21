import React, { useState } from "react";
import styled from "styled-components";
import lagueOfLegendTitle from "/assets/leagueOfLegends.png";

const Home = () => {
  const [registerHover, setRegisterHover] = useState(false);
  return (
    <HomeContainer>
      <img src={lagueOfLegendTitle} alt="" />
      <div
        onMouseEnter={() => {
          setRegisterHover(true);
        }}
        onMouseLeave={() => {
          setRegisterHover(false);
        }}
      >
        <video autoPlay muted loop>
          <source
            src={"/assets/find-match-button-idle.webm"}
            type="video/mp4"
          />
        </video>
        <video autoPlay muted loop>
          <source
            src={"/assets/find-match-button-intro.webm"}
            type="video/mp4"
          />
        </video>
        {registerHover && (
          <video autoPlay muted loop>
            <source
              src={"/assets/find-match-button-hover.webm"}
              type="video/mp4"
            />
          </video>
        )}
        <h1>Register Now</h1>
      </div>
    </HomeContainer>
  );
};

const HomeContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: 800px;
  }
  div {
    width: 230px;
    height: 100px;
    cursor: pointer;
    position: relative;
    video {
      position: absolute;
      top: 0;
      left: -15px;
      transition: 0.4s;
    }
    h1 {
      position: absolute;
      font-size: medium;
      color: white;
      z-index: 1;
      top: 38px;
      left: 53px;
      width: 11ch;
    }
  }
`;

export default Home;