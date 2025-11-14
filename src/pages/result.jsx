import React from 'react'
import { useNavigate } from 'react-router-dom'
import bearImg from '../asset/bear.png'
import './result.css'
import bear4 from '../asset/bear4.png'

export default function Result() {
  const navigate = useNavigate()

  const handlego = () => {
    navigate('/result2')
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
      <div className="bigcard" onClick={handlego}>
        <div className="title">정답입니다!</div>
        <div className="icon"><img className="card-icon" src={bear4} alt="climate"/></div>
        <div className="content">지금 세계 곳곳에서<br></br>식량 위기가 멈추지 않고 있어요.<br></br>현재 36개 나라에서<br></br>약 1억 6천 8백만 명이<br></br>‘오늘 뭘 먹을지 모르는’<br></br>불안한 하루를 보내고 있습니다.<br></br><br></br>그중에서도 약 27만 명은<br></br>이미 생명이 위태로운 수준의<br></br>심각한 굶주림 속에 있습니다.</div>
      </div> 

      <button className="btn" >한 끼의 행운 이어가기</button>
    </div>
  )
}
