import React, { useState, useRef, useEffect } from 'react';
import { FixedSizeList as List } from 'react-window';
import { TestContainer, Sidebar, SidebarOpen } from './styles';
import icBurger from '../../assets/ic_burger.svg';

// 리스트 항목의 데이터
// const items = new Array(5).fill(null).map((_, index) => `Item ${index + 1}`);
// 리스트 항목의 데이터
const items = [
  '주차장 이용내역',
  '주차장 공유내역',
  '주차장 사진 업로드',
  '알림',
  '설정'
];

const Home = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  const burgerClick = () => {
    setSideBarOpen(!sideBarOpen);
  };

  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node) &&
      backgroundRef.current &&
      !backgroundRef.current.contains(event.target as Node)
    ) {
      setSideBarOpen(false);
    }
  };

  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault(); // 기본 우클릭 메뉴 막기
      event.stopPropagation(); // 이벤트 전파 막기
      return false;
    };

    window.addEventListener('contextmenu', handleContextMenu);
    // 데스크탑 환경
    document.addEventListener('mousedown', handleClickOutside);
    // 모바일 환경
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  // 사이드바 아이템 렌더링
  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => (
    <div
    style={{
      backgroundColor: '#f5f5f5', // 아이템의 배경 색상
      padding: '10px', // 아이템의 패딩
      borderBottom: '1px solid #ddd', // 아이템 하단의 경계선 (선택 사항)
      boxSizing: 'border-box', // 패딩과 경계선이 요소의 전체 크기에 포함되도록
      color: '#000000'
    }}
  >
    {items[index]}
    </div>
  );

  return (
    <div ref={backgroundRef}>
      <TestContainer>
        <img
          src={icBurger}
          alt="Burger Icon"
          style={{
            maxWidth: '100%',
            height: 'auto',
            cursor: 'pointer',
            marginTop: '50px',
          }}
          onClick={burgerClick} // 클릭 이벤트로 사이드바 열기/닫기 처리
        />
      </TestContainer>

      {sideBarOpen && (
        <SidebarOpen ref={sidebarRef}>
          <div>test</div>
          <List
            height={600} // 사이드바의 높이
            itemCount={items.length} // 아이템 수
            itemSize={50} // 아이템의 높이
            width={250} // 사이드바의 너비
          >
            {Row}
          </List>
        </SidebarOpen>
      )}
      {!sideBarOpen && (
        <Sidebar ref={sidebarRef}>
          <div>Sidebar Content</div>
        </Sidebar>
      )}
    </div>
  );
};

export default Home;
