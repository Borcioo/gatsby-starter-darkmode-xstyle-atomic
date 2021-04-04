import React, { useState, useEffect, useRef, useCallback } from "react"
import gameover from "@assets/game/gameover.png"
import wallpaperbetter from "@assets/game/wallpaperbetter.jpg"
import dinoAsset from "@assets/game/kungfu.gif"
import cloudAsset1 from "@assets/game/clouds1.gif"
import cloudAsset2 from "@assets/game/clouds2.gif"
import cloudAsset3 from "@assets/game/clouds3.gif"
import cloudAsset4 from "@assets/game/clouds4.gif"
import cloudAsset5 from "@assets/game/clouds5.gif"
import blockAsset from "@assets/game/lama.gif"
import roadAsset from "@assets/game/road.png"
import _ from "lodash"

function Game() {
  const [jump, setJump] = useState("")
  const [gameOver, setGameOver] = useState("")
  const [blockActive, setBlockActive] = useState("")
  const [claudsActive, setClaudsActive] = useState("")
  const [roadActive, setRoadActive] = useState("")
  const [score, setScore] = useState(0)
  const [restart, setrestart] = useState(false)

  let playerScore = 0
  let interval = 0
  let result = 0

  const scoreCounter = () => {
    playerScore++
    setScore(playerScore)
  }

  const StartGame = (go) => {
    setGameOver("")
    setBlockActive("blockActive")
    setRoadActive("roadActive")
    setClaudsActive("claudsActive")
    setrestart(true)
    interval = null
    result = null
    result = setInterval(EndGame, 100)
    interval = setInterval(scoreCounter, 500)
  }

  const EndGame = (e) => {
    let dino = document.getElementById("dino")
    let block = document.getElementById("block")
    let dinoBottom = parseInt(getComputedStyle(dino).getPropertyValue("bottom"))
    let blockLeft = parseInt(getComputedStyle(block).getPropertyValue("left"))
    if (dinoBottom <= 90 && blockLeft >= -32 && blockLeft <= 80) {
      setGameOver("gameOver")
      setBlockActive("")
      setRoadActive("")
      setClaudsActive("")
      setScore(0)
      clearInterval(interval)
      clearInterval(result)
      interval = null
      result = null
    }
  }

  useEffect(() => {
    window.addEventListener("animationstart", (e) => EndGame(e))
    return () => {
      window.removeEventListener("animationstart", (e) => EndGame(e))
    }
  }, [])

  const handleUserKeyPress = (event) => {
    event.code == "Space" ? StartGame() : ""
    if (event.key == "ArrowUp") {
      setJump("dinoActive")
      setTimeout(function () {
        setJump("")
      }, 650)
    }
  }

  useEffect(() => {
    window.addEventListener(
      "keydown",
      _.throttle((e) => handleUserKeyPress(e), 700, {
        trailing: false,
        leading: true,
      })
    )
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress)
    }
  }, [])

  return (
    <>
      <div id="container">
        <div id="road" className={roadActive}>
          <img src={wallpaperbetter} alt="bg" />
        </div>
        <div id="dino" className={jump}>
          <img src={dinoAsset} alt="dino" />
        </div>
        <div id="block" className={blockActive}>
          <img src={blockAsset} alt="blocks" />
        </div>

        <div id="cloud1" className={claudsActive}>
          <img src={cloudAsset1} alt="cloud1" />
        </div>
        <div id="cloud5" className={claudsActive}>
          <img src={cloudAsset5} alt="cloud5" />
        </div>
        <div id="cloud2" className={claudsActive}>
          <img src={cloudAsset2} alt="cloud2" />
        </div>
        <div id="cloud3" className={claudsActive}>
          <img src={cloudAsset3} alt="cloud3" />
        </div>
        <div id="cloud4" className={claudsActive}>
          <img src={cloudAsset4} alt="cloud4" />
        </div>

        <div id="score">
          Score <b>{score}</b>
        </div>
        <div id="gameOver" className={gameOver}>
          <img src={gameover} alt="gameover" />
        </div>
      </div>
    </>
  )
}

export default Game
