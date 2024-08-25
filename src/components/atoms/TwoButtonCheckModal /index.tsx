import React from 'react';
import { CheckModalContainer } from './styles';

interface CheckModalProps {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
  leftButtonText: string;
  rightButtonText: string;
}

const TowButtonCheckModal: React.FC<CheckModalProps> = ({ isVisible, onClose, title, content, leftButtonText, rightButtonText }) => {
  if (!isVisible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
      onClick={onClose}
    >
      <CheckModalContainer 
        onClick={(e) => e.stopPropagation()} 
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          textAlign: 'center',
          backgroundColor: '#fff',
          borderRadius: '8px',
          width: '80%',
          maxWidth: '400px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          height: '300px', // 모달의 고정된 높이를 설정
        }}
      >
        <div style={{ flexGrow: 1 }}>
          <span
            style={{
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: 'normal',
              marginBottom: '14px',
              color: '#514263',
            }}
          >
            {title}
          </span>
          <div>{content}</div>
        </div>

        <div style={{ display: 'flex', width: '100%' }}>
          <div
            onClick={onClose}
            style={{
              flex: 1,
              padding: '10px 0',
              fontSize: '14px',
              fontFamily: 'Pretendard',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
              color: '#fff',
              backgroundColor: '#8B63BB', // 왼쪽 버튼 색상
              borderRadius: '0px 0px 0px 8px',
              cursor: 'pointer',
              textAlign: 'center',
            }}
          >
            {leftButtonText}
          </div>
          <div
            onClick={onClose}
            style={{
              flex: 1,
              padding: '10px 0',
              fontSize: '14px',
              fontFamily: 'Pretendard',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
              color: '#fff',
              backgroundColor: '#514263', // 오른쪽 버튼 색상
              borderRadius: '0px 0px 8px 0px',
              cursor: 'pointer',
              textAlign: 'center',
            }}
          >
            {rightButtonText}
          </div>
        </div>
      </CheckModalContainer>
    </div>
  );
};

export default TowButtonCheckModal;
