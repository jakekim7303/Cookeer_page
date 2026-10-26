/**
 * id 에 해당하는 섹션으로 부드럽게 스크롤한다.
 *
 * @param {string} sectionId - 이동할 섹션의 id
 */
export function scrollToSection(sectionId) {
  const target = document.getElementById(sectionId);

  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
