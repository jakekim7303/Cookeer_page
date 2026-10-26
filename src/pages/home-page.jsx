import { useState } from 'react';
import Box from '@mui/material/Box';
import Footer from '../components/common/footer.jsx';
import Header from '../components/common/header.jsx';
import FaqSection from '../components/landing/faq-section.jsx';
import FeatureSection from '../components/landing/feature-section.jsx';
import HeroSection from '../components/landing/hero-section.jsx';
import HowItWorksSection from '../components/landing/how-it-works-section.jsx';
import MenuSection from '../components/landing/menu-section.jsx';
import OrderSection from '../components/landing/order-section.jsx';
import PlanSection from '../components/landing/plan-section.jsx';
import ReviewSection from '../components/landing/review-section.jsx';
import { MENUS } from '../data/menu-data.js';
import { PLANS } from '../data/plan-data.js';
import { scrollToSection } from '../utils/scroll-to-section.js';

/**
 * 기본 선택 플랜 (가장 인기 있는 플랜)
 */
const DEFAULT_PLAN_ID = (PLANS.find((plan) => plan.isPopular) ?? PLANS[0]).id;

/**
 * HomePage 컴포넌트
 * Cookeer 랜딩 페이지 - 메뉴/플랜 선택 상태를 주문서와 공유한다.
 *
 * Props: 없음
 *
 * Example usage:
 * <HomePage />
 */
function HomePage() {
  const [selectedMenuId, setSelectedMenuId] = useState(MENUS[0].id);
  const [selectedPlanId, setSelectedPlanId] = useState(DEFAULT_PLAN_ID);

  const handleSelectMenu = (menuId) => {
    setSelectedMenuId(menuId);
    scrollToSection('order');
  };

  const handleSelectPlan = (planId) => {
    setSelectedPlanId(planId);
    scrollToSection('order');
  };

  return (
    <Box sx={ { width: '100%', display: 'flex', flexDirection: 'column' } }>
      <Header />
      <Box component="main" sx={ { width: '100%' } }>
        <HeroSection />
        <FeatureSection />
        <MenuSection onSelectMenu={ handleSelectMenu } />
        <HowItWorksSection />
        <PlanSection selectedPlanId={ selectedPlanId } onSelectPlan={ handleSelectPlan } />
        <ReviewSection />
        <FaqSection />
        <OrderSection
          selectedMenuId={ selectedMenuId }
          selectedPlanId={ selectedPlanId }
          onMenuChange={ setSelectedMenuId }
          onPlanChange={ setSelectedPlanId }
        />
      </Box>
      <Footer />
    </Box>
  );
}

export default HomePage;
