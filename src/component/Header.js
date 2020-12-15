import styled from "styled-components";
import desktopHeader from "../assets/desktop/bg-pattern-header.svg";
import tabletHeader from "../assets/tablet/bg-pattern-header.svg";
// import mobileHeader from "../assets/mobile/bg-pattern-header.svg";
import moonIcon from "../assets/icon-moon.svg";
import sunIcon from "../assets/icon-sun.svg";

import { ToggleSwitch } from "./ToggleSwitch.js";

const Box = styled.header`
  display: flex;
  overflow: hidden;

  @media (min-width: 1281px) {
    height: 160px;
    background: url(${desktopHeader}) no-repeat center center;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    height: 160px;
    background: url(${desktopHeader}) no-repeat center center;
  }
  @media only screen and (min-device-width: 1024px) and (max-device-height: 1366px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
    height: 136px;
    background: url(${tabletHeader}) no-repeat center center;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    height: 136px;
    background: url(${tabletHeader}) no-repeat center center;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    height: 136px;
    background: url(${tabletHeader}) no-repeat center center;
    width: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  justify-content: space-around;

  @media (min-width: 1281px) {
    margin-top: 44px;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    margin-top: 44px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: 42px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    margin-top: 32px;
  }
`;
const Title = styled.span`
  color: white;
  font-size: 32px;
`;

const SunIcon = styled.span`
  background: url(${sunIcon}) no-repeat center center;
  display: inline-block;
  width: 20px;
  height: 24px;
  vertical-align: bottom;
  background-size: 17px auto;
`;

const MoonIcon = styled.span`
  background: url(${moonIcon}) no-repeat center center;
  display: inline-block;
  width: 20px;
  height: 24px;
  vertical-align: bottom;
`;

export const Header = ({ toggleTheme }) => {
  return (
    <Box>
      <Content>
        <Title>devjobs</Title>
        <div className="switch">
          <SunIcon></SunIcon>
          <ToggleSwitch toggle={toggleTheme} />
          <MoonIcon></MoonIcon>
        </div>
      </Content>
    </Box>
  );
};
