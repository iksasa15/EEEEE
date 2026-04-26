import type { SurveyBlock, SurveySegment } from './surveyChartData'
import { surveyChartBlocks } from './surveyChartData'
import './SurveyChartBlocks.css'

type SurveyChartBlocksProps = {
  heading: string
  subheading?: string
}

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

function DashboardIcon() {
  return (
    <svg
      className="survey-dashboard__icon-svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      aria-hidden
    >
      <rect
        x="6"
        y="18"
        width="6"
        height="14"
        rx="1.5"
        fill="currentColor"
        opacity="0.9"
      />
      <rect
        x="15"
        y="12"
        width="6"
        height="20"
        rx="1.5"
        fill="currentColor"
      />
      <rect
        x="24"
        y="22"
        width="6"
        height="10"
        rx="1.5"
        fill="currentColor"
        opacity="0.85"
      />
      <circle cx="28" cy="10" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <line
        x1="31"
        y1="13"
        x2="34"
        y2="16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function SurveyBarChart({ segments }: { segments: SurveySegment[] }) {
  const max = Math.max(...segments.map((s) => s.pct), 1)
  return (
    <div className="survey-bar-chart" role="img">
      <div className="survey-bar-chart__cols">
        {segments.map((seg) => (
          <div key={seg.label} className="survey-bar-chart__col">
            <span className="survey-bar-chart__pct">{seg.pct}%</span>
            <div className="survey-bar-chart__track">
              <div
                className="survey-bar-chart__fill"
                style={{
                  height: `${Math.max(8, (seg.pct / max) * 100)}%`,
                  background: `linear-gradient(180deg, ${seg.color} 0%, #1c1917 100%)`,
                }}
              />
            </div>
            <span className="survey-bar-chart__label">{seg.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function SurveyDonutBlock({ block }: { block: SurveyBlock }) {
  const total = block.segments.reduce((s, x) => s + x.pct, 0) || 1
  const background = segmentsToConicBackground(block.segments, total)
  const ariaLabel = `${block.question}: ${block.segments.map((x) => `${x.label} ${x.pct}%`).join('، ')}`
  return (
    <div className="survey-chart-block__body survey-chart-block__body--donut">
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
  )
}

export function SurveyChartBlocks({
  heading,
  subheading,
}: SurveyChartBlocksProps) {
  return (
    <div className="survey-dashboard" dir="rtl">
      <div className="survey-dashboard__deco survey-dashboard__deco--rtl" aria-hidden />
      <div className="survey-dashboard__deco survey-dashboard__deco--ltr" aria-hidden />
      <div className="survey-dashboard__inner">
        <header className="survey-dashboard__header">
          <div className="survey-dashboard__header-icon" aria-hidden>
            <DashboardIcon />
          </div>
          <div className="survey-dashboard__header-text">
            <h2 className="survey-dashboard__title">{heading}</h2>
            {subheading ? (
              <p className="survey-dashboard__subtitle">{subheading}</p>
            ) : null}
          </div>
        </header>

        <div className="survey-dashboard__grid">
          {surveyChartBlocks.map((block, i) => (
            <article
              key={i}
              className={`survey-chart-card${block.chart === 'bar' ? ' survey-chart-card--wide' : ''}`}
              style={{ animationDelay: `${0.04 * i}s` }}
            >
              <span className="survey-chart-card__num" aria-hidden>
                {i + 1}
              </span>
              <h3 className="survey-chart-card__title">{block.question}</h3>
              {block.chart === 'bar' ? (
                <SurveyBarChart segments={block.segments} />
              ) : (
                <SurveyDonutBlock block={block} />
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
