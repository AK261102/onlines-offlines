import { useEffect, useState } from 'react'
import { useIsOnline } from './hooks/onlinehook'



function App() {
  const isOnline = useIsOnline()

  return (
    <>
      {isOnline ? "You are online yay!" : "You are not online"}
    </>
  )
}

export default App