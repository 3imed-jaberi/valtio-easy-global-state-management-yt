import { useAtoms } from '../globalState'

function Counter() {
  const [state, snap] = useAtoms()

  return (
    <button onClick={() => { state.counter += 1 }}>
      {snap.counter}
    </button>
  )
}

export default Counter