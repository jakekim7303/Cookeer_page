/**
 * 정기 구독 플랜 목록
 * - pricePerMeal: 1식 기준 구독가
 * - mealsPerWeek: 주당 배송 횟수
 */
export const PLANS = [
  {
    id: 'plan-3',
    name: '라이트',
    summary: '평일 저녁이 들쭉날쭉한 분께',
    mealsPerWeek: 3,
    pricePerMeal: 9500,
    benefits: ['주 3회 저녁 배송', '메뉴 자유 변경', '배송비 무료'],
    isPopular: false,
  },
  {
    id: 'plan-5',
    name: '레귤러',
    summary: '평일 저녁을 꾸준히 챙기고 싶은 분께',
    mealsPerWeek: 5,
    pricePerMeal: 8900,
    benefits: ['주 5회 저녁 배송', '메뉴 자유 변경', '배송비 무료', '영양사 맞춤 식단 추천'],
    isPopular: true,
  },
  {
    id: 'plan-7',
    name: '데일리',
    summary: '매일 저녁을 맡기고 싶은 분께',
    mealsPerWeek: 7,
    pricePerMeal: 8500,
    benefits: ['주 7회 저녁 배송', '메뉴 자유 변경', '배송비 무료', '영양사 맞춤 식단 추천', '월 1회 디저트 증정'],
    isPopular: false,
  },
];

/**
 * 희망 도착 시간 목록
 */
export const DELIVERY_TIMES = ['18:00 ~ 19:00', '19:00 ~ 20:00', '20:00 ~ 21:00'];
