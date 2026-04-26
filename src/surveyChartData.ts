/** بيانات الاستبانة (56 ردًا) — للرسوم في الشريحة */
export type SurveySegment = {
  label: string
  pct: number
  color: string
}

export type SurveyBlock = {
  question: string
  segments: SurveySegment[]
}

export const surveyChartBlocks: SurveyBlock[] = [
  {
    question: 'العمر',
    segments: [
      { label: '18–20 سنة', pct: 46.4, color: '#ef4444' },
      { label: '21–25', pct: 23.2, color: '#f97316' },
      { label: '26–30', pct: 12.5, color: '#16a34a' },
      { label: 'فئات أخرى', pct: 17.9, color: '#0ea5e9' },
    ],
  },
  {
    question: 'ساعات استخدام الجوال يوميًا',
    segments: [
      { label: 'أقل من 3 س', pct: 7.1, color: '#38bdf8' },
      { label: '3–6 س', pct: 37.5, color: '#ef4444' },
      { label: '6–9 س', pct: 26.8, color: '#f97316' },
      { label: 'أكثر من 9 س', pct: 28.6, color: '#22c55e' },
    ],
  },
  {
    question: 'التنقل بين التطبيقات خلال ساعة',
    segments: [
      { label: 'نادرًا', pct: 5.3, color: '#3b82f6' },
      { label: 'أحيانًا', pct: 21.4, color: '#ef4444' },
      { label: 'كثيرًا', pct: 42.9, color: '#f97316' },
      { label: 'دائمًا', pct: 30.4, color: '#22c55e' },
    ],
  },
  {
    question: 'التعرض لكمية كبيرة من المعلومات يوميًا',
    segments: [
      { label: 'أبدًا', pct: 5, color: '#3b82f6' },
      { label: 'قليلًا', pct: 19.6, color: '#ef4444' },
      { label: 'متوسط', pct: 48.2, color: '#f97316' },
      { label: 'كثيرًا', pct: 26.8, color: '#22c55e' },
    ],
  },
  {
    question: 'استخدام أكثر من جهاز/تطبيق في الوقت نفسه',
    segments: [
      { label: 'نادرًا', pct: 8.9, color: '#3b82f6' },
      { label: 'لا', pct: 17.9, color: '#22c55e' },
      { label: 'نعم دائمًا', pct: 25, color: '#6366f1' },
      { label: 'أحيانًا', pct: 48.2, color: '#ef4444' },
    ],
  },
  {
    question: 'صعوبة التركيز لفترة طويلة',
    segments: [
      { label: 'دائمًا', pct: 14.3, color: '#22c55e' },
      { label: 'كثيرًا', pct: 17.9, color: '#f97316' },
      { label: 'أبدًا', pct: 23.2, color: '#3b82f6' },
      { label: 'أحيانًا', pct: 44.6, color: '#ef4444' },
    ],
  },
  {
    question: 'صعوبة إكمال المهام للنهاية',
    segments: [
      { label: 'دائمًا', pct: 10.7, color: '#22c55e' },
      { label: 'كثيرًا', pct: 19.6, color: '#f97316' },
      { label: 'أحيانًا', pct: 33.9, color: '#ef4444' },
      { label: 'لا', pct: 35.7, color: '#3b82f6' },
    ],
  },
  {
    question: 'توتر أو ضغط بسبب كثرة المحتوى',
    segments: [
      { label: 'أبدًا', pct: 33.9, color: '#3b82f6' },
      { label: 'قليلًا', pct: 35.7, color: '#ef4444' },
      { label: 'متوسط', pct: 17.9, color: '#f97316' },
      { label: 'شديد', pct: 12.5, color: '#22c55e' },
    ],
  },
  {
    question: 'تأثر المزاج بعد السوشيال ميديا لفترة طويلة',
    segments: [
      { label: 'لا', pct: 30.4, color: '#3b82f6' },
      { label: 'نعم بشكل واضح', pct: 32.1, color: '#f97316' },
      { label: 'قليلًا', pct: 37.5, color: '#ef4444' },
    ],
  },
]
