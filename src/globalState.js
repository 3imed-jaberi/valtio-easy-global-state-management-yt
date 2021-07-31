import { proxy, useSnapshot } from "valtio"

const globalState = proxy({
  counter: 0,
  timer: 0
})

function useAtoms() {
  return [globalState, useSnapshot(globalState)]
}

export { globalState, useAtoms }
