import React from 'react'
import bearImg from '../asset/bear.png'
import './why2.css'
import climateImg from '../asset/climate-change.png'
import deficitImg from '../asset/deficit.png'
import convayorImg from '../asset/conveyor-belt.png'
import swordsImg from '../asset/swords (1).png'
import { useNavigate } from 'react-router-dom'

export default function Why() {
    const navigate = useNavigate();


  return (
    <div className="intro-wrapper why2-page">
      <div className="why2-title-section">
        <div><img className="bear" src={bearImg} alt="곰돌이" /></div>
        <div>한 끼의 차이, 행운의 식탁<br></br>
내 오늘의 한 끼가, 누군가의 내일이 됩니다.</div>
      </div>
      <div className="why2-question">왜 이런 한 끼의 차이가 극대화 될까요?
        <div className="why2-sub-question">각 카드를 눌러 상세 내용을 확인해 보세요</div>
      </div>
      <div className="why2-card-row">
        <div className="why2-card" onClick={() => navigate('/selectclimate')}>
            <div className="why2-card-title">기후변화</div>
            <div><img className="why2-card-icon" src={climateImg} alt="climate"/></div>
            </div>
                <div className="why2-card" onClick={() => navigate('/selectdeficit')}>
            <div className="why2-card-title">분쟁과재난</div>
            <div><img className="why2-card-icon" src={swordsImg} alt="climate"/></div>
            </div>
      </div>
           <div className="why2-card-row">
        <div className="why2-card" onClick={() => navigate('/selectconveyor')}>
            <div className="why2-card-title">식량시스템 문제</div>
            <div><img className="why2-card-icon" src={convayorImg} alt="climate"/></div>
            </div>
                <div className="why2-card" onClick={() => navigate('/selectswords')}>
            <div className="why2-card-title">부족한 예산</div>
            <div><img className="why2-card-icon" src={deficitImg} alt="climate"/></div>
            </div>
      </div>
      <button className="why2-btn" onClick={()=>{navigate('/problem')}}>한 끼의 행운 이어가기</button>
    </div>
  )
}
