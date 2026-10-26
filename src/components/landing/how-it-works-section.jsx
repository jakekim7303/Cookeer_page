import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SectionContainer from '../ui/section-container.jsx';

/**
 * 이용 방법 단계
 */
const STEPS = [
  { emoji: '📋', title: '플랜과 메뉴 고르기', description: '주 3·5·7회 중 플랜을 고르고 먹고 싶은 메뉴를 담아요.' },
  { emoji: '📍', title: '주소와 시간 등록', description: '집 주소와 18~21시 중 받고 싶은 시간대를 알려주세요.' },
  { emoji: '👩‍🍳', title: '당일 아침 조리', description: '센트럴 키친에서 그날 아침 신선한 재료로 조리해요.' },
  { emoji: '🏠', title: '저녁, 문 앞 도착', description: '보냉 패키지로 문 앞에 도착하면 알림을 보내드려요.' },
];

/**
 * HowItWorksSection 컴포넌트
 * 주문부터 배송까지 4단계 이용 방법 안내
 *
 * Props: 없음
 *
 * Example usage:
 * <HowItWorksSection />
 */
function HowItWorksSection() {
  return (
    <SectionContainer
      id="how-it-works"
      eyebrow="HOW IT WORKS"
      title="주문은 1분, 저녁은 문 앞에"
      description="한 번 설정해두면 매주 알아서 챙겨드려요. 메뉴와 일정은 언제든 바꿀 수 있어요."
    >
      <Grid container spacing={ { xs: 4, md: 3 } }>
        { STEPS.map((step, index) => (
          <Grid key={ step.title } size={ { xs: 12, sm: 6, md: 3 } }>
            <Box sx={ { textAlign: 'center', px: { xs: 1, md: 2 } } }>
              <Box
                sx={ {
                  position: 'relative',
                  width: 88,
                  height: 88,
                  mx: 'auto',
                  borderRadius: '50%',
                  bgcolor: 'background.paper',
                  border: '2px dashed',
                  borderColor: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.4rem',
                } }
              >
                <Box component="span" role="img" aria-label={ step.title }>
                  { step.emoji }
                </Box>
                <Box
                  sx={ {
                    position: 'absolute',
                    top: -6,
                    right: -6,
                    width: 30,
                    height: 30,
                    borderRadius: '50%',
                    bgcolor: 'secondary.main',
                    color: '#FFFFFF',
                    fontSize: '0.9rem',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  } }
                >
                  { index + 1 }
                </Box>
              </Box>
              <Typography variant="h6" component="h3" sx={ { mt: 2.5, fontSize: '1.1rem' } }>
                { step.title }
              </Typography>
              <Typography variant="body2" sx={ { mt: 1, color: 'text.secondary', lineHeight: 1.6 } }>
                { step.description }
              </Typography>
            </Box>
          </Grid>
        )) }
      </Grid>
    </SectionContainer>
  );
}

export default HowItWorksSection;
