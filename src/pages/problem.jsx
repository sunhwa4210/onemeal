import React, { useState } from 'react'
import bearImg from '../asset/bear.png'
import './problem.css'
import { useNavigate } from 'react-router-dom'
import Bear1 from '../asset/bear1.png'
import Bear3 from '../asset/bear3.png'
import Bear4 from '../asset/bear4.png'
import Bear6 from '../asset/bear6.png'
import correctImg from '../asset/o.png'
import wrongImg from '../asset/x.png'
export default function Problem() {
    const navigate = useNavigate();
    const [selectedCard, setSelectedCard] = useState(null)
    const [buttonText, setButtonText] = useState('한 끼의 행운 이어가기')

    const handleCardSelect = (value) => {
      setSelectedCard(value)
      setButtonText('한 끼의 행운 이어가기')
    }

    const renderResult = (value) => {
      if (selectedCard !== value) return null
      const isCorrect = value === '4'
      return (
        <div className="problem-card-result">
          <img src={isCorrect ? correctImg : wrongImg} alt={isCorrect ? '정답' : '오답'} />
        </div>
      )
    }

    const handleButtonClick = () => {
      if (selectedCard === '4') {
        navigate('/result')
        return
      }
      setButtonText('다시 도전해보세요!')
      setSelectedCard(null)
    }


  return (
    <div className="intro-wrapper problem-page">
      <div className="problem-title-section">
        <div><img className="bear" src={bearImg} alt="곰돌이" /></div>
        <div>한 끼의 차이, 행운의 식탁<br></br>
내 오늘의 한 끼가, 누군가의 내일이 됩니다.</div>
      </div>
      <div className="problem-question">그럼 전 세계 인구를 10명으로 봤을 때,
식탁이 비어있는 사람은 몇 명일까요?
        <div className="problem-sub-question">정답을 눌러 주세요!</div>
      </div>
      <div className="problem-card-row">
            <div className={`problem-card ${selectedCard === '1' ? 'selected' : ''}`} onClick={() => handleCardSelect('1')}>
            <div><img className="problem-card-icon" src={Bear1} alt="climate"/></div>
            <div className="problem-card-title">1명</div>
            {renderResult('1')}
            </div>

            <div className={`problem-card ${selectedCard === '3' ? 'selected' : ''}`} onClick={() => handleCardSelect('3')}>
            <div><img className="problem-card-icon problem-card-icon--3" src={Bear3} alt="climate"/></div>
            <div className="problem-card-title">3명</div>
            {renderResult('3')}
            </div>

      </div>
           <div className="problem-card-row">

            <div className={`problem-card ${selectedCard === '4' ? 'selected' : ''}`} onClick={() => handleCardSelect('4')}>
            <div><img className="problem-card-icon problem-card-icon--4" src={Bear4} alt="climate"/></div>
            <div className="problem-card-title">4명</div>
            {renderResult('4')}
            </div>

            <div className={`problem-card ${selectedCard === '6' ? 'selected' : ''}`} onClick={() => handleCardSelect('6')}>
            <div><img className="problem-card-icon problem-card-icon--6" src={Bear6} alt="climate"/></div>
            <div className="problem-card-title">6명</div>
            {renderResult('6')}
            </div>
      </div>
      <button className="problem-btn" onClick={handleButtonClick}>{buttonText}</button>
    </div>
  )
}
