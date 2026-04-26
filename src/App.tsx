import { useCallback, useEffect, useState } from 'react'
import {
  slides,
  slideSectionLabel,
  deckBrandPrimary,
} from './slidesContent'
import { SurveyChartBlocks } from './SurveyChartBlocks'
import { StimulusBackdrop } from './StimulusBackdrop'
import './App.css'

function App() {
  const [index, setIndex] = useState(0)
  const total = slides.length
  const slide = slides[index]
  /** شريحة عنوان فقط (بدون قوائم/نص طويل) — توسيط عمودي وأفقي */
  const heroCentered =
    !slide.showSurveyCharts &&
    Boolean(slide.title?.trim()) &&
    !slide.body?.trim() &&
    !slide.boxedSections?.length &&
    !slide.bullets?.length &&
    !slide.note?.trim()

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
      <StimulusBackdrop />

      <div className="deck__inner">
        <header className="deck__header">
          <div className="deck__top">
            <div className="deck__brand">
              <span className="deck__brand-icon" aria-hidden="true" />
              <div className="deck__brand-text">
                <span className="deck__brand-line">{deckBrandPrimary}</span>
                <span className="deck__brand-tag">عرض معرض</span>
              </div>
            </div>
            <div className="deck__top-actions">
              <a
                className="deck__pdf"
                href={`${import.meta.env.BASE_URL}ibraat-taard-neural.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                title="إفراط التعرض للمؤثرات وآثره على الآليات العصبية الكامنة — مرفق PDF مختصر"
              >
                فتح PDF
              </a>
            </div>
          </div>
          <div
            className="deck__expo-rail"
            aria-label={`تقدم العرض: الشريحة ${index + 1} من ${total}`}
          >
            {slide.section ? (
              <span className="deck__expo-section">
                {slideSectionLabel[slide.section]}
              </span>
            ) : (
              <span className="deck__expo-section deck__expo-section--muted">
                —
              </span>
            )}
            <div
              className="deck__expo-track"
              role="progressbar"
              aria-valuemin={1}
              aria-valuemax={total}
              aria-valuenow={index + 1}
              aria-valuetext={`${index + 1} من ${total}`}
            >
              <div
                className="deck__expo-track-fill"
                style={{ width: `${((index + 1) / total) * 100}%` }}
              />
            </div>
            <span className="deck__expo-count" aria-live="polite">
              {index + 1} / {total}
            </span>
          </div>
        </header>

        <main
          className={`deck__slide${!slide.title?.trim() && !slide.subtitle && !slide.bullets?.length && !slide.body?.trim() && !slide.boxedSections?.length && !slide.note && !slide.showSurveyCharts ? ' deck__slide--empty' : ''}${slide.layout === 'stats' ? ' deck__slide--stats' : ''}${slide.showSurveyCharts ? ' deck__slide--survey-charts' : ''}${heroCentered ? ' deck__slide--hero' : ''}`}
          key={index}
        >
          {!slide.showSurveyCharts && slide.title?.trim() ? (
            <h1 className="deck__title">{slide.title}</h1>
          ) : null}
          {!slide.showSurveyCharts && slide.subtitle ? (
            <p className="deck__subtitle">{slide.subtitle}</p>
          ) : null}
          {slide.showSurveyCharts ? (
            <SurveyChartBlocks
              heading={slide.title?.trim() || 'عرض النتائج (بياني)'}
              subheading={slide.subtitle}
            />
          ) : null}
          {!slide.showSurveyCharts && slide.body?.trim() ? (
            <div className="deck__prose">
              {slide.body
                .trim()
                .split(/\n\n+/)
                .map((para, j) => (
                  <p
                    key={`${index}-prose-${j}`}
                    className="deck__prose__p"
                    style={{ animationDelay: `${0.05 + j * 0.07}s` }}
                  >
                    {para.trim()}
                  </p>
                ))}
            </div>
          ) : null}
          {!slide.showSurveyCharts &&
          !slide.body?.trim() &&
          slide.boxedSections?.length ? (
            <div className="deck__boxed-grid">
              {slide.boxedSections.map((box, j) => (
                <article
                  key={`${index}-box-${j}`}
                  className="deck__box"
                  style={{ animationDelay: `${0.05 + j * 0.08}s` }}
                >
                  <h2 className="deck__box-heading">{box.heading}</h2>
                  {box.bullets?.length ? (
                    <ul
                      className={`deck__list deck__list--in-box${slide.inlineMarkers ? ' deck__list--pdf' : ''}`}
                    >
                      {box.bullets.map((item, k) => (
                        <li
                          key={`${index}-box-${j}-li-${k}`}
                          className="deck__list-item"
                          style={{
                            animationDelay: `${0.05 + j * 0.08 + k * 0.05}s`,
                          }}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : box.text != null && box.text !== '' ? (
                    <p className="deck__box-text">{box.text}</p>
                  ) : null}
                </article>
              ))}
            </div>
          ) : null}
          {!slide.showSurveyCharts &&
          !slide.body?.trim() &&
          !slide.boxedSections?.length &&
          slide.bullets?.length ? (
            <ul
              className={`deck__list${slide.inlineMarkers ? ' deck__list--pdf' : ''}`}
            >
              {slide.bullets.map((item, j) => {
                const tone = slide.bulletVariants?.[j]
                return (
                  <li
                    key={`${index}-${j}`}
                    className={`deck__list-item${tone ? ` deck__list-item--${tone}` : ''}`}
                    style={{ animationDelay: `${0.05 + j * 0.07}s` }}
                  >
                    {item}
                  </li>
                )
              })}
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
