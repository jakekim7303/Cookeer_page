/**
 * 숫자를 원화 표기 문자열로 변환한다.
 *
 * @param {number} price - 변환할 금액
 * @returns {string} 예) 9900 → '9,900원'
 */
export function formatPrice(price) {
  return `${ price.toLocaleString('ko-KR') }원`;
}
