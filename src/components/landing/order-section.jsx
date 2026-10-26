import { useState } from 'react';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import SectionContainer from '../ui/section-container.jsx';
import { MENUS } from '../../data/menu-data.js';
import { DELIVERY_TIMES, PLANS } from '../../data/plan-data.js';
import { formatPrice } from '../../utils/format-price.js';
import { validatePhone } from '../../utils/validate-phone.js';

/**
 * 첫 주문 할인율
 */
const FIRST_ORDER_DISCOUNT_RATE = 0.2;

/**
 * 주문서 입력값 초기 상태
 */
const INITIAL_FORM = {
  name: '',
  phone: '',
  address: '',
  addressDetail: '',
  deliveryTime: DELIVERY_TIMES[1],
  request: '',
};

/**
 * OrderSection 컴포넌트
 * 배송 정보 입력 주문서와 결제 예상 금액 요약
 *
 * Props:
 * @param {string} selectedMenuId - 첫 배송 메뉴 id [Required]
 * @param {string} selectedPlanId - 구독 플랜 id [Required]
 * @param {function} onMenuChange - 첫 배송 메뉴 변경 시 실행할 함수, 메뉴 id 전달 [Required]
 * @param {function} onPlanChange - 구독 플랜 변경 시 실행할 함수, 플랜 id 전달 [Required]
 *
 * Example usage:
 * <OrderSection
 *   selectedMenuId={ selectedMenuId }
 *   selectedPlanId={ selectedPlanId }
 *   onMenuChange={ setSelectedMenuId }
 *   onPlanChange={ setSelectedPlanId }
 * />
 */
