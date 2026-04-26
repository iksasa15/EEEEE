/** خلفية زخرفية ثابتة — خطوط وعُقد بلون ورقي هادئ */
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
            <stop offset="0%" stopColor="#78716c" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#57534e" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#1e3a5f" stopOpacity="0.2" />
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
          <circle className="stimulus-node" cx="200" cy="120" r="6" fill="#57534e" />
          <circle className="stimulus-node stimulus-node--pulse" cx="520" cy="380" r="8" fill="#1e3a5f" />
          <circle className="stimulus-node" cx="920" cy="220" r="5" fill="#78716c" />
          <circle className="stimulus-node" cx="640" cy="600" r="7" fill="#0f766e" />
          <circle className="stimulus-node stimulus-node--pulse" cx="280" cy="260" r="5" fill="#44403c" />
          <circle className="stimulus-node" cx="780" cy="420" r="6" fill="#1e3a5f" />
          <circle className="stimulus-node" cx="1080" cy="480" r="5" fill="#78716c" />
        </g>
      </svg>
      <div className="stimulus-backdrop__grid" />
      <div className="stimulus-backdrop__scan" />
    </div>
  )
}
