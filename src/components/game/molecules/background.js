import React, { useState, useEffect, useRef, useCallback } from "react"
import SingleBackground from "@Gatoms/singleBackground"
import aSkyline from "@assets/game/background/skyline-a.png"
import bSkyline from "@assets/game/background/skyline-b.png"
import buildingsBg from "@assets/game/background/buildings-bg.png"
import buildingsMed from "@assets/game/background/near-buildings-bg.png"
import styled, { keyframes, css } from "styled-components"

const bottomBG = keyframes`
  0% {
      left: 0;
      }
  100% {
      left: -1280px;
      }
`
const midBg = keyframes`
  0% {
      left: 0;
      }
  100% {
      left: -144px;
      }
`
const topBG = keyframes`
  0% {
      left: 0;
      }
  100% {
      left: -493px;
      }
`

const BackgroundContainer = styled.div`
  position: absolute;
  height: 100%;
  display: flex;
  align-items: flex-end;
  animation-name: ${(props) => props.aKeyFrame || "none"};
  animation-duration: ${(props) => props.aDur || "none"};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  ${(props) =>
    props.bg &&
    css`
      background-color: #00003c;
    `}
`

function Background() {
  return (
    <div>
      <BackgroundContainer bg aKeyFrame={bottomBG} aDur="60s">
        <SingleBackground bottom={0} w={1152} h={240} gamebg={aSkyline} />
        <SingleBackground bottom={0} w={128} h={240} gamebg={bSkyline} />
        <SingleBackground bottom={0} w={1152} h={240} gamebg={aSkyline} />
      </BackgroundContainer>
      <BackgroundContainer aKeyFrame={midBg} aDur="5s">
        <SingleBackground bottom={0} w={1296} h={124} gamebg={buildingsBg} />
      </BackgroundContainer>
      <BackgroundContainer aKeyFrame={topBG} aDur="10s">
        <SingleBackground bottom={0} w={1972} h={209} gamebg={buildingsMed} />
      </BackgroundContainer>
    </div>
  )
}

export default Background
