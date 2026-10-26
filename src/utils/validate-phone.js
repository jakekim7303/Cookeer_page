/**
 * 휴대폰 번호 형식이 올바른지 확인한다.
 *
 * @param {string} phone - 확인할 휴대폰 번호 (하이픈 포함/미포함 모두 허용)
 * @returns {boolean} 올바른 형식이면 true
 */
export function validatePhone(phone) {
  return /^01[016789]-?\d{3,4}-?\d{4}$/.test(phone.trim());
}
