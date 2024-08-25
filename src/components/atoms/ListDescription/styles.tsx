import { styled } from '@stitches/react';

export const ListDescriptionContainer = styled('div', {
  padding: '12px 16px',
  borderRadius: '4px',
  listStyleType: 'disc',
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  lineHeight: '20px',
  letterSpacing: '-0.4px',
  fontFamily: 'Pretendard',
  fontWeight: 400,
  fontSize: '14px',
  variants: {
    gray: {
      true: {
        color: '#99A2AC',
        backgroundColor: '#F7F7F7',
      },
    },
    pink: {
      true: {
        color: '#FF4747',
        backgroundColor: '#FFDADA',
      },
    },
  },
});
