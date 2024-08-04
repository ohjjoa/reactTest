import React, { useState, useRef, useEffect } from 'react';
import { TestContainer, Sidebar, SidebarOpen } from './styles';
import icBurger from '../../assets/ic_burger.svg';

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
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  return (
    <div ref={backgroundRef}>
      <TestContainer onClick={burgerClick}>
        <img
          src={icBurger}
          alt="Burger Icon"
          style={{
            maxWidth: '100%',
            height: 'auto',
            cursor: 'pointer',
            marginTop: '50px',
            outline: 'none',
            boxShadow: 'none',
            border: 'none',
            userSelect: 'none', // 텍스트 선택 방지
          }}
          onClick={burgerClick} // 클릭 이벤트로 사이드바 열기/닫기 처리
        />
      </TestContainer>

      {sideBarOpen && (
        <SidebarOpen ref={sidebarRef}>
          <div>Sidebar Content</div>
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
