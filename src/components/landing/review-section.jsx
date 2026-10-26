import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import SectionContainer from '../ui/section-container.jsx';

/**
 * 고객 후기 목록 (예시 데이터)
 */
const REVIEWS = [
  {
    name: '김*연',
    info: '30대 직장인 · 레귤러 플랜',
    rating: 5,
    content: '야근하고 들어오면 라면만 먹었는데, 이제 문 앞에 도시락이 기다리고 있어요. 양도 적당하고 속이 편해요.',
  },
  {
    name: '박*호',
    info: '20대 대학원생 · 라이트 플랜',
    rating: 5,
    content: '고단백 메뉴가 다양해서 운동하면서 식단 관리하기 좋아요. 닭가슴살 포케는 매주 꼭 시켜요.',
  },
  {
    name: '이*진',
    info: '40대 워킹맘 · 데일리 플랜',
    rating: 4,
    content: '아이 챙기느라 제 저녁은 늘 뒷전이었는데, 이제 저도 제대로 챙겨 먹어요. 배송 시간이 정확해서 좋아요.',
  },
];

/**
 * ReviewSection 컴포넌트
 * 실제 이용 고객 후기 카드 목록
 *
 * Props: 없음
 *
 * Example usage:
 * <ReviewSection />
 */
function ReviewSection() {
  return (
    <SectionContainer
      id="reviews"
      eyebrow="REVIEWS"
      title="저녁이 달라졌다는 이야기"
      description="Cookeer 와 함께 저녁을 챙기기 시작한 분들의 후기예요."
    >
      <Grid container spacing={ 3 }>
        { REVIEWS.map((review) => (
          <Grid key={ review.name } size={ { xs: 12, md: 4 } }>
            <Paper
              elevation={ 0 }
              sx={ {
                height: '100%',
                p: 3,
                borderRadius: 4,
                border: '1px solid',
                borderColor: 'divider',
                display: 'flex',
                flexDirection: 'column',
              } }
            >
              <Rating value={ review.rating } readOnly size="small" />
              <Typography variant="body1" sx={ { mt: 2, flexGrow: 1, lineHeight: 1.6 } }>
                “{ review.content }”
              </Typography>
              <Box sx={ { display: 'flex', alignItems: 'center', gap: 1.5, mt: 3 } }>
                <Avatar sx={ { bgcolor: 'primary.light', color: 'primary.main', fontWeight: 700 } }>
                  { review.name.charAt(0) }
                </Avatar>
                <Box>
                  <Box sx={ { fontWeight: 700, fontSize: '0.95rem' } }>{ review.name }</Box>
                  <Box sx={ { color: 'text.secondary', fontSize: '0.8rem' } }>{ review.info }</Box>
                </Box>
              </Box>
            </Paper>
          </Grid>
        )) }
      </Grid>
    </SectionContainer>
  );
}

export default ReviewSection;
