import { styled } from '@stitches/react';

export const LeftContainer = styled('div', {
  margin: 'auto 0 auto 16px',
  width: '30px',
  height: '30px',
});

export const RightContainer = styled('div', {
  margin: 'auto 16px auto 0',
  width: '30px',
  height: '30px',
  display: 'flex',
});

export const TitleContainer = styled('div', {
  zIndex: 2,
  width: '100%',
  height: '56px',
  display: 'flex',
  justifyContent: 'space-between',
  position: 'sticky',
  backgroundColor: 'white',
  borderBottom: '1px solid #dddddd',
  top: 0,
});
