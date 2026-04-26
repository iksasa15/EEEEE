/** خلفية زخرفية ثابتة (بدون حركة) — ألوان وشبكة خفيفة */
export function StimulusBackdrop() {
  return (
    <div className="stimulus-backdrop stimulus-backdrop--static" aria-hidden="true">
      <div className="stimulus-backdrop__blobs">
        <span className="stimulus-blob stimulus-blob--a" />
        <span className="stimulus-blob stimulus-blob--b" />
        <span className="stimulus-blob stimulus-blob--c" />
        <span className="stimulus-blob stimulus-blob--d" />
      </div>
      <svg
        className="stimulus-backdrop__mesh"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="synapseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#818cf8" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.22" />
          </linearGradient>
          <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g className="stimulus-mesh-lines" stroke="url(#synapseGrad)" fill="none" strokeWidth="1.2">
          <path d="M80,420 Q300,180 520,380 T920,220" />
          <path d="M120,680 Q400,520 640,600 T1080,480" />
          <path d="M200,120 Q480,320 720,140 T1120,300" />
          <path d="M40,300 L280,260 L420,400 L600,280 L780,420 L960,300 L1160,340" />
        </g>
        <g className="stimulus-nodes" filter="url(#glow)">
          <circle className="stimulus-node" cx="200" cy="120" r="6" fill="#0ea5e9" />
          <circle className="stimulus-node stimulus-node--pulse" cx="520" cy="380" r="8" fill="#6366f1" />
          <circle className="stimulus-node" cx="920" cy="220" r="5" fill="#0284c7" />
          <circle className="stimulus-node" cx="640" cy="600" r="7" fill="#38bdf8" />
          <circle className="stimulus-node stimulus-node--pulse" cx="280" cy="260" r="5" fill="#818cf8" />
          <circle className="stimulus-node" cx="780" cy="420" r="6" fill="#0ea5e9" />
          <circle className="stimulus-node" cx="1080" cy="480" r="5" fill="#2563eb" />
        </g>
      </svg>
      <div className="stimulus-backdrop__grid" />
      <div className="stimulus-backdrop__scan" />
    </div>
  )
}
