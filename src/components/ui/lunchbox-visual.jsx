import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

/**
 * 도시락 칸 구성 (영양 구성 예시)
 */
const COMPARTMENTS = [
  { emoji: '🍚', label: '현미 잡곡밥', detail: '복합 탄수화물', color: '#F3EEE6', isLarge: true },
  { emoji: '🍗', label: '수비드 닭가슴살', detail: '단백질 30g', color: '#FDEEE5', isLarge: false },
  { emoji: '🥦', label: '제철 구운 채소', detail: '식이섬유', color: '#E6F2EB', isLarge: false },
];

/**
 * LunchboxVisual 컴포넌트
 * 히어로 영역에 표시되는 도시락 일러스트 (칸별 영양 구성)
 *
 * Props: 없음
 *
 * Example usage:
 * <LunchboxVisual />
 */
function LunchboxVisual() {
  return (
    <Box sx={ { position: 'relative', width: '100%', maxWidth: 460, mx: 'auto' } }>
      <Paper
        elevation={ 0 }
        sx={ {
          p: { xs: 1.5, md: 2 },
          borderRadius: 6,
          bgcolor: 'primary.main',
          boxShadow: '0 24px 48px rgba(47, 125, 91, 0.25)',
          transform: 'rotate(-2deg)',
        } }
      >
        <Box
          sx={ {
            display: 'grid',
            gridTemplateColumns: '1.3fr 1fr',
            gridTemplateRows: 'repeat(2, minmax(120px, 1fr))',
            gap: { xs: 1, md: 1.5 },
            aspectRatio: '4 / 3',
          } }
        >
          { COMPARTMENTS.map((compartment) => (
            <Box
              key={ compartment.label }
              sx={ {
                gridRow: compartment.isLarge ? 'span 2' : 'auto',
                bgcolor: compartment.color,
                borderRadius: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                p: 1,
              } }
            >
              <Box
                component="span"
                role="img"
                aria-label={ compartment.label }
                sx={ { fontSize: compartment.isLarge ? { xs: '4rem', md: '5.5rem' } : { xs: '2.5rem', md: '3.25rem' } } }
              >
                { compartment.emoji }
              </Box>
              <Box sx={ { fontWeight: 700, fontSize: { xs: '0.8rem', md: '0.95rem' }, color: 'text.primary', mt: 0.5 } }>
                { compartment.label }
              </Box>
              <Box sx={ { fontSize: { xs: '0.7rem', md: '0.8rem' }, color: 'text.secondary' } }>
                { compartment.detail }
              </Box>
            </Box>
          )) }
        </Box>
      </Paper>

      <Paper
        elevation={ 3 }
        sx={ {
          position: 'absolute',
          top: { xs: -16, md: -20 },
          right: { xs: 8, md: -16 },
          px: 2,
          py: 1,
          borderRadius: 999,
          fontWeight: 700,
          fontSize: { xs: '0.8rem', md: '0.9rem' },
          color: 'secondary.dark',
        } }
      >
        🔥 1식 평균 450kcal
      </Paper>
      <Paper
        elevation={ 3 }
        sx={ {
          position: 'absolute',
          bottom: { xs: -16, md: -20 },
          left: { xs: 8, md: -16 },
          px: 2,
          py: 1,
          borderRadius: 999,
          fontWeight: 700,
          fontSize: { xs: '0.8rem', md: '0.9rem' },
          color: 'primary.dark',
        } }
      >
        🚚 오늘 저녁 문 앞 도착
      </Paper>
    </Box>
  );
}

export default LunchboxVisual;
