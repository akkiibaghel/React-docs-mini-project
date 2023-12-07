import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Background from './Comoponents/Background'
import Foreground from './Comoponents/Foreground'

function App() {

  return (
    <>
    <div className='relative w-full h-screen bg-zinc-800'>
      <Background />
      <Foreground />
    </div>
      
    </>
  )
}

export default App
