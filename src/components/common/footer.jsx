import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LunchDiningRoundedIcon from '@mui/icons-material/LunchDiningRounded';

/**
 * 푸터 안내 정보
 */
const FOOTER_INFO = [
  { title: '고객센터', lines: ['1588-0000', '평일 10:00 ~ 21:00'] },
  { title: '배송 지역', lines: ['서울 전 지역', '경기 성남·수원·고양·용인'] },
  { title: '주문 마감', lines: ['당일 배송: 오후 2시까지', '도착 시간: 18:00 ~ 21:00'] },
];

/**
 * Footer 컴포넌트
 * 사이트 하단 브랜드 및 고객 안내 정보
 *
 * Props: 없음
 *
 * Example usage:
 * <Footer />
 */
function Footer() {
  return (
    <Box component="footer" sx={ { width: '100%', bgcolor: 'text.primary', color: 'rgba(255, 255, 255, 0.8)', py: { xs: 6, md: 8 } } }>
      <Container maxWidth="lg" sx={ { px: { xs: 2, md: 3 } } }>
        <Grid container spacing={ 4 }>
          <Grid size={ { xs: 12, md: 3 } }>
            <Box sx={ { display: 'flex', alignItems: 'center', gap: 1, color: '#FFFFFF', fontSize: '1.4rem', fontWeight: 800 } }>
              <LunchDiningRoundedIcon />
              Cookeer
            </Box>
            <Typography variant="body2" sx={ { mt: 1.5, lineHeight: 1.6 } }>
              거르기 쉬운 저녁,
              <br />
              가볍고 든든하게 챙겨드려요.
            </Typography>
          </Grid>
          { FOOTER_INFO.map((info) => (
            <Grid key={ info.title } size={ { xs: 12, sm: 4, md: 3 } }>
              <Typography variant="subtitle2" component="h3" sx={ { color: '#FFFFFF', fontWeight: 700, mb: 1 } }>
                { info.title }
              </Typography>
              { info.lines.map((line) => (
                <Typography key={ line } variant="body2" sx={ { lineHeight: 1.8 } }>
                  { line }
                </Typography>
              )) }
            </Grid>
          )) }
        </Grid>
        <Divider sx={ { my: 4, borderColor: 'rgba(255, 255, 255, 0.15)' } } />
        <Typography variant="caption" component="p">
          © 2026 Cookeer. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
