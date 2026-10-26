import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import MenuCard from '../ui/menu-card.jsx';
import SectionContainer from '../ui/section-container.jsx';
import { MENU_CATEGORIES, MENUS } from '../../data/menu-data.js';

/**
 * MenuSection 컴포넌트
 * 카테고리 탭으로 필터링되는 이번 주 도시락 메뉴 목록
 *
 * Props:
 * @param {function} onSelectMenu - 메뉴 카드의 주문 버튼 클릭 시 실행할 함수, 메뉴 id 전달 [Required]
 *
 * Example usage:
 * <MenuSection onSelectMenu={ handleSelectMenu } />
 */
function MenuSection({ onSelectMenu }) {
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0]);

  const filteredMenus = activeCategory === MENU_CATEGORIES[0]
    ? MENUS
    : MENUS.filter((menu) => menu.category === activeCategory);

  return (
    <SectionContainer
      id="menu"
      eyebrow="THIS WEEK"
      title="이번 주 Cookeer 도시락"
      description="매주 새로운 메뉴가 준비돼요. 원하는 목표에 맞춰 골라보세요."
      bgcolor="background.paper"
    >
      <Box sx={ { display: 'flex', justifyContent: 'center', mb: 4 } }>
        <Tabs
          value={ activeCategory }
          onChange={ (event, category) => setActiveCategory(category) }
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          aria-label="메뉴 카테고리"
        >
          { MENU_CATEGORIES.map((category) => (
            <Tab key={ category } label={ category } value={ category } sx={ { fontWeight: 700 } } />
          )) }
        </Tabs>
      </Box>

      <Grid container spacing={ 3 }>
        { filteredMenus.map((menu) => (
          <Grid key={ menu.id } size={ { xs: 12, sm: 6, md: 3 } }>
            <MenuCard menu={ menu } onSelect={ onSelectMenu } />
          </Grid>
        )) }
      </Grid>
    </SectionContainer>
  );
}

export default MenuSection;
