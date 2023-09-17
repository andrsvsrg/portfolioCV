import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TypedHeader from './components/typedHeader/TypedHeader.jsx'
import HomePage from './components/HomePage.jsx'
import CanvasAnimation from './components/mainCanvas/Canvas.jsx'
import { ParallaxProvider } from 'react-scroll-parallax'


function App() {

  return (
    <>
      <ParallaxProvider>
        <HomePage/>
      </ParallaxProvider>
    </>
  )
}

export default App
