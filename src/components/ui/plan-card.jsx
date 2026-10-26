import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { formatPrice } from '../../utils/format-price.js';

/**
 * PlanCard 컴포넌트
 * 정기 구독 플랜 1개의 가격과 혜택을 보여주는 카드
 *
 * Props:
 * @param {object} plan - 플랜 정보 (id, name, summary, mealsPerWeek, pricePerMeal, benefits, isPopular) [Required]
 * @param {boolean} isSelected - 현재 주문서에 선택된 플랜인지 여부 [Optional, 기본값: false]
 * @param {function} onSelect - '이 플랜 선택' 클릭 시 실행할 함수, 플랜 id 전달 [Optional]
 *
 * Example usage:
 * <PlanCard plan={ plan } isSelected={ plan.id === selectedPlanId } onSelect={ handleSelectPlan } />
 */
function PlanCard({ plan, isSelected = false, onSelect }) {
  const weeklyPrice = plan.pricePerMeal * plan.mealsPerWeek;

  return (
    <Paper
      elevation={ 0 }
      sx={ {
        position: 'relative',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        p: { xs: 3, md: 4 },
        borderRadius: 5,
        border: '2px solid',
        borderColor: isSelected ? 'primary.main' : 'divider',
        bgcolor: plan.isPopular ? 'primary.light' : 'background.paper',
        transition: 'border-color 0.2s',
      } }
    >
      { plan.isPopular && (
        <Chip
          label="가장 인기"
          color="secondary"
          size="small"
          sx={ { position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', fontWeight: 700 } }
        />
      ) }

      <Typography variant="h6" component="h3">
        { plan.name }
      </Typography>
      <Typography variant="body2" sx={ { color: 'text.secondary', mt: 0.5 } }>
        { plan.summary }
      </Typography>

      <Box sx={ { mt: 3, display: 'flex', alignItems: 'baseline', gap: 1 } }>
        <Box component="span" sx={ { fontSize: { xs: '1.8rem', md: '2.1rem' }, fontWeight: 800 } }>
          { formatPrice(plan.pricePerMeal) }
        </Box>
        <Box component="span" sx={ { color: 'text.secondary', fontSize: '0.9rem' } }>
          / 1식
        </Box>
      </Box>
      <Typography variant="body2" sx={ { color: 'text.secondary', mt: 0.5 } }>
        주 { plan.mealsPerWeek }회 · 주간 { formatPrice(weeklyPrice) }
      </Typography>

      <Divider sx={ { my: 3 } } />

      <Box component="ul" sx={ { listStyle: 'none', p: 0, m: 0, flexGrow: 1 } }>
        { plan.benefits.map((benefit) => (
          <Box
            component="li"
            key={ benefit }
            sx={ { display: 'flex', alignItems: 'center', gap: 1, py: 0.75, fontSize: '0.95rem' } }
          >
            <CheckCircleRoundedIcon sx={ { color: 'primary.main', fontSize: '1.2rem' } } />
            { benefit }
          </Box>
        )) }
      </Box>

      <Button
        fullWidth
        size="large"
        disableElevation
        variant={ isSelected ? 'contained' : 'outlined' }
        onClick={ () => onSelect?.(plan.id) }
        sx={ { mt: 3 } }
      >
        { isSelected ? '선택된 플랜' : '이 플랜 선택' }
      </Button>
    </Paper>
  );
}

export default PlanCard;
