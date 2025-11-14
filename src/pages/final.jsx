import React from 'react'
import { useNavigate } from 'react-router-dom'
import bearImg from '../asset/bear.png'
import './final.css'
import crova from '../asset/crova.png'

export default function Final() {
  const navigate = useNavigate()



  return (
    <div className="intro-wrapper">
      <div className="title-section">
        <div><img className="crova" src={crova} alt="행운" /></div>
        <div><img className="bear" src={bearImg} alt="곰돌이" /></div>
      </div>
      <div className="question">당신의 행운이 도착했습니다!
      </div>
      <button className="btn" onClick={() => window.open('https://open.kakao.com/o/gM90mO1h', '_blank')}>한 끼의 행운 이어가기</button>
      <button className="btn2" onClick={()=>{navigate('/download')}}>랜덤 행운문구 받기</button>
    </div>
  )
}
