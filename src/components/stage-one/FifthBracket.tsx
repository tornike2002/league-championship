import styled from "styled-components";
import bracket from "/assets/pre-tournament/Vector-167.png";

const FifthBracket = () => {
  return (
    <StyledFifthBracket>
      <p className="first-name">Team name</p>
      <img src={bracket} alt="" width={80} height={480} />
      <p className="second-name">Team name</p>
    </StyledFifthBracket>
  );
};

const StyledFifthBracket = styled.div`
  position: relative;
  color: #ffa800;
  font-size: 12px;
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

export default FifthBracket;
