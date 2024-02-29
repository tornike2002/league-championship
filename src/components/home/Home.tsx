import styled from "styled-components";
import lagueOfLegendTitle from "/assets/BECOME LEGEND.png";
import Apng from "/assets/a.png";
import TopCardClan from "../top-clan-card/TopCardClan";
import CharacterCard from "../character-story-card/CharacterCard";
import CarouselComp from "../carousel/CarouselComp";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import BgVideo from "../bg-video/BgVideo";

const Home = () => {
  return (
    <HomeContainer>
      <BgVideo />
      <Header />
      <FirstSection>
        <BecomeALegendContainer>
          <img src={lagueOfLegendTitle} />
          <AImg src={Apng} />
        </BecomeALegendContainer>

        <h2>Register Now</h2>
      </FirstSection>

      <section>
        <AnnouncementContainer>
          <h2>Announcement</h2>
          <Announcement>
            <img src="assets/announcementImg.jpg" alt="" />
            <div>
              <p>
                Who holds the championship:{" "}
                <span style={{ fontFamily: "italic" }}>Nikusha Xulordava</span>
              </p>
              <p>
                Start Date:
                <span style={{ fontFamily: "italic" }}> 3/23/2024</span>
              </p>
              <p>
                Duration:<span style={{ fontFamily: "italic" }}> 4 Month</span>
              </p>
            </div>
          </Announcement>
        </AnnouncementContainer>
      </section>

      <section>
        <CarouselComp />
      </section>
      <ThirdSection>
        <TopCardClan />
        <TopCardClan />
        <TopCardClan />
      </ThirdSection>
      <FourthSection>
        <CharacterCard />
        <CharacterCard size="large" />
        <CharacterCard />
      </FourthSection>
      <Footer />
    </HomeContainer>
  );
};

const HomeContainer = styled.main``;

const FirstSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
    h2 {
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

const BecomeALegendContainer = styled.span`
  position: relative;
  img {
    width: 760px;
    height: 432px;
  }
`;

const AImg = styled.img`
  position: absolute !important;
  width: 115px !important;
  height: 130px !important;
  top: 133px !important;
  left: 320px !important;
`;
const ThirdSection = styled.section`
  display: flex;
  justify-content: space-around;
`;

const FourthSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Announcement = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  img {
    margin-top: 20px;
    width: 200px;
    height: 200px;
  }
  div {
    width: 100%;
    text-align: left;
  }
  p {
    margin-left: 30px;
    margin-bottom: 20px;
    color: white;
  }
`;

const AnnouncementContainer = styled.section`
  width: 50%;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;

  text-align: center;
  background-color: rgba(0, 0, 0, 0.9);
  h2 {
    color: #c89b3c;
    font-size: 30px;
  }
`;

export default Home;
