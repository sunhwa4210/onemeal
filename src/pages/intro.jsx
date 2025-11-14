import React from 'react'
import { useNavigate } from 'react-router-dom'
import bearImg from '../asset/bear.png'
import './intro.css'
import phoneImg from '../asset/phone.png'

export default function Intro() {
  const navigate = useNavigate()

  const handleGoWhy = () => {
    navigate('/why')
  }

  return (
    <div className="intro-wrapper">
      <div className="title-section">
        <div><img className="bear" src={bearImg} alt="곰돌이" /></div>
        <div>한 끼의 차이, 행운의 식탁<br></br>
내 오늘의 한 끼가, 누군가의 내일이 됩니다.</div>
      </div>
      <div className="question">오늘 뭐 먹지..?</div>
      <div><img className="phone" src={phoneImg} alt="phone"></img></div>
      <button className="btn" onClick={handleGoWhy}>한 끼의 행운 이어가기</button>
    </div>
  )
}
