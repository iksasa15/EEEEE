/** بيانات الاستبانة (56 ردًا) — ألوان أكاديمية هادئة */
export const surveyPalette = {
  ink: '#1e3a5f',
  blue: '#334155',
  bright: '#475569',
  sky: '#78716c',
  cyan: '#0f766e',
  indigo: '#57534e',
} as const

export type SurveySegment = {
  label: string
  pct: number
  color: string
}

export type SurveyChartKind = 'donut' | 'bar'

export type SurveyBlock = {
  question: string
  segments: SurveySegment[]
  /** افتراضي: دونات */
  chart?: SurveyChartKind
}

export const surveyChartBlocks: SurveyBlock[] = [
  {
    question: 'الفئة العمرية',
    segments: [
      { label: '18–20 سنة', pct: 46.4, color: surveyPalette.ink },
      { label: '21–25', pct: 23.2, color: surveyPalette.bright },
      { label: '26–30', pct: 12.5, color: surveyPalette.sky },
      { label: 'فئات أخرى', pct: 17.9, color: surveyPalette.cyan },
    ],
  },
  {
    question: 'ساعات استخدام الجوال يوميًا',
    chart: 'bar',
    segments: [
      { label: 'أقل من 3 س', pct: 7.1, color: surveyPalette.sky },
      { label: '3–6 س', pct: 37.5, color: surveyPalette.blue },
      { label: '6–9 س', pct: 26.8, color: surveyPalette.bright },
      { label: 'أكثر من 9 س', pct: 28.6, color: surveyPalette.ink },
    ],
  },
  {
    question: 'التنقل بين التطبيقات خلال ساعة',
    segments: [
      { label: 'نادرًا', pct: 5.3, color: surveyPalette.sky },
      { label: 'أحيانًا', pct: 21.4, color: surveyPalette.cyan },
      { label: 'كثيرًا', pct: 42.9, color: surveyPalette.blue },
      { label: 'دائمًا', pct: 30.4, color: surveyPalette.indigo },
    ],
  },
  {
    question: 'التعرض لكمية كبيرة من المعلومات يوميًا',
    segments: [
      { label: 'أبدًا', pct: 5, color: surveyPalette.sky },
      { label: 'قليلًا', pct: 19.6, color: surveyPalette.cyan },
      { label: 'متوسط', pct: 48.2, color: surveyPalette.blue },
      { label: 'كثيرًا', pct: 26.8, color: surveyPalette.bright },
    ],
  },
  {
    question: 'استخدام أكثر من جهاز/تطبيق في الوقت نفسه',
    segments: [
      { label: 'نادرًا', pct: 8.9, color: surveyPalette.sky },
      { label: 'لا', pct: 17.9, color: surveyPalette.cyan },
      { label: 'نعم دائمًا', pct: 25, color: surveyPalette.indigo },
      { label: 'أحيانًا', pct: 48.2, color: surveyPalette.blue },
    ],
  },
  {
    question: 'صعوبة التركيز لفترة طويلة',
    segments: [
      { label: 'دائمًا', pct: 14.3, color: surveyPalette.ink },
      { label: 'كثيرًا', pct: 17.9, color: surveyPalette.bright },
      { label: 'أبدًا', pct: 23.2, color: surveyPalette.sky },
      { label: 'أحيانًا', pct: 44.6, color: surveyPalette.blue },
    ],
  },
  {
    question: 'صعوبة إكمال المهام للنهاية',
    segments: [
      { label: 'دائمًا', pct: 10.7, color: surveyPalette.ink },
      { label: 'كثيرًا', pct: 19.6, color: surveyPalette.bright },
      { label: 'أحيانًا', pct: 33.9, color: surveyPalette.cyan },
      { label: 'لا', pct: 35.7, color: surveyPalette.sky },
    ],
  },
  {
    question: 'توتر أو ضغط بسبب كثرة المحتوى',
    segments: [
      { label: 'أبدًا', pct: 33.9, color: surveyPalette.sky },
      { label: 'قليلًا', pct: 35.7, color: surveyPalette.cyan },
      { label: 'متوسط', pct: 17.9, color: surveyPalette.blue },
      { label: 'شديد', pct: 12.5, color: surveyPalette.ink },
    ],
  },
  {
    question: 'تأثر المزاج بعد السوشيال ميديا لفترة طويلة',
    segments: [
      { label: 'لا', pct: 30.4, color: surveyPalette.sky },
      { label: 'نعم بشكل واضح', pct: 32.1, color: surveyPalette.blue },
      { label: 'قليلًا', pct: 37.5, color: surveyPalette.bright },
    ],
  },
]
