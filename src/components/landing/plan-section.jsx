import Grid from '@mui/material/Grid';
import PlanCard from '../ui/plan-card.jsx';
import SectionContainer from '../ui/section-container.jsx';
import { PLANS } from '../../data/plan-data.js';

/**
 * PlanSection 컴포넌트
 * 정기 구독 플랜 3종 비교
 *
 * Props:
 * @param {string} selectedPlanId - 현재 선택된 플랜 id [Required]
 * @param {function} onSelectPlan - 플랜 선택 시 실행할 함수, 플랜 id 전달 [Required]
 *
 * Example usage:
 * <PlanSection selectedPlanId={ selectedPlanId } onSelectPlan={ handleSelectPlan } />
 */
function PlanSection({ selectedPlanId, onSelectPlan }) {
  return (
    <SectionContainer
      id="plans"
      eyebrow="SUBSCRIPTION"
      title="내 저녁 패턴에 맞는 구독 플랜"
      description="많이 받을수록 1식 가격이 내려가요. 언제든 일시정지·해지할 수 있어요."
      bgcolor="background.paper"
    >
      <Grid container spacing={ 3 } sx={ { alignItems: 'stretch' } }>
        { PLANS.map((plan) => (
          <Grid key={ plan.id } size={ { xs: 12, md: 4 } }>
            <PlanCard plan={ plan } isSelected={ plan.id === selectedPlanId } onSelect={ onSelectPlan } />
          </Grid>
        )) }
      </Grid>
    </SectionContainer>
  );
}

export default PlanSection;
