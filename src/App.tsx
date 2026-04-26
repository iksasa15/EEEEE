import { useCallback, useEffect, useState } from 'react'
import { slides } from './slidesContent'
import './App.css'

function App() {
  const [index, setIndex] = useState(0)
  const total = slides.length
  const slide = slides[index]

  const goNext = useCallback(() => {
    setIndex((i) => Math.min(i + 1, total - 1))
  }, [total])

  const goPrev = useCallback(() => {
    setIndex((i) => Math.max(i - 1, 0))
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault()
        goNext()
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        goPrev()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [goNext, goPrev])

  return (
    <div className="deck" dir="rtl">
      <header className="deck__top">
        <span className="deck__brand">عرض تقديمي</span>
        <span className="deck__progress" aria-live="polite">
          الشريحة {index + 1} من {total}
        </span>
      </header>

      <main className="deck__slide" key={index}>
        <h1 className="deck__title">{slide.title}</h1>
        {slide.subtitle ? (
          <p className="deck__subtitle">{slide.subtitle}</p>
        ) : null}
        {slide.bullets?.length ? (
          <ul className="deck__list">
            {slide.bullets.map((item, j) => (
              <li key={`${index}-${j}`}>{item}</li>
            ))}
          </ul>
        ) : null}
        {slide.note ? <p className="deck__note">{slide.note}</p> : null}
      </main>

      <div className="deck__bar" role="navigation" aria-label="تنقل الشرائح">
        <button
          type="button"
          className="deck__btn deck__btn--ghost"
          onClick={goPrev}
          disabled={index === 0}
        >
          السابق
        </button>
        <div className="deck__dots" aria-hidden="true">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`deck__dot${i === index ? ' deck__dot--on' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`الانتقال إلى الشريحة ${i + 1}`}
            />
          ))}
        </div>
        <button
          type="button"
          className="deck__btn deck__btn--primary"
          onClick={goNext}
          disabled={index === total - 1}
        >
          الانتقال إلى الصفحة التالية
        </button>
      </div>
    </div>
  )
}

export default App
