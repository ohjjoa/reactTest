import { styled } from '@stitches/react';

export const MainContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto 16px auto 16px',

    '@media screen and (max-height: 480px)': {
      padding: '20px',
    },
});

export const ContentsContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column', // 자식 요소들을 수직으로 배치
    alignItems: 'center',    // 자식 요소들을 수평으로 가운데 정렬
    fontSize: '14px',
    margin: 'auto auto 16px auto',
    justifyContent: 'center',
    textAlign: 'center',     // 텍스트를 가운데 정렬
});

export const CouponInputContainer = styled('div', {
    width: '100%',
    background: '#FFFFFF',
    borderRadius: '12px',
    display: 'flex',
    paddingLeft: '16px',
    paddingRight: '4px',
    textAlign: 'center',
});
