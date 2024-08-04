import { styled } from '@stitches/react';

const TestContainer = styled('div', {
  paddingLeft: '16px',
  paddingRight: '16px',
  marginTop: '24px',
  paddingBottom: '110px',
  backgroundColor: '#f0f0f0',
  marginLeft: '16px',  
  marginRight: '16px',          
});

const Sidebar = styled('div', {
  position: 'fixed',
  top: 0,
  left: '-250px', // 사이드바가 화면 밖으로 숨겨져 있도록 설정
  width: '250px',
  height: '100%',
  backgroundColor: '#333',
  color: 'white',
  transition: 'left 0.3s ease', // 애니메이션 효과
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000, // 사이드바가 다른 요소 위에 오도록 설정
});

const SidebarOpen = styled(Sidebar, {
  left: 0, // 사이드바가 화면에 보이도록 설정
});


export { TestContainer, Sidebar, SidebarOpen };
