import { styled } from '@stitches/react';

// 토글 컨테이너 스타일
export const ToggleContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  width: '120px', // 전체 컨테이너 크기
  height: '40px',
  backgroundColor: '#fff',
  borderRadius: '20px',
  cursor: 'pointer',
  padding: '5px',
  transition: 'background-color 0.3s ease',
   border: '2px solid #ccc',
});

// 슬라이더 스타일
export const Slider = styled('div', {
  display: 'flex',
  alignItems: 'center',
  width: '50px', // 슬라이더의 크기
  height: '30px',
  backgroundColor: '#8B63BB',
  borderRadius: '20px',
  position: 'absolute',
  transition: 'transform 0.3s ease',
  transform: 'translateX(0px)', // 기본 위치

  variants: {
    isToggled: {
      true: {
        transform: 'translateX(60px)', // 활성화 상태일 때 위치
      },
      false: {
        transform: 'translateX(0px)', // 비활성화 상태일 때 위치
      },
    },
  },
});

// 듀오 토글 옵션 스타일
export const ToggleOption = styled('div', {
  flex: 1,
  textAlign: 'center',
  lineHeight: '30px',
  fontSize: '14px',
  fontWeight: 'bold',
  color: '#666', // 기본 색상
  zIndex: 1, // 슬라이더 위에 텍스트가 표시되도록 z-index 설정
  pointerEvents: 'none', // 클릭이 텍스트에 영향을 미치지 않도록 설정

  variants: {
    active: {
      true: {
        color: '#fff', // 활성화 상태일 때 색상
      },
      false: {
        color: '#666', // 비활성화 상태일 때 색상
      },
    },
  },
});
