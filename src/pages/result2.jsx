import React from 'react'
import { useNavigate } from 'react-router-dom'
import bearImg from '../asset/bear.png'
import './result2.css'
import cardImg from '../asset/cardImg.png'

export default function Result2() {
  const navigate = useNavigate()



  return (
    <div className="intro-wrapper">
      <div className="title-section">
        <div><img className="bear" src={bearImg} alt="곰돌이" /></div>
        <div>한 끼의 차이, 행운의 식탁<br></br>
내 오늘의 한 끼가, 누군가의 내일이 됩니다.</div>
      </div>
      <div className="question">이렇게 거대한 문제 속에서 <br></br> 한 사람의 선택이 의미 있을까요?
      </div>
      <div className="bigcard">
        <div className="icon"><img className="cardImg-icon" src={cardImg} alt="climate"/></div>
        <div className="content">당신은 이미 그 질문에 <br></br>답한 사람이에요.<br></br>오늘 당신의 한 끼가 <br></br>누군가의 식탁을 밝혔습니다</div>
      </div> 

      <button className="btn" onClick={()=>{navigate('/final')}}>한 끼의 행운 이어가기</button>
    </div>
  )
}
