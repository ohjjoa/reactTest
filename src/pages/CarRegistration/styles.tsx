import { styled } from '@stitches/react';

export const TitleContainer = styled('div', {
  width: '100%',
  fontFamily: 'Pretendard',
  fontSize: '22px',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: '30px'
})

export const CarNumberInputContainer = styled('div', {
  width: '100%',
  height: '100px',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#F8F8FA',
  borderRadius: '10px',
  marginTop: '20px',
  color: '#6B6B6B',
})

export const CarNumberText = styled('span', {
  color: '#6B6B6B',
  fontFamily: 'Pretendard',
  fontSize: '15px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '22px',
  margin: '20px 20px'
})

export const CarNumberInput = styled('input', {
  border: '0px',
  outline: 'none',
  fontWeight: 700,
  color: '#868686',
  backgroundColor: '#F8F8FA',
  margin: '0 20px',
  fontSize: '16px'
})

export const CarNumberErrorContainer = styled('div', {
  width: '100%',
  marginTop: '10px',
  marginLeft: '8px',
  fontFamily: 'Pretendard',
  fontSize: '11px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 'normal',
})

export const CheckBoxTermsButtonContainer = styled('div', {
  marginTop: 'auto',
  marginBottom: '40px',
  justifyContent: 'space-between',
})

export const CustomCheckboxLabel = styled('label', {
  display: 'inline-flex',
  alignItems: 'center',
  position: 'relative',
  cursor: 'pointer',
  userSelect: 'none',
  justifyContent: 'space-between',
  width: '100%',
});

export const CustomCheckboxInput = styled('input', {
  opacity: 0,
  '&:checked + .checkmark': {
    backgroundColor: '#8B63BB', // Checked state background color
  },
  '&:checked + .checkmark:after': {
    display: 'block',
  },
});

export const Checkmark = styled('span', {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '17px',
  height: '17px',
  backgroundColor: '#F8F8FA', // Default background color
  border: '1px solid #8B63BB', // Border color
  borderRadius: '4px',
  transition: 'background-color 0.3s',
  '&:after': {
    content: '',
    position: 'absolute',
    display: 'none',
    left: '5px',
    top: '2px',
    width: '4px',
    height: '8px',
    border: 'solid white',
    borderWidth: '0 3px 3px 0',
    transform: 'rotate(45deg)',
  },
});

export const CheckBoxLabel = styled('label', {
  display: 'flex',
  alignItems: 'center',
  fontSize: '16px',
  lineHeight: '1.5',
  marginBottom: '12px',
});

export const EssentialText = styled('span', {
  color: '#ED1659',
  fontFamily: 'Pretendard',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '20px',
});

export const TermsRequestText = styled('span', {
  fontFamily: 'Pretendard',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '20px'
})

export const ArrowButtonContainer = styled('div', {
  flexShrink: 0,
  cursor: 'pointer',
});