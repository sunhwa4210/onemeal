import React from 'react'
import bearImg from '../asset/bear.png'
import './why.css'
import phoneImg from '../asset/phone.png'
import { useNavigate } from 'react-router-dom'

export default function Why() {
      const navigate = useNavigate()
    
      const handleGoWhy2 = () => {
        navigate('/why2')
      }
  return (
    <div className="intro-wrapper intro-page">
      <div className="title-section">
        <div><img className="bear" src={bearImg} alt="곰돌이" /></div>
        <div>한 끼의 차이, 행운의 식탁<br></br>
내 오늘의 한 끼가, 누군가의 내일이 됩니다.</div>
      </div>
      <div className="question">우린 오늘 메뉴를 고민하지만, <br></br>
어떤 사람들은 오늘도 밥이 없습니다.  </div>
      <div><img className="phone" src={phoneImg} alt="phone"></img></div>
      <button className="btn" onClick={handleGoWhy2}>한 끼의 행운 이어가기</button>
    </div>
  )
}
