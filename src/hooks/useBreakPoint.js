import { useState, useEffect } from "react"

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

export default function useMedia(query) {
  const [matches, setMatches] = useState()

  useEffect(() => {
    const media = window.matchMedia(query)
    setMatches(media.matches)

    const debouncedHandleMatches = debounce(function handleResize() {
      //   if (media.matches !== matches) {
      //     setMatches(media.matches)
      //   }
      setMatches(media.matches)
    }, 500)

    window.addEventListener("resize", debouncedHandleMatches)

    return (_) => {
      window.removeEventListener("resize", debouncedHandleMatches)
    }
  }, [query])

  return matches
}
