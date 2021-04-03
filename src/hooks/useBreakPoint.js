import { useState, useEffect } from "react"
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

const useMedia = (query) => {
  const [matches, setMatches] = useState(
    isBrowser ? () => window.matchMedia(query).matches : true
  )

  useEffect(() => {
    const media = window.matchMedia(query)
    setMatches(media.matches)

    const debouncedHandleMatches = debounce(function handleResize() {
      setMatches(media.matches)
    }, 500)

    window.addEventListener("resize", debouncedHandleMatches)

    return (_) => {
      window.removeEventListener("resize", debouncedHandleMatches)
    }
  }, [query])

  return matches
}
export default useMedia
