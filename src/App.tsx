import React from 'react'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
    </div>
  )
}

export default App
