import type { SurveySegment } from './surveyChartData'
import { surveyChartBlocks } from './surveyChartData'
import './SurveyChartBlocks.css'

/** توزيعة دائرية (conic-gradient) تبدأ من أعلى الدائرة */
function segmentsToConicBackground(
  segments: SurveySegment[],
  total: number
): string {
  let acc = 0
  const stops: string[] = []
  for (const seg of segments) {
    const start = (acc / total) * 100
    acc += seg.pct
    const end = (acc / total) * 100
    stops.push(`${seg.color} ${start}% ${end}%`)
  }
  return `conic-gradient(from 0.25turn, ${stops.join(', ')})`
}

export function SurveyChartBlocks() {
  return (
    <div className="survey-charts" dir="rtl">
      {surveyChartBlocks.map((block, i) => {
        const total = block.segments.reduce((s, x) => s + x.pct, 0) || 1
        const background = segmentsToConicBackground(block.segments, total)
        const ariaLabel = `${block.question}: ${block.segments.map((x) => `${x.label} ${x.pct}%`).join('، ')}`
        return (
          <section key={i} className="survey-chart-block">
            <h3 className="survey-chart-block__title">{block.question}</h3>
            <div className="survey-chart-block__body">
              <div
                className="survey-chart-donut-outer"
                role="img"
                aria-label={ariaLabel}
              >
                <div
                  className="survey-chart-donut"
                  style={{ background }}
                  title={block.segments
                    .map((x) => `${x.label}: ${x.pct}%`)
                    .join(' · ')}
                />
                <div className="survey-chart-donut-hole" aria-hidden />
              </div>
              <ul className="survey-chart-legend">
                {block.segments.map((seg, j) => (
                  <li key={j}>
                    <span
                      className="survey-chart-legend__swatch"
                      style={{ background: seg.color }}
                      aria-hidden
                    />
                    <span className="survey-chart-legend__text">
                      {seg.label} <strong>{seg.pct}%</strong>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )
      })}
    </div>
  )
}
