import styled from "styled-components";
import Header from "../header/Header";
import FirstBracket from "./FirstBracket";
import SecondBracket from "./SecondBracket";
import ThirdBracket from "./ThirdBracket";
import FourthBracket from "./FourthBracket";
import FifthBracket from "./FifthBracket";
import SixthBracket from "./SixthBracket";
import SeventhBracket from "./SeventhBracket";
import Footer from "../footer/Footer";
import WinnerTeam from "./WinnerTeam";

const PreTournament = () => {
  return (
    <>
      <Header />
      <BgStyle></BgStyle>
      <StyledMain>
        <div className="main-bracket">
          <div className="first-brackets">
            <FirstBracket />
            <FirstBracket />
            <FirstBracket />
            <FirstBracket />
            <FirstBracket />
            <FirstBracket />
            <FirstBracket />
            <FirstBracket />
            <FirstBracket />
            <FirstBracket />
            <FirstBracket />
            <FirstBracket />
            <FirstBracket />
            <FirstBracket />
            <FirstBracket />
            <FirstBracket />
            <FirstBracket />
            <FirstBracket />
            <FirstBracket />
            <FirstBracket />
            <FirstBracket />
            <FirstBracket />
            <FirstBracket />
            <FirstBracket />
            <FirstBracket />
            <FirstBracket />
            <FirstBracket />
            <FirstBracket />
            <FirstBracket />
            <FirstBracket />
            <FirstBracket />
            <FirstBracket />
          </div>
          <div className="second-brackets">
            <SecondBracket />
            <SecondBracket />
            <SecondBracket />
            <SecondBracket />
            <SecondBracket />
            <SecondBracket />
            <SecondBracket />
            <SecondBracket />
            <SecondBracket />
            <SecondBracket />
            <SecondBracket />
            <SecondBracket />
            <SecondBracket />
            <SecondBracket />
            <SecondBracket />
            <SecondBracket />
          </div>
          <div className="third-brackets">
            <ThirdBracket />
            <ThirdBracket />
            <ThirdBracket />
            <ThirdBracket />
            <ThirdBracket />
            <ThirdBracket />
            <ThirdBracket />
            <ThirdBracket />
          </div>
          <div className="fourth-brackets">
            <FourthBracket />
            <FourthBracket />
            <FourthBracket />
            <FourthBracket />
          </div>
          <div className="fifth-brackets">
            <FifthBracket />
            <FifthBracket />
          </div>
          <div className="sixth-brackets">
            <SixthBracket />
          </div>
          <div className="seventh-brackets">
            <SeventhBracket />
          </div>
          <div className="winner">
            <WinnerTeam />
          </div>
          <div className="seventh-brackets">
            <SeventhBracket position="reverse" />
          </div>
          <div className="sixth-brackets">
            <SixthBracket position="reverse" />
          </div>
          <div className="fifth-brackets">
            <FifthBracket position="reverse" />
            <FifthBracket position="reverse" />
          </div>
          <div className="fourth-brackets">
            <FourthBracket position="reverse" />
            <FourthBracket position="reverse" />
            <FourthBracket position="reverse" />
            <FourthBracket position="reverse" />
          </div>
          <div className="third-brackets">
            <ThirdBracket position="reverse" />
            <ThirdBracket position="reverse" />
            <ThirdBracket position="reverse" />
            <ThirdBracket position="reverse" />
            <ThirdBracket position="reverse" />
            <ThirdBracket position="reverse" />
            <ThirdBracket position="reverse" />
            <ThirdBracket position="reverse" />
          </div>
          <div className="second-brackets">
            <SecondBracket position="reverse" />
            <SecondBracket position="reverse" />
            <SecondBracket position="reverse" />
            <SecondBracket position="reverse" />
            <SecondBracket position="reverse" />
            <SecondBracket position="reverse" />
            <SecondBracket position="reverse" />
            <SecondBracket position="reverse" />
            <SecondBracket position="reverse" />
            <SecondBracket position="reverse" />
            <SecondBracket position="reverse" />
            <SecondBracket position="reverse" />
            <SecondBracket position="reverse" />
            <SecondBracket position="reverse" />
            <SecondBracket position="reverse" />
            <SecondBracket position="reverse" />
          </div>
          <div className="first-brackets">
            <FirstBracket position="reverse" />
            <FirstBracket position="reverse" />
            <FirstBracket position="reverse" />
            <FirstBracket position="reverse" />
            <FirstBracket position="reverse" />
            <FirstBracket position="reverse" />
            <FirstBracket position="reverse" />
            <FirstBracket position="reverse" />
            <FirstBracket position="reverse" />
            <FirstBracket position="reverse" />
            <FirstBracket position="reverse" />
            <FirstBracket position="reverse" />
            <FirstBracket position="reverse" />
            <FirstBracket position="reverse" />
            <FirstBracket position="reverse" />
            <FirstBracket position="reverse" />
            <FirstBracket position="reverse" />
            <FirstBracket position="reverse" />
            <FirstBracket position="reverse" />
            <FirstBracket position="reverse" />
            <FirstBracket position="reverse" />
            <FirstBracket position="reverse" />
            <FirstBracket position="reverse" />
            <FirstBracket position="reverse" />
            <FirstBracket position="reverse" />
            <FirstBracket position="reverse" />
            <FirstBracket position="reverse" />
            <FirstBracket position="reverse" />
            <FirstBracket position="reverse" />
            <FirstBracket position="reverse" />
            <FirstBracket position="reverse" />
            <FirstBracket position="reverse" />
          </div>
        </div>
      </StyledMain>
      <Footer />
    </>
  );
};

const BgStyle = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(/backgrounds/42087236a4cc442274f24d2caf4090a3.jpg);
  position: fixed;
  top: 0;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  z-index: -1;
`;

const StyledMain = styled.main`
  font-family: "Cormorant Unicase", serif;
  font-weight: 400;
  display: flex;
  justify-content: center;
  padding: 200px 0 100px;
  .main-bracket {
    display: flex;
    .first-brackets {
      padding-top: 14px;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
    .second-brackets {
      padding-top: 28px;
      display: flex;
      flex-direction: column;
      gap: 51px;
    }
    .third-brackets {
      padding-top: 55px;
      display: flex;
      flex-direction: column;
      gap: 105px;
    }
    .fourth-brackets {
      padding-top: 110px;
      display: flex;
      flex-direction: column;
      gap: 214px;
    }
    .fifth-brackets {
      padding-top: 215px;
      display: flex;
      flex-direction: column;
      gap: 428px;
    }
    .sixth-brackets {
      padding-top: 435px;
    }
    .seventh-brackets {
      padding-top: 895px;
    }
    .winner {
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
`;

export default PreTournament;
