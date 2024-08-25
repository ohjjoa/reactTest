import { styled } from '@stitches/react';

export const CarNumberCheckModalContainer = styled('div', {
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  height: 'auto',
  background: '#fff',
  boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.3s ease-in-out',
  transform: 'translateY(100%)',
  display: 'flex',
  flexDirection: 'column',
  padding: '16px',
  boxSizing: 'border-box',
  borderRadius: '20px 20px 0px 0px',
  zIndex: 10000,
  variants: {
    isVisible: {
      true: { transform: 'translateY(0)' },
      false: { transform: 'translateY(100%)' },
    },
  },
});

export const CarNumberCheckModalMainContainer = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  fontFamily: 'Pretendard',
  fontSize: '18px',
  fontWeight: 600,
  fontStyle: 'normal',
  lineHeight: '20px',
  marginTop: '36px',
  paddingBottom: '44px'
})

export const CarNumberBackGroundContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  marginTop: '30px',
  color: '#6B6B6B',
  borderRadius: '10px',
  background: '#EBEBFB',
  lineHeight: '22px',
  height: '80px',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '10px',
})

export const CarNumberOutlineContainer = styled('div', {
  borderRadius: '6px',
  border: '2px solid #000',
  background: '#fff',
  width: '100%',
  height: '64px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  boxSizing: 'border-box',
})

export const LeftDotImg = styled('img', {
  position: 'absolute',
  left: '10px',
  top: '50%',
  transform: 'translateY(-50%)',
})

export const CarNumberText = styled('span', {
  position: 'relative',
  zIndex: 1,
  color: '#333',
  fontFamily: 'Pretendard',
  fontSize: '35px',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: '20px'
})

export const RightDotImg = styled('img', {
  position: 'absolute',
  right: '10px',
  top: '50%',
  transform: 'translateY(-50%)',
})

export const CarNumberMistakeContainer = styled('div', {
  textAlign: 'left',
  marginTop: '15px',
  fontFamily: 'Pretendard',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '22px'
})

export const CheckButton = styled('button', {
  marginTop: '26px',
  height: '46px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  border: 'none',
  backgroundColor: '#8B63BB',
  color: '#fff',
  borderRadius: '4px',
  padding: '10px 20px',
  cursor: 'pointer',
  fontSize: '16px',
})