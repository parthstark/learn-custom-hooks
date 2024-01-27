import { useState } from "react";

function App() {

  const useIsOnline = () => {
    const [online, setOnline] = useState(false)
    window.addEventListener('online', () => {
      console.log('Became online')
      setOnline(true);
    });
    window.addEventListener('offline', () => {
      console.log('Became offline')
      setOnline(false);
    });

    return online
  }

  const online = useIsOnline()
  return (
    <>
      hi
    </>
  )
}

export default App
