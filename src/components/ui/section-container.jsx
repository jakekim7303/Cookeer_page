import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

/**
 * SectionContainer 컴포넌트
 * 랜딩 페이지의 각 섹션 공통 레이아웃 (제목 + 본문 영역)
 *
 * Props:
 * @param {string} id - 섹션 앵커 id (헤더 메뉴 스크롤 대상) [Required]
 * @param {string} eyebrow - 제목 위 작은 강조 문구 [Optional]
 * @param {string} title - 섹션 제목 [Optional]
 * @param {string} description - 섹션 설명 [Optional]
 * @param {string} bgcolor - 섹션 배경색 [Optional, 기본값: 'transparent']
 * @param {node} children - 섹션 본문 콘텐츠 [Required]
 *
 * Example usage:
 * <SectionContainer id="menu" eyebrow="MENU" title="이번 주 메뉴">
 *   <MenuList />
 * </SectionContainer>
 */
function SectionContainer({ id, eyebrow, title, description, bgcolor = 'transparent', children }) {
  return (
    <Box
      component="section"
      id={ id }
      sx={ {
        width: '100%',
        py: { xs: 8, md: 12 },
        bgcolor,
        scrollMarginTop: { xs: '56px', md: '64px' },
      } }
    >
      <Container maxWidth="lg" sx={ { px: { xs: 2, md: 3 } } }>
        { title && (
          <Box sx={ { textAlign: 'center', mb: { xs: 5, md: 7 } } }>
            { eyebrow && (
              <Typography
                variant="overline"
                component="p"
                sx={ { color: 'secondary.main', fontWeight: 700, letterSpacing: '0.15em' } }
              >
                { eyebrow }
              </Typography>
            ) }
            <Typography
              variant="h2"
              component="h2"
              sx={ { fontSize: { xs: '1.75rem', md: '2.5rem' }, mt: 1 } }
            >
              { title }
            </Typography>
            { description && (
              <Typography
                variant="body1"
                sx={ {
                  mt: 2,
                  mx: 'auto',
                  maxWidth: 560,
                  color: 'text.secondary',
                  fontSize: { xs: '0.95rem', md: '1.05rem' },
                  lineHeight: 1.6,
                } }
              >
                { description }
              </Typography>
            ) }
          </Box>
        ) }
        { children }
      </Container>
    </Box>
  );
}

export default SectionContainer;
