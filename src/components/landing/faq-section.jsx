import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import SectionContainer from '../ui/section-container.jsx';

/**
 * 자주 묻는 질문 목록
 */
const FAQS = [
  {
    question: '배송 가능한 지역은 어디인가요?',
    answer: '현재 서울 전 지역과 경기 성남·수원·고양·용인 지역에 배송하고 있어요. 배송 지역은 계속 넓혀가는 중이에요.',
  },
  {
    question: '집에 없을 때도 받을 수 있나요?',
    answer: '보냉 패키지에 담아 문 앞에 놓아드리고, 도착 사진과 함께 알림을 보내드려요. 약 4시간 동안 신선하게 유지돼요.',
  },
  {
    question: '메뉴나 배송일을 바꿀 수 있나요?',
    answer: '배송일 전날 자정까지 마이페이지에서 메뉴 변경, 배송 건너뛰기, 일시정지를 자유롭게 할 수 있어요.',
  },
  {
    question: '알레르기가 있는데 괜찮을까요?',
    answer: '모든 메뉴에 알레르기 유발 성분을 표기하고 있어요. 주문 시 요청사항에 적어주시면 대체 가능한 메뉴를 안내해 드려요.',
  },
  {
    question: '구독 해지는 어떻게 하나요?',
    answer: '위약금 없이 언제든 해지할 수 있어요. 이미 결제된 주차의 배송은 정상 진행되고 다음 주차부터 결제가 멈춰요.',
  },
];

/**
 * FaqSection 컴포넌트
 * 자주 묻는 질문 아코디언 목록
 *
 * Props: 없음
 *
 * Example usage:
 * <FaqSection />
 */
function FaqSection() {
  return (
    <SectionContainer
      id="faq"
      eyebrow="FAQ"
      title="자주 묻는 질문"
      bgcolor="background.paper"
    >
      <Box sx={ { maxWidth: 760, mx: 'auto' } }>
        { FAQS.map((faq, index) => (
          <Accordion
            key={ faq.question }
            disableGutters
            elevation={ 0 }
            defaultExpanded={ index === 0 }
            sx={ {
              mb: 1.5,
              borderRadius: 3,
              border: '1px solid',
              borderColor: 'divider',
              '&::before': { display: 'none' },
              '&:first-of-type, &:last-of-type': { borderRadius: 3 },
            } }
          >
            <AccordionSummary expandIcon={ <ExpandMoreRoundedIcon /> } sx={ { px: 3 } }>
              <Typography component="h3" sx={ { fontWeight: 700 } }>
                Q. { faq.question }
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={ { px: 3, pb: 3 } }>
              <Typography variant="body2" sx={ { color: 'text.secondary', lineHeight: 1.6 } }>
                { faq.answer }
              </Typography>
            </AccordionDetails>
          </Accordion>
        )) }
      </Box>
    </SectionContainer>
  );
}

export default FaqSection;
