import React, { useState, useRef, useCallback } from 'react'
import downloadImg from '../asset/downloadImg.png'
import './downloadImg.css'


const fortunes = [
  '오늘도 충분히 잘하고 있어요.',
  '잠깐 멈춰도 괜찮아요, 행운은 기다려줍니다.',
  '당신의 한 끼가 누군가의 내일을 밝혀요.',
  '작은 나눔이 큰 행운으로 돌아옵니다.',
  '힘든 날에도, 밥 한 끼의 온기는 잊지 마세요.',
  '세상은 아직 따뜻한 이유로 가득해요.',
  '오늘의 선택이 누군가의 희망이 됩니다.',
  '당신의 마음이 이미 가장 큰 행운이에요.',
  '기분 좋은 하루의 시작은 한 끼의 온기에서.',
  '당신의 따뜻함이 세상을 덮고 있어요.',
]

export default function DownloadImg() {
  const [message] = useState(
    () => fortunes[Math.floor(Math.random() * fortunes.length)],
  )
  const imgRef = useRef(null)
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  const handleDownload = useCallback(() => {
    const imgEl = imgRef.current
    if (!imgEl) return

    const width = imgEl.naturalWidth || imgEl.width || 360
    const height = imgEl.naturalHeight || imgEl.height || 360

    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext('2d')

    const image = new Image()
    image.crossOrigin = 'anonymous'
    image.src = downloadImg
    image.onload = () => {
      ctx.drawImage(image, 0, 0, width, height)
      ctx.fillStyle = '#4a2c16'
      ctx.textAlign = 'center'
      ctx.font = `${Math.floor(width * 0.05)}px "LocusSangsang", "Noto Sans KR", sans-serif`

      const lines = message.split('\n')
      const lineHeight = Math.floor(height * 0.08)
      const totalHeight = lineHeight * lines.length
      const firstLineY = height / 2 - (totalHeight - lineHeight) / 2 + 30

      lines.forEach((line, idx) => {
        ctx.fillText(line, width / 2, firstLineY + idx * lineHeight)
      })

      const link = document.createElement('a')
      link.href = canvas.toDataURL('image/png')
      link.download = '행운의-한-끼.png'
      link.click()
    }
  }, [message])

  return (
    <div className="download-img-container">
      <div className="download-img-wrapper">
        <img
          className="download-img"
          src={downloadImg}
          alt="행운 카드"
          ref={imgRef}
          onLoad={() => setIsImageLoaded(true)}
        />
        <div className={`download-img-message ${isImageLoaded ? 'is-visible' : 'is-hidden'}`}>
          {message.split('\n').map((line, idx) => (
            <span key={idx}>{line}</span>
          ))}
        </div>
      </div>
      <button type="button" className="btn download-btn" onClick={handleDownload}>
        한 끼의 행운 저장하기
      </button>
    </div>
  )
}
