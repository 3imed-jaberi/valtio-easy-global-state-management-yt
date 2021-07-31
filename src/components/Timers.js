import { useEffect } from 'react'
import { useAtoms } from '../globalState'


function Timers() {
  const [state, snap] = useAtoms()

  useEffect(() => {
    const interval = setInterval(() => {
      state.timer += 1
    }, 1000)

    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div>{snap.timer}s</div>
}

export default Timers
