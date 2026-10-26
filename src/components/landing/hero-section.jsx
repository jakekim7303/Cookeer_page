import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import LunchboxVisual from '../ui/lunchbox-visual.jsx';
import { scrollToSection } from '../../utils/scroll-to-section.js';

/**
 * 히어로 하단 핵심 수치
 */
const HERO_STATS = [
  { value: '450kcal', label: '1식 평균 열량' },
  { value: '30g+', label: '고단백 메뉴 단백질' },
  { value: '18~21시', label: '저녁 도착 시간' },
];

/**
 * HeroSection 컴포넌트
 * 서비스 핵심 메시지와 주문 유도 버튼을 보여주는 첫 화면
 *
 * Props: 없음
 *
 * Example usage:
 * <HeroSection />
 */
function HeroSection() {
  return (
    <Box
      component="section"
      sx={ {
        width: '100%',
        py: { xs: 6, md: 12 },
        background: 'linear-gradient(180deg, #FBF8F3 0%, #F1F7F3 100%)',
        overflow: 'hidden',
      } }
    >
      <Container maxWidth="lg" sx={ { px: { xs: 2, md: 3 } } }>
        <Grid container spacing={ { xs: 7, md: 6 } } sx={ { alignItems: 'center' } }>
          <Grid size={ { xs: 12, md: 6 } }>
            <Chip label="🌙 오늘 저녁, 메뉴 고민 끝" color="secondary" variant="outlined" sx={ { bgcolor: 'secondary.light', border: 'none' } } />
            <Typography
              variant="h1"
              sx={ { mt: 2.5, fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.4rem' } } }
            >
              거르기 쉬운 저녁,
              <br />
              <Box component="span" sx={ { color: 'primary.main' } }>
                가볍고 든든하게
              </Box>
            </Typography>
            <Typography
              variant="body1"
              sx={ {
                mt: 2.5,
                color: 'text.secondary',
                fontSize: { xs: '1rem', md: '1.15rem' },
                lineHeight: 1.6,
                maxWidth: 480,
              } }
            >
              바쁜 퇴근길, 대충 때우거나 건너뛰던 저녁을 영양사가 설계한 저칼로리 고영양 도시락으로 바꿔보세요.
              매일 아침 조리해 원하는 시간에 집 앞까지 배달해 드려요.
            </Typography>

            <Stack direction={ { xs: 'column', sm: 'row' } } spacing={ 1.5 } sx={ { mt: 4 } }>
              <Button
                variant="contained"
                size="large"
                disableElevation
                endIcon={ <ArrowForwardRoundedIcon /> }
                onClick={ () => scrollToSection('order') }
              >
                첫 주문 20% 할인받기
              </Button>
              <Button variant="outlined" size="large" onClick={ () => scrollToSection('menu') }>
                이번 주 메뉴 보기
              </Button>
            </Stack>

            <Stack direction="row" spacing={ { xs: 3, md: 5 } } sx={ { mt: 5 } }>
              { HERO_STATS.map((stat) => (
                <Box key={ stat.label }>
                  <Box sx={ { fontSize: { xs: '1.2rem', md: '1.5rem' }, fontWeight: 800, color: 'text.primary' } }>
                    { stat.value }
                  </Box>
                  <Box sx={ { fontSize: { xs: '0.75rem', md: '0.85rem' }, color: 'text.secondary' } }>
                    { stat.label }
                  </Box>
                </Box>
              )) }
            </Stack>
          </Grid>

          <Grid size={ { xs: 12, md: 6 } }>
            <LunchboxVisual />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HeroSection;
