import React from 'react'
import { useNavigate } from 'react-router-dom'
import bearImg from '../asset/bear.png'
import './selectclimate.css'
import climateImg from '../asset/climate-change.png'

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
        <div className="title">기후변화</div>
        <div className="icon"><img className="card-icon" src={climateImg} alt="climate"/></div>
        <div className="content">잦은 가뭄, 홍수, 불규칙한 날씨 등<br></br>기후변화로 인한 흉작과<br></br>경작 실패가 이어지며<br></br>누군가의 식탁에서<br></br>한 끼가 사라지고 있습니다.</div>
      </div> 

      <button className="btn">한 끼의 행운 이어가기</button>
    </div>
  )
}
