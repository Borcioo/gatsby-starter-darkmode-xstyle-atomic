import React, { useState, useLayoutEffect, useRef, useCallback } from "react"
import Background from "@Gmolecules/background"
import styled, { keyframes, css } from "styled-components"
import { useEffect } from "react"
import player from "@Gmolecules/player"
import colision from "@Gmolecules/colision"
import { controller } from "@Gatoms/defaults"
import platform from "@Gatoms/platform"

const Main = styled.canvas`
  position: absolute;
  height: 496px;
  width: 1152px;
`
const matrix = Array(3).fill()

matrix[0] = { h: 10, w: 100, x: 40, y: 450 }
matrix[1] = { h: 10, w: 100, x: 200, y: 450 }
matrix[2] = { h: 10, w: 100, x: 600, y: 450 }
matrix[3] = { h: 10, w: 100, x: 700, y: 400 }

// matrix.forEach((item) => console.log(item.h, item.w, item.w, item.y))

function Game() {
  const [isPaused, setIsPaused] = useState(true)
  const context = useRef()

  useLayoutEffect(() => {
    if (!isPaused) {
      let GameLoop

      const loop = () => {
        const context = document.querySelector("canvas").getContext("2d")
        context.canvas.height = 496
        context.canvas.width = 1152

        for (var a = 0; a < matrix.length; a++) {
          platform(context, matrix[a].h, matrix[a].w, matrix[a].x, matrix[a].y)
        }

        // matrix.forEach((item) =>
        //   platform(context, item.h, item.w, item.x, item.y)
        // )

        colision(controller, matrix)

        player(context)

        GameLoop = requestAnimationFrame(loop)
      }

      window.addEventListener("keydown", controller.keyListener)
      window.addEventListener("keyup", controller.keyListener)
      GameLoop = requestAnimationFrame(loop)

      return () => {
        cancelAnimationFrame(GameLoop)
        window.removeEventListener("keydown", controller.keyListener)
        window.removeEventListener("keyup", controller.keyListener)
      }
    }
  }, [isPaused])

  return (
    <>
      <div id="container">
        <Background />
        <Main ref={context} />
      </div>
      <button onClick={() => setIsPaused(!isPaused)}>
        {isPaused ? "Resume" : "Pause"}
      </button>
    </>
  )
}

export default Game
