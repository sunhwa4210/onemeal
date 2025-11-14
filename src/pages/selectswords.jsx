import React from 'react'
import { useNavigate } from 'react-router-dom'
import bearImg from '../asset/bear.png'
import './selectclimate.css'
import deficitImg from '../asset/deficit.png'

export default function Why() {
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
        <div className="title">부족한 예산</div>
        <div className="icon"><img className="card-icon" src={deficitImg} alt="climate"/></div>
        <div className="content">매년 식량 위기 인구는 늘어나지만,<br></br>이를 해결할 예산은<br></br>여전히 턱없이 부족합니다.<br></br>굶주림은 커지는데,<br></br>도움의 손길은 점점 줄고 있습니다.</div>
      </div> 

      <button className="btn">한 끼의 행운 이어가기</button>
    </div>
  )
}
