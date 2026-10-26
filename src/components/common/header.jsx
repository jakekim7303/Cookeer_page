import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import LunchDiningRoundedIcon from '@mui/icons-material/LunchDiningRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { scrollToSection } from '../../utils/scroll-to-section.js';

/**
 * 헤더 내비게이션 항목 (섹션 id 와 연결)
 */
const NAV_ITEMS = [
  { label: '서비스 소개', sectionId: 'features' },
  { label: '메뉴', sectionId: 'menu' },
  { label: '이용 방법', sectionId: 'how-it-works' },
  { label: '구독 플랜', sectionId: 'plans' },
  { label: '고객 후기', sectionId: 'reviews' },
  { label: 'FAQ', sectionId: 'faq' },
];

/**
 * Header 컴포넌트
 * 상단 고정 내비게이션 (데스크톱: 메뉴 나열 / 모바일: 드로어)
 *
 * Props: 없음
 *
 * Example usage:
 * <Header />
 */
function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleNavigate = (sectionId) => {
    setIsDrawerOpen(false);
    scrollToSection(sectionId);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AppBar
      position="sticky"
      elevation={ 0 }
      sx={ {
        bgcolor: 'rgba(251, 248, 243, 0.9)',
        backdropFilter: 'blur(8px)',
        color: 'text.primary',
        borderBottom: '1px solid',
        borderColor: 'divider',
      } }
    >
      <Container maxWidth="lg" sx={ { px: { xs: 2, md: 3 } } }>
        <Toolbar disableGutters sx={ { justifyContent: 'space-between' } }>
          <Box
            component="button"
            type="button"
            onClick={ handleLogoClick }
            aria-label="Cookeer 홈으로 이동"
            sx={ {
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              p: 0,
              border: 'none',
              bgcolor: 'transparent',
              cursor: 'pointer',
              color: 'primary.main',
              fontFamily: 'inherit',
              fontSize: '1.4rem',
              fontWeight: 800,
              letterSpacing: '-0.02em',
            } }
          >
            <LunchDiningRoundedIcon sx={ { fontSize: '1.8rem' } } />
            Cookeer
          </Box>

          <Box component="nav" sx={ { display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 } }>
            { NAV_ITEMS.map((item) => (
              <Button
                key={ item.sectionId }
                color="inherit"
                onClick={ () => handleNavigate(item.sectionId) }
                sx={ { fontWeight: 500, px: 1.5 } }
              >
                { item.label }
              </Button>
            )) }
            <Button
              variant="contained"
              color="secondary"
              disableElevation
              onClick={ () => handleNavigate('order') }
              sx={ { ml: 1 } }
            >
              주문하기
            </Button>
          </Box>

          <IconButton
            aria-label="메뉴 열기"
            onClick={ () => setIsDrawerOpen(true) }
            sx={ { display: { xs: 'inline-flex', md: 'none' } } }
          >
            <MenuRoundedIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={ isDrawerOpen } onClose={ () => setIsDrawerOpen(false) }>
        <Box sx={ { width: 260, p: 2 } }>
          <Box sx={ { display: 'flex', justifyContent: 'flex-end' } }>
            <IconButton aria-label="메뉴 닫기" onClick={ () => setIsDrawerOpen(false) }>
              <CloseRoundedIcon />
            </IconButton>
          </Box>
          <List>
            { NAV_ITEMS.map((item) => (
              <ListItemButton key={ item.sectionId } onClick={ () => handleNavigate(item.sectionId) }>
                <ListItemText primary={ item.label } />
              </ListItemButton>
            )) }
          </List>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            disableElevation
            onClick={ () => handleNavigate('order') }
            sx={ { mt: 2 } }
          >
            주문하기
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default Header;
