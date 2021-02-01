import { useRef, useEffect } from "react"

function useInterval(callback: any, delay: number) {
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  })

  useEffect(() => {
    function tick() {
      ;(savedCallback as any).current()
    }

    const id = setInterval(tick, delay)
    return () => clearInterval(id)
  }, [delay])
}

export default useInterval
