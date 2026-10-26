import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { formatPrice } from '../../utils/format-price.js';

/**
 * MenuCard 컴포넌트
 * 도시락 메뉴 1개의 정보(이미지, 영양 정보, 가격)를 보여주는 카드
 *
 * Props:
 * @param {object} menu - 메뉴 정보 (name, description, category, emoji, color, kcal, protein, price, isBest) [Required]
 * @param {function} onSelect - '이 메뉴로 주문' 클릭 시 실행할 함수, 메뉴 id 전달 [Optional]
 *
 * Example usage:
 * <MenuCard menu={ menu } onSelect={ handleSelectMenu } />
 */
function MenuCard({ menu, onSelect }) {
  return (
    <Card
      elevation={ 0 }
      sx={ {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 4,
        border: '1px solid',
        borderColor: 'divider',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 12px 28px rgba(35, 48, 42, 0.12)',
        },
      } }
    >
      <Box
        sx={ {
          position: 'relative',
          height: 150,
          bgcolor: menu.color,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        } }
      >
        <Box component="span" role="img" aria-label={ menu.name } sx={ { fontSize: '4.5rem' } }>
          { menu.emoji }
        </Box>
        { menu.isBest && (
          <Chip
            label="BEST"
            size="small"
            color="secondary"
            sx={ { position: 'absolute', top: 12, left: 12, fontWeight: 700 } }
          />
        ) }
      </Box>

      <CardContent sx={ { flexGrow: 1 } }>
        <Typography variant="caption" sx={ { color: 'primary.main', fontWeight: 700 } }>
          { menu.category }
        </Typography>
        <Typography variant="h6" component="h3" sx={ { fontSize: '1.05rem', mt: 0.5 } }>
          { menu.name }
        </Typography>
        <Typography variant="body2" sx={ { color: 'text.secondary', mt: 1, lineHeight: 1.5 } }>
          { menu.description }
        </Typography>
        <Stack direction="row" spacing={ 1 } sx={ { mt: 2 } }>
          <Chip label={ `${ menu.kcal }kcal` } size="small" variant="outlined" />
          <Chip label={ `단백질 ${ menu.protein }g` } size="small" variant="outlined" />
        </Stack>
      </CardContent>

      <CardActions sx={ { px: 2, pb: 2, justifyContent: 'space-between' } }>
        <Typography variant="h6" component="p" sx={ { fontSize: '1.1rem' } }>
          { formatPrice(menu.price) }
        </Typography>
        <Button variant="contained" size="small" disableElevation onClick={ () => onSelect?.(menu.id) }>
          이 메뉴로 주문
        </Button>
      </CardActions>
    </Card>
  );
}

export default MenuCard;
