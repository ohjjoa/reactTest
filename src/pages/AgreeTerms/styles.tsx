import { styled } from '@stitches/react';

export const MainContainer = styled('div', {
    display: 'block',
    margin: 'auto 16px auto 16px',
  
    '@media screen and (max-height: 480px)': {
      padding: '20px',
    },
});

export const ButtonContainer = styled('div', {
    display: 'flex',
    fontSize: '14px',
    margin: 'auto auto 16px auto',
});
