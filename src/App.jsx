import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Intro from './pages/intro'
import Why from './pages/why'
import './App.css'
import Why2 from './pages/why2'
import SelectClimate from './pages/selectclimate'
import SelectDeficit from './pages/selectdeficit'
import SelectConveyor from './pages/selectconveyor'
import SelectSwords from './pages/selectswords'
import Problem from './pages/problem'
import Result from './pages/result'
import Result2 from './pages/result2'
import Final from './pages/final'
import DownloadImg from './pages/downloadImg'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/why" element={<Why />} />
      <Route path="/why2" element={<Why2 />} />
      <Route path="/selectclimate" element={<SelectClimate />} />
      <Route path="/selectdeficit" element={<SelectDeficit />} />
      <Route path="/selectconveyor" element={<SelectConveyor />} />
      <Route path="/selectswords" element={<SelectSwords />} />
      <Route path="/problem" element={<Problem />} />
      <Route path="/result" element={<Result />} />
      <Route path="/result2" element={<Result2 />} />
      <Route path="/final" element={<Final />} />
      <Route path="/download" element={<DownloadImg />} />
      
    </Routes>
  )
}

export default App
