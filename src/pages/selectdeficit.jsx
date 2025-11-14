import React from 'react'
import { useNavigate } from 'react-router-dom'
import bearImg from '../asset/bear.png'
import './selectclimate.css'
import swordsImg from '../asset/swords (1).png'

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
        <div className="title">분쟁과재난</div>
        <div className="icon"><img className="card-icon" src={swordsImg} alt="climate"/></div>
        <div className="content">우크라이나 사태, 중동 위기 등 분쟁과<br></br> 코로나19 같은 재난이 겹치며<br></br>식량 공급망이 흔들리고,<br></br>원조 예산까지 줄어들고 있습니다.</div>
      </div> 

      <button className="btn">한 끼의 행운 이어가기</button>
    </div>
  )
}
