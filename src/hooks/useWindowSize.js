import React, { useState, useEffect } from "react"
import { isBrowser } from "@utils/utils"

function debounce(fn, ms) {
  let timer
  return (_) => {
    clearTimeout(timer)
    timer = setTimeout((_) => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  }
}

export default function useWindowSize() {
  const [dimensions, setDimensions] = useState({
    width: isBrowser ? window.innerWidth : 1200,
    height: isBrowser ? window.innerHeight : 800,
  })

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    }, 1000)

    window.addEventListener("resize", debouncedHandleResize)

    return () => window.removeEventListener("resize", debouncedHandleResize)
  }, [])

  return dimensions
}
