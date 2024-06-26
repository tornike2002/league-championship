import styled from "styled-components";
import garen from "/footer/garen.png";
import talon from "/footer/talon.png";
import Flogo from "/footer/footerLogo.png";

import tiktok from "/footer/mage_tiktok-circle.png";
import fb from "/footer/ic_outline-facebook.png";
import discord from "/footer/ic_outline-discord.png";
import { YoutubeOutlined } from "@ant-design/icons";
const Footer: React.FC = () => {
  return (
    <FooterComponents>
      <FooterMainWrapper>
        <img src={garen} alt="garen" />
        <Cookies>
          <CookiesATag href="notice">Privacy Notice</CookiesATag>
          <CookiesATag href="terms">Terms Of Service</CookiesATag>
          <CookiesATag href="cookie">Cookie Policy</CookiesATag>
          <CookiesATag href="information">Who we are?</CookiesATag>
        </Cookies>
        <img src={Flogo} alt="Flogo" />
        <FooterSocialsWrapper>
          <span>
            <a
              href="https://www.youtube.com/@korvina9201"
              target="_blank"
              className="yt"
            >
              <YoutubeOutlined />
            </a>
            <a href="https://www.tiktok.com/@korvinayoutube" target="_blank">
              <img src={tiktok} alt="tiktok" />
            </a>
          </span>
          <span>
            <a href="https://www.facebook.com/Legendshub.ge" target="_blank">
              <img src={fb} alt="fb" />
            </a>
            <a href="#" target="_blank">
              <img src={discord} alt="discord" />
            </a>
          </span>
        </FooterSocialsWrapper>
        <img src={talon} alt="talon" />
      </FooterMainWrapper>
    </FooterComponents>
  );
};

export default Footer;

const FooterComponents = styled.footer`
  width: 100%;
  height: 300px;
  background: linear-gradient(
    180deg,
    rgba(1, 1, 1, 0.93) 11.88%,
    #754112 61.72%,
    rgba(35, 39, 6, 0.812789) 113.36%,
    rgba(8, 55, 33, 0.61) 170.67%
  );
`;
const FooterMainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 40px;
`;
const FooterSocialsWrapper = styled.div`
  display: flex;
  gap: 80px;
  span {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
  }

  .yt {
    font-size: 48px;
    color: #f5ac44;
  }
`;

const Cookies = styled.div`
  font-family: "Roboto Slab", serif;
  font-weight: 300;
  font-size: 18px;
  line-height: 23.74px;
  display: flex;
  flex-direction: column;
  gap: 17px;
`;

const CookiesATag = styled.a`
  color: #ffffff;
  text-decoration: none;

  &:hover {
    color: gold;
  }
`;
