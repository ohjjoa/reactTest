import React, { useState, useRef, useEffect } from 'react';
import { TestContainer, Sidebar, SidebarOpen } from './styles';
import icBurger from '../../assets/ic_burger.svg';

const Home = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  
  // 타이머 변수
  const [pressTimer, setPressTimer] = useState<NodeJS.Timeout | null>(null);
  const [isLongPress, setIsLongPress] = useState(false);

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

  const handleMouseDown = () => {
    setPressTimer(setTimeout(() => {
      setIsLongPress(true); // 롱 프레스 감지
      console.log('Long press detected!');
    }, 500)); // 롱 프레스 감지 시간 (500ms로 설정)
  };

  const handleMouseUp = () => {
    if (pressTimer) {
      clearTimeout(pressTimer); // 롱 프레스 타이머 취소
      setPressTimer(null);
      if (!isLongPress) {
        burgerClick(); // 롱 프레스가 아니라면 클릭으로 처리
        console.log('Click detected!');
      }
      setIsLongPress(false); // 롱 프레스 상태 초기화
    }
  };

  const handleTouchStart = () => {
    setPressTimer(setTimeout(() => {
      setIsLongPress(true); // 롱 프레스 감지
      console.log('Long press detected!');
    }, 500)); // 롱 프레스 감지 시간 (500ms로 설정)
  };

  const handleTouchEnd = () => {
    if (pressTimer) {
      clearTimeout(pressTimer); // 롱 프레스 타이머 취소
      setPressTimer(null);
      if (!isLongPress) {
        burgerClick(); // 롱 프레스가 아니라면 클릭으로 처리
        console.log('Click detected!');
      }
      setIsLongPress(false); // 롱 프레스 상태 초기화
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

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
            outline: 'none',
            boxShadow: 'none', 
            border: 'none',
            userSelect: 'none', // 텍스트 선택 방지
            pointerEvents: 'none'
          }} 
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseLeave={() => {
            if (pressTimer) {
              clearTimeout(pressTimer);
              setPressTimer(null);
              setIsLongPress(false);
            }
          }}
        />
          <div className="logo-box">
          <img className="logo-img" src="./logo.png" alt="Logo" />
          <p>
            <a href="https://test.abc.def">링크 바로가기</a>
          </p>
        </div>
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
