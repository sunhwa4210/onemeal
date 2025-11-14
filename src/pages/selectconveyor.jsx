import React from 'react'
import { useNavigate } from 'react-router-dom'
import bearImg from '../asset/bear.png'
import './selectclimate.css'
import convayorImg from '../asset/conveyor-belt.png'

export default function SelectConveyor() {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }


  return (
    <div className="intro-wrapper selectclimate-page">
      <div className="title-section">
        <div><img className="bear" src={bearImg} alt="곰돌이" /></div>
        <div>한 끼의 차이, 행운의 식탁<br></br>
내 오늘의 한 끼가, 누군가의 내일이 됩니다.</div>
      </div>
      <div className="question">왜 이런 한 끼의 차이가 극대화 될까요?
        <div className="sub-question">각 카드를 눌러 상세 내용을 확인해 보세요</div>
      </div>
      <div className="bigcard" onClick={handleBack}>
        <div className="title">식량시스템 문제</div>
        <div className="icon"><img className="card-icon" src={convayorImg} alt="climate"/></div>
        <div className="content">세계의 식량 생산량은<br></br>전 인류가 먹고도 남을 만큼 충분하지만,<br></br>경제 논리와 불평등한 접근성 때문에<br></br>많은 이들이 여전히 밥 한 끼조차<br></br>얻지 못하고 있습니다.</div>
      </div> 

      <button className="btn">한 끼의 행운 이어가기</button>
    </div>
  )
}
