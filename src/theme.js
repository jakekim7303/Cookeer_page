import { createTheme } from '@mui/material/styles';

/**
 * Cookeer 브랜드 테마
 * - primary: 신선한 채소를 떠올리는 딥 그린
 * - secondary: 따뜻한 저녁 식탁을 떠올리는 오렌지
 */
const theme = createTheme({
  palette: {
    primary: {
      main: '#2F7D5B',
      light: '#E6F2EB',
      dark: '#1F5A40',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#F28C5B',
      light: '#FDEEE5',
      dark: '#D96C3A',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FBF8F3',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#23302A',
      secondary: '#5F6B65',
    },
    divider: '#E8E2D8',
  },
  typography: {
    fontFamily: '"Noto Sans KR", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      lineHeight: 1.25,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 800,
      lineHeight: 1.3,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontWeight: 700,
      lineHeight: 1.35,
    },
    h6: {
      fontWeight: 700,
    },
    button: {
      fontWeight: 700,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 12,
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 20,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
    },
  },
});

export default theme;
