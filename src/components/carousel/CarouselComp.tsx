import styled from "styled-components";
import testImg from "/assets/theme-21-border.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { useEffect, useState } from "react";
import axios from "../../api/axios";

const CarouselComp = () => {
  const [teams, setTeams] = useState<teamType[]>([]);
  useEffect(() => {
    const getTeams = async () => {
      const response = await axios.get("/api/teams_list/");
      setTeams(response.data);
    };
    getTeams();
  }, []);
  return (
    <Container>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={6}
        autoplay={true}
        draggable={true}
        loop={true}
      >
        {teams.map((team) => (
          <SwiperSlide key={team.id}>
            <span>
              <img src={testImg} alt="" />
              <h2>{team.name}</h2>
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

const Container = styled.div`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.19) -12.5%,
    #1b4a36 37.34%,
    rgba(7, 8, 8, 0.32) 115.21%
  );

  display: flex;
  align-items: center;
  padding: 0 50px;
  div {
    height: 200px;
    display: flex;
    align-items: center;
  }
  img {
    width: 140px;
    transition: 0.3s;
    &:hover {
      scale: 1.3;
    }
    &:active {
      cursor: grab;
    }
  }
  &:active {
    cursor: grab;
  }
  span {
    font-family: "Cormorant Unicase", serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 500;
    font-size: 16px;
    color: white;
    h2 {
      text-transform: capitalize;
    }
  }
`;

export default CarouselComp;
