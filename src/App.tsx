import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as DeckPointerEvent,
} from 'react'
import { slides } from './slidesContent'
import { StimulusBackdrop } from './StimulusBackdrop'
import './App.css'

function App() {
  const deckRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const [pointer, setPointer] = useState({ x: 0.5, y: 0.5 })
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

  const onDeckPointer = useCallback(
    (e: DeckPointerEvent<HTMLDivElement>) => {
      const el = deckRef.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width
      const y = (e.clientY - r.top) / r.height
      setPointer({
        x: Math.min(1, Math.max(0, x)),
        y: Math.min(1, Math.max(0, y)),
      })
    },
    [],
  )

  const onDeckLeave = useCallback(() => {
    setPointer({ x: 0.5, y: 0.5 })
  }, [])

  const deckStyle = {
    '--px': pointer.x,
    '--py': pointer.y,
  } as CSSProperties

  return (
    <div
      ref={deckRef}
      className="deck"
      dir="rtl"
      style={deckStyle}
      onPointerMove={onDeckPointer}
      onPointerLeave={onDeckLeave}
    >
      <StimulusBackdrop />

      <div className="deck__inner">
        <header className="deck__top">
          <span className="deck__brand">
            <span className="deck__brand-icon" aria-hidden="true" />
            إفراط التعرض · آليات عصبية
          </span>
          <div className="deck__top-actions">
            <a
              className="deck__pdf"
              href={`${import.meta.env.BASE_URL}ibraat-taard-neural.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              title="إفراط التعرض للمؤثرات وآثره على الآليات العصبية الكامنه — نصوص العرض (PDF)"
            >
              فتح PDF (نصوص العرض)
            </a>
            <span className="deck__progress" aria-live="polite">
              الشريحة {index + 1} من {total}
            </span>
          </div>
        </header>

        <main
          className={`deck__slide${!slide.title?.trim() && !slide.subtitle && !slide.bullets?.length && !slide.note ? ' deck__slide--empty' : ''}${slide.layout === 'stats' ? ' deck__slide--stats' : ''}`}
          key={index}
        >
          {slide.title?.trim() ? (
            <h1 className="deck__title">{slide.title}</h1>
          ) : null}
          {slide.subtitle ? (
            <p className="deck__subtitle">{slide.subtitle}</p>
          ) : null}
          {slide.bullets?.length ? (
            <ul
              className={`deck__list${slide.inlineMarkers ? ' deck__list--pdf' : ''}`}
            >
              {slide.bullets.map((item, j) => (
                <li
                  key={`${index}-${j}`}
                  className="deck__list-item"
                  style={{ animationDelay: `${0.05 + j * 0.07}s` }}
                >
                  {item}
                </li>
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
    </div>
  )
}

export default App