function OrderSection({ selectedMenuId, selectedPlanId, onMenuChange, onPlanChange }) {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const selectedPlan = PLANS.find((plan) => plan.id === selectedPlanId) ?? PLANS[0];
  const selectedMenu = MENUS.find((menu) => menu.id === selectedMenuId) ?? MENUS[0];
  const weeklyPrice = selectedPlan.pricePerMeal * selectedPlan.mealsPerWeek;
  const discountPrice = Math.round(weeklyPrice * FIRST_ORDER_DISCOUNT_RATE);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((prevForm) => ({ ...prevForm, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  /**
   * 필수 입력값을 검사하고 에러 메시지 객체를 반환한다.
   */
  const validateForm = () => {
    const nextErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = '받는 분 이름을 입력해 주세요.';
    }
    if (!validatePhone(form.phone)) {
      nextErrors.phone = '휴대폰 번호를 정확히 입력해 주세요. (예: 010-1234-5678)';
    }
    if (!form.address.trim()) {
      nextErrors.address = '배송 받을 주소를 입력해 주세요.';
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validateForm();

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    /** TODO: 결제 및 주문 저장 API 연동 */
    setIsSnackbarOpen(true);
    setForm(INITIAL_FORM);
  };

  return (
    <SectionContainer
      id="order"
      eyebrow="ORDER"
      title="오늘 주문하고, 내일 저녁부터 받아보세요"
      description="오후 2시 전에 주문하면 당일 저녁에도 받아볼 수 있어요. 첫 주문은 20% 할인돼요."
    >
      <Grid container spacing={ 3 }>
        <Grid size={ { xs: 12, md: 7 } }>
          <Paper
            component="form"
            noValidate
            onSubmit={ handleSubmit }
            elevation={ 0 }
            sx={ { p: { xs: 3, md: 4 }, borderRadius: 5, border: '1px solid', borderColor: 'divider' } }
          >
            <Typography variant="h6" component="h3" sx={ { mb: 3 } }>
              배송 정보
            </Typography>
            <Grid container spacing={ 2 }>
              <Grid size={ { xs: 12, sm: 6 } }>
                <TextField
                  fullWidth
                  required
                  label="받는 분"
                  name="name"
                  value={ form.name }
                  onChange={ handleChange }
                  error={ Boolean(errors.name) }
                  helperText={ errors.name }
                />
              </Grid>
              <Grid size={ { xs: 12, sm: 6 } }>
                <TextField
                  fullWidth
                  required
                  label="휴대폰 번호"
                  name="phone"
                  placeholder="010-1234-5678"
                  value={ form.phone }
                  onChange={ handleChange }
                  error={ Boolean(errors.phone) }
                  helperText={ errors.phone }
                  slotProps={ { htmlInput: { inputMode: 'tel' } } }
                />
              </Grid>
              <Grid size={ { xs: 12 } }>
                <TextField
                  fullWidth
                  required
                  label="배송 주소"
                  name="address"
                  placeholder="예) 서울시 마포구 월드컵로 00"
                  value={ form.address }
                  onChange={ handleChange }
                  error={ Boolean(errors.address) }
                  helperText={ errors.address }
                />
              </Grid>
              <Grid size={ { xs: 12 } }>
                <TextField
                  fullWidth
                  label="상세 주소"
                  name="addressDetail"
                  placeholder="동, 호수, 공동현관 비밀번호 등"
                  value={ form.addressDetail }
                  onChange={ handleChange }
                />
              </Grid>
              <Grid size={ { xs: 12, sm: 6 } }>
                <TextField
                  select
                  fullWidth
                  label="구독 플랜"
                  value={ selectedPlan.id }
                  onChange={ (event) => onPlanChange(event.target.value) }
                >
                  { PLANS.map((plan) => (
                    <MenuItem key={ plan.id } value={ plan.id }>
                      { plan.name } (주 { plan.mealsPerWeek }회)
                    </MenuItem>
                  )) }
                </TextField>
              </Grid>
              <Grid size={ { xs: 12, sm: 6 } }>
                <TextField
                  select
                  fullWidth
                  label="희망 도착 시간"
                  name="deliveryTime"
                  value={ form.deliveryTime }
                  onChange={ handleChange }
                >
                  { DELIVERY_TIMES.map((time) => (
                    <MenuItem key={ time } value={ time }>
                      { time }
                    </MenuItem>
                  )) }
                </TextField>
              </Grid>
              <Grid size={ { xs: 12 } }>
                <TextField
                  select
                  fullWidth
                  label="첫 배송 메뉴"
                  value={ selectedMenu.id }
                  onChange={ (event) => onMenuChange(event.target.value) }
                >
                  { MENUS.map((menu) => (
                    <MenuItem key={ menu.id } value={ menu.id }>
                      { menu.emoji } { menu.name } · { menu.kcal }kcal
                    </MenuItem>
                  )) }
                </TextField>
              </Grid>
              <Grid size={ { xs: 12 } }>
                <TextField
                  fullWidth
                  multiline
                  minRows={ 2 }
                  label="요청사항"
                  name="request"
                  placeholder="알레르기, 출입 방법 등을 적어주세요."
                  value={ form.request }
                  onChange={ handleChange }
                />
              </Grid>
            </Grid>
            <Button type="submit" variant="contained" size="large" fullWidth disableElevation sx={ { mt: 3, py: 1.5 } }>
              { formatPrice(weeklyPrice - discountPrice) } 결제하고 구독 시작하기
            </Button>
          </Paper>
        </Grid>

        <Grid size={ { xs: 12, md: 5 } }>
          <Paper
            elevation={ 0 }
            sx={ {
              position: { md: 'sticky' },
              top: { md: 88 },
              p: { xs: 3, md: 4 },
              borderRadius: 5,
              bgcolor: 'primary.light',
            } }
          >
            <Typography variant="h6" component="h3">
              주문 요약
            </Typography>

            <Box sx={ { display: 'flex', alignItems: 'center', gap: 2, mt: 3, p: 2, borderRadius: 3, bgcolor: 'background.paper' } }>
              <Box
                component="span"
                role="img"
                aria-label={ selectedMenu.name }
                sx={ { fontSize: '2.5rem', width: 64, height: 64, borderRadius: 3, bgcolor: selectedMenu.color, display: 'flex', alignItems: 'center', justifyContent: 'center' } }
              >
                { selectedMenu.emoji }
              </Box>
              <Box>
                <Box sx={ { fontSize: '0.8rem', color: 'text.secondary' } }>첫 배송 메뉴</Box>
                <Box sx={ { fontWeight: 700 } }>{ selectedMenu.name }</Box>
                <Box sx={ { fontSize: '0.85rem', color: 'text.secondary' } }>
                  { selectedMenu.kcal }kcal · 단백질 { selectedMenu.protein }g
                </Box>
              </Box>
            </Box>

            <Box sx={ { mt: 3, display: 'flex', flexDirection: 'column', gap: 1.5, fontSize: '0.95rem' } }>
              <Box sx={ { display: 'flex', justifyContent: 'space-between' } }>
                <Box component="span">{ selectedPlan.name } 플랜</Box>
                <Box component="span">주 { selectedPlan.mealsPerWeek }회 × { formatPrice(selectedPlan.pricePerMeal) }</Box>
              </Box>
              <Box sx={ { display: 'flex', justifyContent: 'space-between' } }>
                <Box component="span">주간 금액</Box>
                <Box component="span">{ formatPrice(weeklyPrice) }</Box>
              </Box>
              <Box sx={ { display: 'flex', justifyContent: 'space-between', color: 'secondary.dark' } }>
                <Box component="span">첫 주문 20% 할인</Box>
                <Box component="span">- { formatPrice(discountPrice) }</Box>
              </Box>
              <Box sx={ { display: 'flex', justifyContent: 'space-between' } }>
                <Box component="span">배송비</Box>
                <Box component="span">무료</Box>
              </Box>
            </Box>

            <Divider sx={ { my: 2.5 } } />

            <Box sx={ { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' } }>
              <Box component="span" sx={ { fontWeight: 700 } }>첫 주 결제 금액</Box>
              <Box component="span" sx={ { fontWeight: 800, fontSize: '1.5rem', color: 'primary.dark' } }>
                { formatPrice(weeklyPrice - discountPrice) }
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      <Snackbar
        open={ isSnackbarOpen }
        autoHideDuration={ 4000 }
        onClose={ () => setIsSnackbarOpen(false) }
        anchorOrigin={ { vertical: 'bottom', horizontal: 'center' } }
      >
        <Alert severity="success" variant="filled" onClose={ () => setIsSnackbarOpen(false) } sx={ { width: '100%' } }>
          주문이 접수되었어요! 선택하신 시간에 맞춰 문 앞으로 찾아갈게요 🍱
        </Alert>
      </Snackbar>
    </SectionContainer>
  );
}

export default OrderSection;
