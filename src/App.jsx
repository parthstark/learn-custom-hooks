import Debounce from "./components/Debounce"
import IntervalTimer from "./components/IntervalTimer"
import OfflineOnlineListMaker from "./components/OfflineOnlineListMaker"

function App() {

  return (
    <>
      <OfflineOnlineListMaker />
      <hr />
      <IntervalTimer />
      <hr />
      <Debounce />
    </>
  )
}

export default App
