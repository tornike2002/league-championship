import styled from "styled-components";
import bracket from "/assets/pre-tournament/Vector-159.png";

type Props = {
  position?: "reverse";
  firstTeam?: string;
  secondTeam?: string;
};

const FourthBracket = ({ position, firstTeam, secondTeam }: Props) => {
  const StyledFourthBracket = styled.div`
    position: relative;
    color: #f7d521;
    font-size: 12px;
    img {
      transform: ${() => (position === "reverse" ? "rotate(180deg)" : "")};
    }
    .first-name {
      position: absolute;
      left: 0;
      top: -15px;
      left: 7px;
    }
    .second-name {
      position: absolute;
      left: 7px;
      bottom: 5px;
    }
  `;
  return (
    <StyledFourthBracket>
      <p className="first-name">{firstTeam}</p>
      <img src={bracket} alt="" width={80} height={240} />
      <p className="second-name">{secondTeam}</p>
    </StyledFourthBracket>
  );
};

export default FourthBracket;
