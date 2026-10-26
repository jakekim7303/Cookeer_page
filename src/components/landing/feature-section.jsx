import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import EcoRoundedIcon from '@mui/icons-material/EnergySavingsLeafRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import MonitorHeartRoundedIcon from '@mui/icons-material/MonitorHeartRounded';
import SectionContainer from '../ui/section-container.jsx';

/**
 * 서비스 특징 목록
 */
const FEATURES = [
  {
    icon: EcoRoundedIcon,
    title: '가볍게, 350~520kcal',
    description: '늦은 저녁에도 부담 없도록 모든 메뉴를 한 끼 500kcal 안팎으로 설계했어요.',
  },
  {
    icon: MonitorHeartRoundedIcon,
    title: '영양은 꽉 차게',
    description: '탄수화물·단백질·지방 비율과 식이섬유까지 영양사가 직접 맞췄어요.',
  },
  {
    icon: LocalShippingRoundedIcon,
    title: '집 앞까지 콜드체인 배송',
    description: '당일 아침 조리한 도시락을 냉장 상태 그대로 문 앞에 놓아드려요.',
  },
  {
    icon: AccessTimeRoundedIcon,
    title: '퇴근 시간에 맞춰 도착',
    description: '18시부터 21시까지 원하는 시간대를 고르면 그 시간에 맞춰 도착해요.',
  },
];

/**
 * FeatureSection 컴포넌트
 * Cookeer 서비스의 핵심 장점 4가지를 소개
 *
 * Props: 없음
 *
 * Example usage:
 * <FeatureSection />
 */
function FeatureSection() {
  return (
    <SectionContainer
      id="features"
      eyebrow="WHY COOKEER"
      title="저녁을 거르지 않게 되는 이유"
      description="귀찮아서, 시간이 없어서, 무거워서 거르던 저녁. Cookeer 가 그 이유를 하나씩 덜어드려요."
    >
      <Grid container spacing={ 3 }>
        { FEATURES.map((feature) => {
          const FeatureIcon = feature.icon;

          return (
            <Grid key={ feature.title } size={ { xs: 12, sm: 6, md: 3 } }>
              <Paper
                elevation={ 0 }
                sx={ {
                  height: '100%',
                  p: 3,
                  borderRadius: 4,
                  border: '1px solid',
                  borderColor: 'divider',
                } }
              >
                <Box
                  sx={ {
                    width: 52,
                    height: 52,
                    borderRadius: 3,
                    bgcolor: 'primary.light',
                    color: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  } }
                >
                  <FeatureIcon />
                </Box>
                <Typography variant="h6" component="h3" sx={ { mt: 2.5, fontSize: '1.1rem' } }>
                  { feature.title }
                </Typography>
                <Typography variant="body2" sx={ { mt: 1, color: 'text.secondary', lineHeight: 1.6 } }>
                  { feature.description }
                </Typography>
              </Paper>
            </Grid>
          );
        }) }
      </Grid>
    </SectionContainer>
  );
}

export default FeatureSection;
