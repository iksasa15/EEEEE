import { surveyChartBlocks } from './surveyChartData'
import './SurveyChartBlocks.css'

export function SurveyChartBlocks() {
  return (
    <div className="survey-charts" dir="rtl">
      {surveyChartBlocks.map((block, i) => {
        const total = block.segments.reduce((s, x) => s + x.pct, 0) || 1
        return (
          <section key={i} className="survey-chart-block">
            <h3 className="survey-chart-block__title">{block.question}</h3>
            <div
              className="survey-chart-bar"
              role="img"
              aria-label={`${block.question}: ${block.segments.map((x) => `${x.label} ${x.pct}%`).join('، ')}`}
            >
              {block.segments.map((seg, j) => (
                <div
                  key={j}
                  className="survey-chart-seg"
                  style={{
                    flex: `0 0 ${(seg.pct / total) * 100}%`,
                    background: seg.color,
                  }}
                  title={`${seg.label}: ${seg.pct}%`}
                />
              ))}
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
          </section>
        )
      })}
    </div>
  )
}
